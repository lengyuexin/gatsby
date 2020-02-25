---
title: '前端数据层的探索与实践（二）'
date: '2019-03-16'
spoiler: ...
---

>第一部分：[前端数据层的探索与实践（一)](/data-layer-explore-first)<br />
>第二部分：前端数据层的探索与实践（二）

## 从实践的角度谈Redux-ORM概念
### Model
数据模型是Redux-ORM的核心。根据实际业务，我们会定义很多的数据模型，通过定义模型的静态属性字段field对实体进行建模。一个模型代表一张表，模型的名字用静态属性modelName定义，模型的属性用静态属性field定义，这些数据模型都继承于Model。模型的属性field可能是纯属性，也可能是指向另一张表的关系属性，通常有三种关系：一对多fk，一对一oneToOne，多对多many。

我们说一个模型代表一张表，那么一个模型实例我们可以认为这就是数据库中的一条记录。但模型实例并不是我们真正的底层对象，它只是一个由属性items/itemById组成的字面量对象，要访问真正的底层对象应使用ref属性。

在reducer中对Model进行操作时，Redux-ORM会把action放入队列，直到调用session.state才会让队列中的action顺序执行，直到得到最终结果。

### ORM
关系对象映射器。在ORM上注册Model，使用ORM生成session。在整个应用中，ORM通常是以单例的形式存在。在注册Model时，Redux-ORM会判断Model是否有多对多关系，如果有，会自动生成穿越模型（through models），这就像数据库中的关系表，里面存放着关联条目的id和这条对应关系本身的id。

### Session
Session用于与模型类数据进行交互。也就是说在对数据进行增删改查时，通常要使用模型来操作，此时我们想要获取Redux-ORM中的模型，就一定要从session实例中提取对应的模型实例，而不要直接从定义Model类的模块中导入，在操作完成后，要返回当前session实例的数据库状态state，以更新store。创建session实例，通常用orm.session(state)。如果在模型类中定义reducer，那么session会以第四个参数传入，前三个参数分别是state/payload/当前模型类的绑定版本。

## 实践，真实的应用
先看一下实现效果，顺便贴上代码库地址：[redux-orm-dva](https://github.com/Irislm/redux-orm-dva)

用我自己的理解，我认为实践应该有这四步：

* 定义模型类Model
* 初始化单例orm，并注册Model
* 使用选择器selector处理范式化数据，使组件对范式化数据不可见，更方便使用
* 定义reducer

整个demo我是在dvajs的基础上做的，如果习惯使用redux，可以看看Redux-ORM作者的[demo](https://github.com/tommikaikkonen/redux-orm-primer)，已是非常详细，但注意，这个demo还是使用的0.9以下的api，本文是基于0.9以上版本，会有一些api差异，但核心是一样的。

### 代码分析

**定义Student/Teacher/Grade/Class模型**，Student/Teacher都是最基础的结构，重点在Grade/Class，Grade和Class是一对多的关系，所以用`fk`，Class和Teacher是多对多的关系（注意会自动生成穿越模型ClassTeachers），所以用`many`，Class 和Student 是一对多的关系，也用`fk`。

```
// src/models/models.js
import { attr, many, fk } from 'redux-orm';
import PropTypes from 'prop-types';

export class Class extends CommonModel {
  static modelName = 'Class';

  static fields = {
    name: attr(),
    teachers: many('Teacher'),
    students: fk('Student'),
  };

  static propTypes = {
    name: PropTypes.string.isRequired,
    teachers: PropTypes.arrayOf(PropTypes.number),
    students: PropTypes.arrayOf(PropTypes.number),
  };

  static defaultProps = {
    name: '',
    teachers: [],
    students: [],
  }
}

export class Grade extends CommonModel {
  static modelName = 'Grade';
  static fields = {
    name: attr(),
    classes: fk('Class'),
  };

  static propTypes = {
    name: PropTypes.string.isRequired,
    classes: PropTypes.arrayOf(PropTypes.number),
  };

  static defaultProps = {
    name: '',
    classes: [],
  }
}
```
所有的Model都继承于`CommonModel`，这是一个自定义的父类，提取`static generate`方法。这个方法根据传入的属性默认值`newAttributes`，生成一个新的Model实例。

```
// src/models/models.js
import { attr, many, fk } from 'redux-orm';

class CommonModel extends Model {
  static generate(newAttributes = {}) {
    this.defaultProps = this.defaultProps || {};
    const combinedAttributes = {
      ...this.defaultProps,
      ...newAttributes,
    };
    return this.create(combinedAttributes);
  }
}
```

定义orm，这个没啥好说的，到处都会用到orm这个单例。

```
// src/models/orm.js
import { ORM } from 'redux-orm';
import { Student, Teacher, Grade, Class } from './models';

const orm = new ORM();
orm.register(Student, Teacher, Grade, Class);

export default orm;
```

**定义selector**。定义state之前，我们先看selector的基本用法。[reselect](https://github.com/reduxjs/reselect)是一个选择库，简单来说，就是用它可以组合选择，并且它可以帮你避免重复渲染。用法上记住两个概念，一是`input selector`，根据传入的参数，做一些计算返回结果，二是`following selector`，以input selector为参数，得到最终结果。

下面是最基本的用法，从Model中获取真实数据。

```
// src/routes/selectors.js
import { createSelector } from 'reselect';
import orm from '../models/orm';

const selectSession = entities => orm.session(entities);

export const selectTeacher = createSelector(
  selectSession,
  ({ Teacher }) => {
    return Teacher.all().toRefArray();
  },
);
```

复杂一点的，`Class`下有多个`Student`，在这里处理好数据，以便在组件中渲染出学生的名字。`Grade`下有多个`Class`，同理。

```
export const selectGrade = createSelector(
  selectSession,
  ({ Grade, Class }) => {
    return Grade.all().toRefArray().map(v => {
      if (v.classes && v.classes.length !== 0) {
        return {
          ...v,
          classes: v.classes.map(stuId => {
            const ModelInstance = Class.withId(stuId);
            return ModelInstance ? ModelInstance.ref : '';
          })
        };
      }
      return v;
    });
  },
);
export const selectClass = createSelector(
  selectSession,
  ({ Class, Student }) => {
    return Class.all().toRefArray().map(v => {
      if (v.students && v.students.length !== 0) {
        return {
          ...v,
          students: v.students.map(stuId => {
            const studentModel = Student.withId(stuId);
            return studentModel ? studentModel.ref : '';
          })
        };
      }
      return v;
    });
  },
);
````
这个时候我们加载`Grade`默认数据，就可以先看到简单的渲染结果，是这样。

![](https://user-gold-cdn.xitu.io/2019/3/16/169828580792736a?w=2788&h=982&f=png&s=87457)
**定义state**。state长这样，`editingOrm`先不管，先看`orm.getEmptyState()`，会拿到注册好的Model数据。

```
// src/models/example.js

import orm from './orm';

export default {
  namespace: 'example',
  state: {
    orm: orm.getEmptyState(),
    editingOrm: orm.getEmptyState(),
    selectedClassId: '',
    selectedGradeId: '',
  },
}
```
**1、如何初始化模型数据呢**，主要是使用`static upsert`方法，将一条一条的数据插入数据库即可，然后返回`session.state`更新`state.orm`。下面是reducer：

```
    insertEntities(state, { payload: {data, modelType} }) {
      const session = orm.session(state.orm);
      const ModelClass = session[modelType];
      data.forEach(v => {
        ModelClass.upsert(v);
      })
      return { 
        ...state, 
        orm: session.state,
      };
    },
```
**2、如何清空模型数据呢**，主要是使用`static delete`，可以清空整个模型，也可以这样删除某个模型实例`ModelClass.withId(id).delete()`。

```
    delete(state, { payload: { modelType } }) {
      const session = orm.session(state.orm);
      const ModelClass = session[modelType];
      ModelClass.delete();
      return { 
        ...state, 
        orm: session.state,
      };
    },
```
**3、在编辑模型数据时**，我们通常会有取消/保存两个操作，点击取消，编辑数据不应用，点击保存，才将编辑数据应用于被编辑的条目。所以会有`editingOrm`这样的state，用于存放编辑数据。注意：Class与Teacher是多对多的关系，所以我们需要对teachers做单独处理，使用`update`对`Class`进行更新，可以触发生成`editingOrm`下的穿越模型数据`ClassTeachers`。

```
    selectClass(state, { payload: { id }}) {
      const session = orm.session(state.orm);
      const editingSession = orm.session(state.editingOrm);
      const { Class, ClassTeachers } = session;
      const classData = Class.withId(id).ref;
      const { Class: EditingClass } = editingSession;
      const modelInstance = EditingClass.generate(classData);
      const classTeachers = ClassTeachers.filter({ fromClassId: id }).all().toRefArray().map(v => v.toTeacherId);
      modelInstance.update({teachers: classTeachers});
      return {
        ...state,
        selectedClassId: id,
        editingOrm: editingSession.state,
      }
    },
```

**4、更新模型数据**，使用`static update`。这里使用的`editingOrm`，因为在更新class数据时，是把这一份待更新数据放入了`editingOrm`，等到保存的时候再应用于`orm`。

```
    updateSelectedClass(state, { payload }) {
      const editingSession = orm.session(state.editingOrm);
      const { Class } = editingSession;
      const modelInstance = Class.withId(state.selectedClassId);
      modelInstance.update(payload);
      return {
        ...state,
        editingOrm: editingSession.state,
      }
    },
```
**5、应用编辑数据到被编辑条目**，这就和3类似了，只是现在是将`editingOrm`的数据写到`orm`。

```
    saveClass(state) {
      const id = state.selectedClassId;
      const session = orm.session(state.orm);
      const editingSession = orm.session(state.editingOrm);
      const { Class } = session;
      const { Class: EditingClass, ClassTeachers } = editingSession;
      const editingData = EditingClass.withId(id).ref;
      const modelInstance = Class.withId(id);
      const classTeachers = ClassTeachers.filter({ fromClassId: id }).all().toRefArray().map(v => v.toTeacherId);
      modelInstance.update({
        ...editingData,
        teachers: classTeachers,
      })
      return {
        ...state,
        orm: session.state,
      }
    },
```

到这儿，整个代码就分析完了。不知道朋友们有没有发现非常微妙的事情，reducer仿佛总是可以复用的，只要我们传入指定的`ModelType`！不过我在这儿就没有继续延展了，有兴趣大家可以自己再研究下，这就是你某一天写重复代码终于写烦的时候想做的事了。


## 结束语
其实用不用redux-orm还是取决于项目的复杂程度，而且也不需要每个组件都必须用，我觉得这是redux-orm的一个好处，我们可以在这次需求业务复杂的时候用它，也可以在同一个项目里，需求不复杂的时候甩掉它。非常开心的是它让我不用再处理那么多的层级，希望以后在真实的业务场景中能再实践一次！欢迎朋友们指正这次实践的问题～

参考资料：

[https://blog.isquaredsoftware.com/...](https://blog.isquaredsoftware.com/series/practical-redux/)

[http://tommikaikkonen.github.io/...](http://tommikaikkonen.github.io/redux-orm/index.html)

(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"8o9u":function(e,t,c){"use strict";c.r(t),c.d(t,"_frontmatter",(function(){return l})),c.d(t,"default",(function(){return p}));c("rGqo"),c("yt8O"),c("Btvt"),c("RW0V"),c("91GP"),c("q1tI");var b=c("7ljp"),n=c("Hv6d");var l={},a={_frontmatter:l},r=n.a;function p(e){var t=e.components,c=function(e,t){if(null==e)return{};var c,b,n={},l=Object.keys(e);for(b=0;b<l.length;b++)c=l[b],t.indexOf(c)>=0||(n[c]=e[c]);return n}(e,["components"]);return Object(b.b)(r,Object.assign({},a,c,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("img",Object.assign({parentName:"p"},{src:"https://img-blog.csdnimg.cn/20210327133426421.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyODEzNDkx,size_16,color_FFFFFF,t_70#pic_center",alt:null}))),Object(b.b)("h2",null,"Docker是什么？"),Object(b.b)("p",null,"Docker 是一个由go语言编写的，开源的应用容器引擎。"),Object(b.b)("p",null,"开发者可以打包他们的应用及依赖包到一个可移植的镜像中，然后发布到任何流行的Linux或Windows机器上，也可以实现虚拟化。"),Object(b.b)("p",null,"容器是完全使用沙箱机制，相互之间不会有任何接口。"),Object(b.b)("h2",null,"Docker背后的实现原理是什么？"),Object(b.b)("h3",null,"Docker架构"),Object(b.b)("p",null,"实现一个完整的容器，需要 Namespace、Cgroups 和联合文件系统这三项Linux技术的支撑。"),Object(b.b)("p",null,Object(b.b)("img",Object.assign({parentName:"p"},{src:"https://img-blog.csdnimg.cn/20210327133512825.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyODEzNDkx,size_16,color_FFFFFF,t_70#pic_center",alt:null}))),Object(b.b)("h3",null,"Namespace"),Object(b.b)("p",null,"Namespace 是 Linux 内核用来隔离内核资源的一种方式。"),Object(b.b)("p",null,"通过Namespace可以对某些进程进行限制，使得其只能访问与自身相关的那部分资源，其他资源不可见。"),Object(b.b)("p",null,"如此，不同进程之间也是相互无感知的。"),Object(b.b)("p",null,"这种隔离覆盖面十分广泛，包括但不限于：隔离进程 ID、主机名、用户 ID、文件名、网络访问和进程间通信等相关资源。"),Object(b.b)("p",null,"在Docker 的世界中，主要用到以下六种命名空间。"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"pid namespace：隔离进程 ID"),Object(b.b)("li",{parentName:"ul"},"net namespace：隔离网络接口"),Object(b.b)("li",{parentName:"ul"},"mnt namespace：隔离文件系统挂载点"),Object(b.b)("li",{parentName:"ul"},"ipc namespace：隔离进程间通信(如:信号量,消息队列和共享内存)"),Object(b.b)("li",{parentName:"ul"},"uts namespace：隔离主机名和域名。"),Object(b.b)("li",{parentName:"ul"},"user namespace : 隔离用户和用户组，可实现docker内拥有root权限而在主机上只是普通用户")),Object(b.b)("p",null,"正是由于 Docker 使用了 Linux 的这些 Namespace 技术，才实现了 Docker 容器的隔离。"),Object(b.b)("h3",null,"Cgroups"),Object(b.b)("p",null,"Cgroups 是控制组群（control groups）的简写，可用于限制、控制与分离一个进程组的资源（如CPU、内存、磁盘输入输出等）。"),Object(b.b)("p",null,"在Docker 的世界中，Cgroups 通常用来限制容器的 CPU 和内存等资源的使用。"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"资源限制 : 限制资源的使用量(如通过限制某个业务的内存上限，保护主机其他业务的安全运行)。"),Object(b.b)("li",{parentName:"ul"},"优先级控制 : 不同的组可以有不同的资源（ CPU 、磁盘 IO 等）使用优先级。"),Object(b.b)("li",{parentName:"ul"},"审计 ：计算控制组的资源使用情况。"),Object(b.b)("li",{parentName:"ul"},"控制 ：控制进程的挂起或恢复。")),Object(b.b)("p",null,Object(b.b)("img",Object.assign({parentName:"p"},{src:"https://img-blog.csdnimg.cn/20210327133655902.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyODEzNDkx,size_16,color_FFFFFF,t_70#pic_center",alt:null}))),Object(b.b)("h3",null,"联合文件系统"),Object(b.b)("p",null,"联合文件系统是一种分层、轻量级并且高性能的文件系统，它支持对文件系统的修改作为一次提交来一层层的叠加，同时可以将不同目录挂载到同一个虚拟文件系统下。"),Object(b.b)("p",null,"在Docker 的世界中，联合文件系统为容器提供构建层，使得容器可以实现写时复制以及镜像的分层构建和存储。"),Object(b.b)("p",null,"镜像本身是只读的，在运行某个容器的时候，会在镜像外层附加一个可读写层，这也是基于联合文件系统实现的。"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{}),"FROM busybox\nCOPY test /tmp/test\nRUN mkdir /tmp/testdir\n")),Object(b.b)("p",null,"上述每一行命令都会生成一个镜像层，当不同的镜像之间有相同的镜像层时，便可以实现不同的镜像之间共享镜像层的效果。（比如基于base镜像扩展的镜像）"),Object(b.b)("p",null,Object(b.b)("img",Object.assign({parentName:"p"},{src:"https://img-blog.csdnimg.cn/20210327133835851.png#pic_center",alt:null}))),Object(b.b)("p",null,"镜像层共享这个功能十分强大，每一层都可以共享。"),Object(b.b)("p",null,Object(b.b)("img",Object.assign({parentName:"p"},{src:"https://img-blog.csdnimg.cn/20210327133849751.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyODEzNDkx,size_16,color_FFFFFF,t_70#pic_center",alt:null}))),Object(b.b)("h3",null,"操作系统层面的虚拟化"),Object(b.b)("p",null,"以上这种对进程进行封装隔离的技术，属于操作系统层面的虚拟化技术。隔离的进程独立于宿主和其它的隔离的进程，因此也称其为容器。容器本质是一个受限制的进程，它没办法像直接运行在主机上的进程那样获取主机上的进程、环境变量、网络等信息。 "),Object(b.b)("p",null,"该技术最初实现是基于 LXC(Linux Container)，从 0.7 版本以后开始去除 LXC，转而使用自行开发的 libcontainer。从自1.11版本开始，进一步演进为使用 runC 和 containerd。"),Object(b.b)("h2",null,"客户端/服务端模式"),Object(b.b)("p",null,Object(b.b)("img",Object.assign({parentName:"p"},{src:"https://img-blog.csdnimg.cn/20210327134013950.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyODEzNDkx,size_16,color_FFFFFF,t_70#pic_center",alt:null}))),Object(b.b)("h3",null,"docker"),Object(b.b)("p",null,"如上图所示：Docker和MySQL一样，也是客户端-服务端的模式。Docker 客户端其实是一种泛称，用户可通过 docker 命令或者直接请求 REST API 的方式与 Docker 服务端交互。"),Object(b.b)("h3",null,"dockerd"),Object(b.b)("p",null,"Docker 服务端是 Docker 所有后台服务的统称。其中 dockerd 是一个非常重要的后台管理进程，它负责响应和处理来自 Docker 客户端的请求，然后将客户端的请求转化为 Docker 的具体操作。这个过程中dockerd 会通过grpc(一个rpc框架)与containerd通信，containerd作为dockerd的下层服务。"),Object(b.b)("h3",null,"runC"),Object(b.b)("p",null,"runC是一个根据OCI(开放容器标准)规范生成和运行容器的CLI工具,可通过命令行的形式控制容器的销毁与创建。"),Object(b.b)("h3",null,"contained"),Object(b.b)("p",null,"containerd 是 dockerd 和 runC 之间的一个中间交流组件，docker 对容器的管理和操作基本都是通过 containerd 完成的。例如：容器生命周期管理、镜像管理。"),Object(b.b)("h3",null,"containerd-shim"),Object(b.b)("p",null,"containerd通过containerd-shim 启动并管理 runC，containerd-shim主要作用是可以在不中断容器运行的情况下升级或重启 dockerd。"),Object(b.b)("h2",null,"Docker与虚拟化技术"),Object(b.b)("p",null,"虚拟化技术指的是通过隐藏特定计算平台的实际物理特性，为用户提供抽象、统一、模拟的计算环境。这种计算环境，也被称为虚拟机。"),Object(b.b)("p",null,"Docker 是对Linux容器的一种封装，具有高性能，低开销，接口简单易用等特点。真正使其超过其他同类产品，迅速占领市场，成为目前最流行的Linux容器技术解决方案的根本是Docker引入了镜像功能。"),Object(b.b)("p",null,"与系统级别的虚拟机不同，容器技术的虚拟其实是进程级别的。"),Object(b.b)("p",null,Object(b.b)("img",Object.assign({parentName:"p"},{src:"https://img-blog.csdnimg.cn/20210327134124693.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyODEzNDkx,size_16,color_FFFFFF,t_70#pic_center",alt:null}))),Object(b.b)("p",null,"从上图中可以看出，虚拟机是通过在宿主机上启动一个虚拟机监视器 HyperVisor 来管理控制虚拟机的，最经典的 HyperVisor 就是 VirtualBox。与容器相比，虚拟机包含了整个客户操作系统，这也是二者性能差异的主要成因。"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"从启动角度来看，进程级别的容器启动肯定是比系统级别的虚拟机启动要快得多。"),Object(b.b)("li",{parentName:"ul"},"从资源占用角度来看，容器是按需占用，虚拟机是全量占用。"),Object(b.b)("li",{parentName:"ul"},"从资源利用率角度来看，多容器可以共享资源，而虚拟机是独享资源。"),Object(b.b)("li",{parentName:"ul"},"从构建角度来看，容器是按需构建，体积小；虚拟机是全量构建，体积大。")),Object(b.b)("p",null,Object(b.b)("img",Object.assign({parentName:"p"},{src:"https://img-blog.csdnimg.cn/20210327134154541.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyODEzNDkx,size_16,color_FFFFFF,t_70#pic_center",alt:null}))),Object(b.b)("h2",null,"Docker解决了什么问题？"),Object(b.b)("p",null,"Docker是容器技术的一种体现，而容器技术的根本是为了抹平软件运行的环境差异。"),Object(b.b)("p",null,"如何抹平？"),Object(b.b)("p",null,"Docker通过build命令将应用程序和其依赖构建成镜像文件，镜像是只读的，这意味着构建完成后，镜像不会再发生任何变化。如此，基于该镜像启动的容器环境必然一致。同理，跑在这个容器中的应用程序所处环境也一致。"),Object(b.b)("p",null,"此外，容器是完全使用沙箱机制，容器相互之间完全隔离，互不影响。"),Object(b.b)("h2",null,"Docker 有哪些适用场景？"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"提供应用运行环境，辅助CI/CD工作流"),Object(b.b)("li",{parentName:"ul"},"作为Serverless的底层依赖，动态扩缩容"),Object(b.b)("li",{parentName:"ul"},"搭建微服务架构，可通过多容器运行多服务的形式对复杂项目进行拆解"),Object(b.b)("li",{parentName:"ul"},"部署环境迁移"),Object(b.b)("li",{parentName:"ul"},"other...")),Object(b.b)("h2",null,"核心概念"),Object(b.b)("h3",null,"镜像"),Object(b.b)("p",null,"Docker 镜像是一个特殊的文件系统，它包含了容器运行时所需要的所有基础文件和配置信息，是容器启动的基础。这就意味着，必须先有镜像才能启动容器。"),Object(b.b)("p",null,"镜像可以自己构建也可以从镜像仓库拉取。"),Object(b.b)("h3",null,"容器"),Object(b.b)("p",null,"镜像和容器的关系就好像类和实例的关系。一个类可以有很多实例，一个镜像也可以有很多容器。\n容器不可以脱离镜像存在。事实上，可以理解为容器=容器层(可写)+镜像（只读）。"),Object(b.b)("p",null,Object(b.b)("img",Object.assign({parentName:"p"},{src:"https://img-blog.csdnimg.cn/20210327134407767.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyODEzNDkx,size_16,color_FFFFFF,t_70#pic_center",alt:null}))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"写时复制")),Object(b.b)("p",null,"这部分涉及到一个写时复制（copy-on-write）的技术，能够有效的提高磁盘的利用率。\n尤其是对读操作，十分的友好。"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"写时复制会将要修改的内容从镜像拷贝到容器的可读写层，并不会直接修改镜像的源文件。"),Object(b.b)("li",{parentName:"ul"},"这意味着即便是写的时候有其他容器对同一镜像资源进行读取，也不会发生资源不一致的情况。"),Object(b.b)("li",{parentName:"ul"},"多容器操作同一个文件也是各自在自己的容器空间创建读写层并完成修改，相互隔离，互不影响。")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"生命周期")),Object(b.b)("p",null,"每一个容器完整生命周期都具有创建，运行，停止，暂停，删除这五个状态。"),Object(b.b)("p",null,Object(b.b)("img",Object.assign({parentName:"p"},{src:"https://img-blog.csdnimg.cn/20210327134432643.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyODEzNDkx,size_16,color_FFFFFF,t_70#pic_center",alt:null}))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"创建：容器被创建，所需资源已就绪，容器中的应用程序尚未运行。"),Object(b.b)("li",{parentName:"ul"},"运行：容器中的应用程序正在运行。"),Object(b.b)("li",{parentName:"ul"},"暂停：容器中的所有应用程序都处于暂停 ( 非停止 ) 状态。"),Object(b.b)("li",{parentName:"ul"},"停止：容器中的应用程序均已停止，但所占用资源不会释放。"),Object(b.b)("li",{parentName:"ul"},"删除：容器已删除，所占用资源全部释放。")),Object(b.b)("p",null,"值得注意的是：如果要删除一个镜像，必须保证没有容器占用，停止状态的容器也不行。"),Object(b.b)("p",null,Object(b.b)("img",Object.assign({parentName:"p"},{src:"https://img-blog.csdnimg.cn/20210327134504748.png#pic_center",alt:null}))),Object(b.b)("h3",null,"仓库"),Object(b.b)("p",null,"Docker 的镜像仓库(public/private)类似于代码仓库，可以用来存储和分发 Docker 镜像。\n镜像，容器，代码仓库三者关系如下:"),Object(b.b)("p",null,Object(b.b)("img",Object.assign({parentName:"p"},{src:"https://img-blog.csdnimg.cn/20210327134527844.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyODEzNDkx,size_16,color_FFFFFF,t_70#pic_center",alt:null}))),Object(b.b)("h2",null,"安装"),Object(b.b)("p",null,"官方安装方式 Docker Desktop"),Object(b.b)("p",null,"Docker Desktop 其本质是借助windows和macOS的平台特性，搭建了一个Linux环境,进而运行docker。"),Object(b.b)("p",null,Object(b.b)("img",Object.assign({parentName:"p"},{src:"https://img-blog.csdnimg.cn/20210327134625993.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyODEzNDkx,size_16,color_FFFFFF,t_70#pic_center",alt:null}))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object.assign({parentName:"li"},{href:"https://hub.docker.com/editions/community/docker-ce-desktop-mac/"}),"mac"),":",Object(b.b)("a",Object.assign({parentName:"li"},{href:"https://hub.docker.com/editions/community/docker-ce-desktop-mac/"}),"https://hub.docker.com/editions/community/docker-ce-desktop-mac/")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object.assign({parentName:"li"},{href:"https://hub.docker.com/editions/community/docker-ce-desktop-windows/"}),"windows"),":",Object(b.b)("a",Object.assign({parentName:"li"},{href:"https://hub.docker.com/editions/community/docker-ce-desktop-windows/"}),"https://hub.docker.com/editions/community/docker-ce-desktop-windows/"))),Object(b.b)("h3",null,"镜像加速"),Object(b.b)("p",null,"为使得在国内从Docker Hub拉取镜像更快，可以配置镜像加速器。"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object.assign({parentName:"li"},{href:"https://www.aliyun.com/product/acr?source=5176.11533457&userCode=8lx5zmtu"}),"阿里云加速器(控制台 -> 登录账号-> 应用搜索容器镜像服务 -> 侧边栏选择镜像加速器 -> 复制地址)")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object.assign({parentName:"li"},{href:"https://hub-mirror.c.163.com"}),"网易云加速器")," ",Object(b.b)("a",Object.assign({parentName:"li"},{href:"https://hub-mirror.c.163.com"}),"https://hub-mirror.c.163.com")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object.assign({parentName:"li"},{href:"https://mirror.baidubce.com"}),"百度云加速器")," ",Object(b.b)("a",Object.assign({parentName:"li"},{href:"https://mirror.baidubce.com"}),"https://mirror.baidubce.com")),Object(b.b)("li",{parentName:"ul"},"由于镜像服务可能出现宕机，建议同时配置多个镜像。")),Object(b.b)("h3",null,"配置方式"),Object(b.b)("p",null,"下载安装官方提供的Docker Desktop后，点击docker图标，选择setting(windows)或者preferences(macOS)面板，切换到docker engine ,编辑json文件，加入镜像源地址后点击右下角的Apply&Restart。"),Object(b.b)("p",null,Object(b.b)("img",Object.assign({parentName:"p"},{src:"https://img-blog.csdnimg.cn/20210327134932604.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyODEzNDkx,size_16,color_FFFFFF,t_70#pic_center",alt:null}))),Object(b.b)("h3",null,"安装检测"),Object(b.b)("p",null,"命令行输入docker info 后关注Registry Mirrors"),Object(b.b)("p",null,Object(b.b)("img",Object.assign({parentName:"p"},{src:"https://img-blog.csdnimg.cn/20210327134957227.png#pic_center",alt:null}))),Object(b.b)("h3",null,"Hello world"),Object(b.b)("p",null,"本示例将展示一个简单的koa server如何在docker中跑起来。"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"1. 创建项目koa-server")),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{}),"# 新建文件夹\nmkdir koa-server\n# 进入\ncd koa-server\n# 项目初始化，生成package.json\nnpm init -y\n# 安装koa\nnpm i koa \n# 新建app.js\ntouch app.js\n\n# 在app.js中写入如下代码\nconst Koa=require('koa')\nconst app=new Koa()\napp.use(ctx=>{\n    ctx.body='hello koa'\n})\napp.listen(3000,()=>{\n    console.log('run server__')\n})\n\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"2. 编写Dockerfile文件，根据其描述构建镜像")),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{}),"# 新建Dockerfile文件\ntouch Dockerfile\n# 写入如下内容\nFROM node:12.20.1\nCOPY . /app\nWORKDIR /app\nRUN npm i\nEXPOSE 3000\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"命令解释")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"🈯️定基础镜像为node，冒号表示标签,此处指的是12.20.1版本的node"),Object(b.b)("li",{parentName:"ul"},"将当前目录下的所有(非.dockerignore排除)文件，都拷贝进入 image 文件的/app目录。"),Object(b.b)("li",{parentName:"ul"},"指定工作路径为/app。"),Object(b.b)("li",{parentName:"ul"},"安装依赖(安装后所有的依赖，都将打包进入image文件)。"),Object(b.b)("li",{parentName:"ul"},"将容器 3000 端口暴露出来， 允许外部连接这个端口。")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"其他常用命令"),"\n",Object(b.b)("img",Object.assign({parentName:"p"},{src:"https://img-blog.csdnimg.cn/20210327135333838.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyODEzNDkx,size_16,color_FFFFFF,t_70#pic_center",alt:null}))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"3. 编写.dockerignore排除文件")),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{}),"# 新建.dockerignore排除文件\ntouch .dockerignore\n# 写入如下内容\nnode_modules\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"4. 构建镜像")),Object(b.b)("p",null,"koa-server根目录下执行如下命令构建镜像："),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{}),"docker image build -t koa-server-image .\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"-t用于指定构建的镜像名，后面可用冒号指定标签名，默认latest"),Object(b.b)("li",{parentName:"ul"},"最后的那个点表示 Dockerfile 文件所在的路径，因为是进入koa-server后执行的构建命令，所以是当前目录，可以看成是./"),Object(b.b)("li",{parentName:"ul"},"同镜像同标签或不指定标签多次构建会是同一个"),Object(b.b)("li",{parentName:"ul"},"镜像构建完成后可用 docker image ls 命令查看镜像列表:")),Object(b.b)("p",null,Object(b.b)("img",Object.assign({parentName:"p"},{src:"https://img-blog.csdnimg.cn/20210327135603645.png#pic_center",alt:null}))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"5. 启动容器")),Object(b.b)("p",null,"Docker内部环境与主机资源都是隔离的，因此需要定义容器与物理机的端口映射来进行访问。"),Object(b.b)("p",null,"此外，容器是在镜像基础上启动，所以要先保证有这个镜像。如果本地没有，默认会去公开镜像仓库中查找同名镜像，找到后拉取到本地再执行docker run 命令。"),Object(b.b)("p",null,"镜像，容器，应用程序三者关系是：镜像是容器启动的先决条件，容器中运行着真正的应用程序。"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{}),"docker container run -p 3000:3000 -it koa-server-image /bin/bash\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"-p参数就是用于指定端口映射，格式为主机端口：容器端口"),Object(b.b)("li",{parentName:"ul"},"-it参数一般配合使用，生成一个交互终端"),Object(b.b)("li",{parentName:"ul"},"/bin/bash 相当于在-it参数返回的交互终端中执行/bin/bash "),Object(b.b)("li",{parentName:"ul"},"因为是node环境，不加/bin/bash效果就相当于终端输入node后回车的效果")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"对于上述-p参数做一个补充说明，这里涉及到了docker中用于处理端口映射的docker-proxy 组件。当我们使用带有-p 参数的docker run命令，该组件就会把容器内相应的端口映射到主机上来，这样主机就可以访问容器内资源了。")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"6. 效果验证")),Object(b.b)("p",null,"上述命令执行后会返回一个交互终端，此时已经进入容器内部，通过执行node app.js启动koa-server"),Object(b.b)("p",null,Object(b.b)("img",Object.assign({parentName:"p"},{src:"https://img-blog.csdnimg.cn/20210327135647167.png#pic_center",alt:null}))),Object(b.b)("p",null,"浏览器访问地址 ",Object(b.b)("a",Object.assign({parentName:"p"},{href:"http://localhost:3000/"}),"http://localhost:3000/")," ，页面显示hello koa"),Object(b.b)("p",null,Object(b.b)("img",Object.assign({parentName:"p"},{src:"https://img-blog.csdnimg.cn/20210327135656276.png#pic_center",alt:null}))),Object(b.b)("p",null,"如果想退出容器，可以先ctrl+c打断应用程序，然后ctrl+d退出。\n如果安装了Docker Desktop，可用图形化界面形式去管理镜像和容器，十分方便。"),Object(b.b)("p",null,Object(b.b)("a",Object.assign({parentName:"p"},{href:"https://www.runoob.com/docker/docker-run-command.html"}),"Docker run 命令"),":",Object(b.b)("a",Object.assign({parentName:"p"},{href:"https://www.runoob.com/docker/docker-run-command.html%E3%80%82"}),"https://www.runoob.com/docker/docker-run-command.html。")),Object(b.b)("h2",null,"容器迁移"),Object(b.b)("p",null,"通过docker提供的export和import命令可以十分方便的实现容器的导入导出，从而完成迁移工作。"),Object(b.b)("h3",null,"导出"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{}),"docker export 容器名 > xxx.zip\n#demo\ndocker export busybox > busybox.zip\n")),Object(b.b)("p",null,"执行完后会生成一个压缩包，可发送到另一台机子上再导入使用。"),Object(b.b)("h3",null,"导入"),Object(b.b)("p",null,"导出的容器在被导入后实际会成为一个镜像，可使用docker run 命令基于该镜像启动容器。"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{}),"docker import xxx.zip xxx\n# demo \ndocker import busybox.zip busybox:test\ndocker run -it busybox:test sh\n")),Object(b.b)("h2",null,"再会"),Object(b.b)("p",null,"情如风雪无常,"),Object(b.b)("p",null,"却是一动既殇。"),Object(b.b)("p",null,"感谢你这么好看还来阅读我的文章,"),Object(b.b)("p",null,"我是冷月心,下期再见。"),Object(b.b)("h2",null,"推荐阅读"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object.assign({parentName:"li"},{href:"https://yeasy.gitbook.io/docker_practice/"}),"Docker —— 从入门到实践")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object.assign({parentName:"li"},{href:"http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html"}),"Docker 入门教程")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object.assign({parentName:"li"},{href:"https://juejin.cn/book/6844733746462064654"}),"开发者必备的 Docker 实践指南")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object.assign({parentName:"li"},{href:"https://kaiwu.lagou.com/course/courseInfo.htm?courseId=455#/content"}),"由浅入深吃透 Docker")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object.assign({parentName:"li"},{href:"https://time.geekbang.org/column/intro/305"}),"Serverless入门课")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object.assign({parentName:"li"},{href:"https://www.cnblogs.com/JetpropelledSnake/p/10330674.html"}),"Docker学习笔记之运行和管理容器")," "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object.assign({parentName:"li"},{href:"https://www.jianshu.com/p/de3184ad0800"}),"Docker 架构中的几个核心概念"))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docker-index-mdx-a45ace1a4ee8f2ff2b9d.js.map
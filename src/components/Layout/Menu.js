import React from "react"
import { Link } from "gatsby"
import sun from "../../assets/sun.png"
import moon from "../../assets/moon.png"
export default ({ location, themeToggle: onThemeToggle, theme }) => {
  const menus = [
    {
      name: (
        <Link
          to={"/"}
          style={{
            boxShadow: "none",
            alignItems: "center",
          }}
        >
          首页 / HOME
        </Link>
      ),
      path: "/",
    },
    {
      name: (
        <Link
          to={"/blog"}
          style={{
            boxShadow: "none",
            alignItems: "center",
          }}
        >
          博客 / BLOG
        </Link>
      ),
      path: "/blog",
    },
    {
      name: (
        <a
          href="https://juejin.cn/user/184373684746398"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            boxShadow: "none",
          }}
        >
          掘金
        </a>
      ),
      // path: '/'
    },
    {
      name: (
        <a
          href="https://lengyuexin.blog.csdn.net/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            boxShadow: "none",
          }}
        >
          CSDN
        </a>
      ),
      // path: '/blog'
    },
    {
      name: (
        <a
          href="https://lengyuexin.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            boxShadow: "none",
          }}
        >
          enote 英语博客
        </a>
      ),
      // path: '/blog'
    },
    {
      name: (
        /* eslint-disable */

        <div
          onClick={onThemeToggle}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <span style={{ marginRight: "2px", marginTop: "-1px" }}>
            {theme === "light" ? "早安" : "晚安"}
          </span>
          {theme === "light" ? (
            <img
              src={sun}
              width="18"
              height="18"
              role="presentation"
              style={{ pointerEvents: "none" }}
              alt="light mode"
            />
          ) : (
            <img
              src={moon}
              width="18"
              height="18"
              role="presentation"
              style={{ pointerEvents: "none" }}
              alt="dark mode"
            />
          )}
        </div>
      ),
      path: "",
    },
  ]
  /* eslint-enable */
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "row",
          margin: 0,
          padding: 0,
        }}
      >
        {menus.map((v, idx) => (
          <li
            style={{
              display: "flex",
              marginLeft: "0.5rem",
              marginRight: "0.5rem",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "0.5rem",
              borderTop:
                location && location.pathname === v.path
                  ? "3px solid var(--textLink)"
                  : "",
              borderBottom: "none",
            }}
            key={idx}
          >
            {v.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

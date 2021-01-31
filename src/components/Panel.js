import React from "react"

function Panel({ children, style = {} }) {
  return (
    <div
      style={{
        fontSize: "1em",
        border: "1px solid var(--hr)",
        borderRadius: "0.75em",
        padding: "0.75em",
        color: "inherit",
        margin: "0.8rem 0",
        background: "var(--inlineCode-bg)",
        // wordBreak: 'keep-all',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export default Panel

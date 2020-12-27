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

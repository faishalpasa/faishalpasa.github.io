import React from "react"

const AskPage: React.FC = () => (
  <div
    style={{
      margin: 0,
      padding: 24,
      boxSizing: "border-box",
      height: "100vh",
      width: "100vw",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#000",
    }}
  >
    <img
      src="/ask/images/diagram-black.png"
      alt="Diagram"
      style={{
        maxWidth: "100%",
        maxHeight: "100%",
        width: "100%",
        height: "100%",
        objectFit: "contain",
        display: "block",
      }}
    />
  </div>
)

export default AskPage

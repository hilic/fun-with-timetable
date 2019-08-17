import React, { useLayoutEffect, useRef } from "react";

export default function Scrollable({ children, onScroll }) {
  const node = useRef();
  useLayoutEffect(() => {
    node.current.scrollTop = 280;
  }, []);

  return (
    <div
      ref={node}
      style={{
        flex: "1 1 auto",
        display: "flex",
        alignItems: "flex-start",
        overflowX: "auto",
        overflowY: "scroll"
      }}
      onScroll={onScroll}
    >
      <div
        style={{
          minWidth: "100%",
          flex: "0 0 auto",
          display: "inline-flex",
          overflow: "hidden",
          position: "relative"
        }}
      >
        {children}
      </div>
    </div>
  );
}

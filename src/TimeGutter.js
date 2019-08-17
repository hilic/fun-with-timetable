import React, { useLayoutEffect, useRef } from "react";

function TimeCell({ hours }) {
  return (
    <div
      style={{
        height: 40,
        position: "relative"
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -12
        }}
      >
        {hours}:00
      </div>
    </div>
  );
}

export default function TimeGutter({ scrollTop }) {
  const node = useRef();

  useLayoutEffect(() => {
    node.current.scrollTop = scrollTop;
  }, [node, scrollTop]);

  return (
    <div
      ref={node}
      style={{
        flex: "0 0 48px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        maxWidth: 48,
        width: 48,
        backgroundColor: "#bcbcbc",
        overflowY: "hidden",
        height: "auto",
        zIndex: 10
      }}
    >
      <div style={{ minWidth: 48 }}>
        {[...Array(24).keys()].map(i => (
          <TimeCell key={i} hours={i} />
        ))}
      </div>
    </div>
  );
}

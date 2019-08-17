import React from "react";

function Line() {
  return (
    <div
      style={{
        height: 40
      }}
    >
      <div
        style={{
          borderBottom: "#dadce0 1px solid",
          position: "absolute",
          width: "100%",
          marginTop: -1,
          zIndex: 3,
          pointerEvents: "none"
        }}
      />
    </div>
  );
}

const Grid = React.memo(function Grid() {
  return (
    <div
      style={{
        display: "block",
        borderTop: "1px solid #dadce0"
      }}
    >
      {Array.from({ length: 24 }, (_, i) => (
        <Line key={i} />
      ))}
    </div>
  );
});

export default Grid;

import React, { useState } from "react";
import Measure from "react-measure";

// didn't have any inspiration for naming...
export default function AutoSizer({ children }) {
  const [rect, setRect] = useState({
    top: 0,
    left: 0
  });
  return (
    <Measure
      bounds
      onResize={rect => {
        setRect(rect.bounds);
      }}
    >
      {({ measureRef }) => children({ measureRef, rect })}
    </Measure>
  );
}

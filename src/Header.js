import React, { useLayoutEffect, useRef } from "react";
import { useAppState } from "./context";
import { getTracks } from "./selectors";

function Day({ day }) {
  const { state } = useAppState();
  const tracks = getTracks(day.id)(state);

  return (
    <div
      key={day.id}
      style={{
        flex: `1 0 auto`,
        display: "flex",
        flexDirection: "column",
        width: tracks.length * 100,
        minWidth: tracks.length * 100
      }}
    >
      <div
        style={{
          textAlign: "center",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }}
      >
        {day.name}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row"
        }}
      >
        {tracks.map(track => (
          <div
            key={`track-${track.id}`}
            style={{
              flex: "1 0 auto",
              width: 100,
              minWidth: 100,
              padding: 8,
              textAlign: "center"
            }}
          >
            {track.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Header({ days, tracks, scrollLeft }) {
  const node = useRef();

  useLayoutEffect(() => {
    node.current.scrollLeft = scrollLeft;
  }, [node, scrollLeft]);

  return (
    <div
      style={{
        flex: "0 0 auto",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#f3f3f3"
      }}
    >
      <div
        style={{
          flex: "0 0 48px",
          minWidth: 48
        }}
      />
      <div
        ref={node}
        style={{
          flex: "1 1 auto",
          display: "flex",
          flexDirection: "row",
          width: "auto",
          overflowX: "hidden"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flex: "1 0"
          }}
        >
          {days.map((day, i) => (
            <Day key={day.id} day={day} />
          ))}
        </div>
      </div>
    </div>
  );
}

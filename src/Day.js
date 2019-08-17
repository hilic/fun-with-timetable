import React from "react";
import { useAppState } from "./context";
import { getTracks } from "./selectors";
import Track from "./Track";

export default function Day({
  day,
  offset,
  moveTimeSlot,
  moveTimeSlotInSameTrack
}) {
  const { state } = useAppState();
  const tracks = getTracks(day.id)(state);

  return (
    <div
      style={{
        flex: `1 0 auto`,
        display: "flex",
        flexDirection: "row",
        width: tracks.length * 100,
        minWidth: tracks.length * 100,
        position: "relative"
      }}
    >
      {tracks.map((track, i) => (
        <Track
          key={`track-${track.id}`}
          track={track}
          idx={i}
          offset={offset}
          moveTimeSlot={moveTimeSlot}
          moveTimeSlotInSameTrack={moveTimeSlotInSameTrack}
        />
      ))}
    </div>
  );
}

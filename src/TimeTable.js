import React, { useReducer } from "react";
import { setHours, setMinutes } from "date-fns";
import { days, sessions, tracks, timeSlots } from "./data";
import State from "./context";
import reducer, { moveTimeSlotInSameTrack, moveTimeSlot } from "./state";
import Content from "./Content";

function updateTime(date, time) {
  return setHours(setMinutes(date, time.minutes), time.hours);
}

export default function TimeTable() {
  const [state, dispatch] = useReducer(reducer, {
    days: days,
    sessions: sessions,
    tracks: tracks,
    timeSlots: timeSlots
  });

  // mimics action creator/sagas...
  const handleMoveTimeSlotInSameTrack = (
    timeSlotId,
    newStartTime,
    newEndTime
  ) => {
    const timeSlot = state.timeSlots.byId[timeSlotId];
    const updatedTimeSlot = {
      ...timeSlot,
      startTime: updateTime(timeSlot.startTime, newStartTime),
      endTime: updateTime(timeSlot.endTime, newEndTime)
    };
    dispatch(moveTimeSlotInSameTrack(timeSlotId, updatedTimeSlot));
  };

  const handleMoveTimeSlot = (
    timeSlotId,
    newStartTime,
    newEndTime,
    fromTrackId,
    toTrackId
  ) => {
    dispatch(
      moveTimeSlot(timeSlotId, newStartTime, newEndTime, fromTrackId, toTrackId)
    );
  };

  return (
    <State.Provider
      value={{
        state,
        dispatch
      }}
    >
      <div
        style={{
          flex: "1 1 auto",
          overflow: "hidden",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            overflow: "hidden"
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              bottom: "0",
              left: "0",
              zIndex: "auto",
              opacity: 1,
              transform: "none",
              willChange: "auto"
            }}
          >
            <Content
              moveTimeSlotInSameTrack={handleMoveTimeSlotInSameTrack}
              moveTimeSlot={handleMoveTimeSlot}
            />
          </div>
        </div>
      </div>
    </State.Provider>
  );
}

import { setHours, setMinutes } from "date-fns";

// days
export function allDayIdsReducer(allIds, action) {
  return allIds;
}

export function daysByIdReducer(byId, action) {
  return byId;
}

export function daysReducer({ allIds, byId }, action) {
  return {
    allIds: allDayIdsReducer(allIds, action),
    byId: daysByIdReducer(byId, action)
  };
}

// tracks
function _switchTimeSlot(state, action) {
  const { id, fromTrackId, toTrackId } = action.payload;
  const fromTrack = state[fromTrackId];
  const toTrack = state[toTrackId];
  return {
    ...state,
    [fromTrackId]: {
      ...fromTrack,
      timeSlots: fromTrack.timeSlots.filter(tsId => tsId !== id)
    },
    [toTrackId]: { ...toTrack, timeSlots: toTrack.timeSlots.concat(id) }
  };
}

export function allTrackIdsReducer(allIds, action) {
  return allIds;
}

export function tracksByIdReducer(byId, action) {
  switch (action.type) {
    case MOVE_TIME_SLOT:
      return _switchTimeSlot(byId, action);
    default:
      return byId;
  }
}

export function tracksReducer({ allIds, byId }, action) {
  return {
    allIds: allTrackIdsReducer(allIds, action),
    byId: tracksByIdReducer(byId, action)
  };
}

// timeSlots
function _moveTimeSlot(state, action) {
  const { id, startTime, endTime, toTrackId } = action.payload;
  const [sHours, sMinutes] = startTime;
  const [eHours, eMinutes] = endTime;

  const timeSlot = state[id];
  return {
    ...state,
    [id]: {
      ...timeSlot,
      startTime: setHours(setMinutes(timeSlot.startTime, sMinutes), sHours),
      endTime: setHours(setMinutes(timeSlot.endTime, eMinutes), eHours),
      trackId: toTrackId
    }
  };
}
function _moveTimeSlotInSameTrack(state, action) {
  const { id, timeSlot: updatedTimeSlot } = action.payload;

  const timeSlot = state[id];
  return {
    ...state,
    [id]: {
      ...timeSlot,
      ...updatedTimeSlot
    }
  };
}

export const MOVE_TIME_SLOT_IN_SAME_TRACK = "MOVE_TIME_SLOT_IN_SAME_TRACK";
export const moveTimeSlotInSameTrack = (id, timeSlot) => ({
  type: MOVE_TIME_SLOT_IN_SAME_TRACK,
  payload: { id, timeSlot }
});

export const MOVE_TIME_SLOT = "MOVE_TIME_SLOT";
export const moveTimeSlot = (
  id,
  startTime,
  endTime,
  fromTrackId,
  toTrackId
) => ({
  type: MOVE_TIME_SLOT,
  payload: { id, startTime, endTime, fromTrackId, toTrackId }
});

export function allTimeSlotIdsReducer(allIds, action) {
  return allIds;
}

export function timeSlotsByIdReducer(byId, action) {
  switch (action.type) {
    case MOVE_TIME_SLOT_IN_SAME_TRACK:
      return _moveTimeSlotInSameTrack(byId, action);
    case MOVE_TIME_SLOT:
      return _moveTimeSlot(byId, action);
    default:
      return byId;
  }
}

export function timeSlotsReducer({ allIds, byId }, action) {
  return {
    allIds: allTimeSlotIdsReducer(allIds, action),
    byId: timeSlotsByIdReducer(byId, action)
  };
}

// sessions
export function allSessionIdsReducer(allIds, action) {
  return allIds;
}

export function sessionsByIdReducer(byId, action) {
  return byId;
}

export function sessionsReducer({ allIds, byId }, action) {
  return {
    allIds: allSessionIdsReducer(allIds, action),
    byId: sessionsByIdReducer(byId, action)
  };
}

export default function reducer({ days, tracks, timeSlots, sessions }, action) {
  return {
    days: daysReducer(days, action),
    tracks: tracksReducer(tracks, action),
    timeSlots: timeSlotsReducer(timeSlots, action),
    sessions: sessionsReducer(sessions, action)
  };
}

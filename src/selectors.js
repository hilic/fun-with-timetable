export const getDays = state => {
  return state.days.allIds.map(id => state.days.byId[id]);
};

export const getTracks = dayId => state => {
  const day = state.days.byId[dayId];
  return state.tracks.allIds
    .filter(id => day.tracks.includes(id))
    .map(id => state.tracks.byId[id]);
};

export const getTimeSlots = trackId => state => {
  const track = state.tracks.byId[trackId];
  return state.timeSlots.allIds
    .filter(id => track.timeSlots.includes(id))
    .map(id => state.timeSlots.byId[id]);
};

export const getSession = id => state => {
  return state.sessions.byId[id];
};

import { getHours, getMinutes } from "date-fns";

// TODO apply this const everywhere!
export const HOUR_PX = 40;

export function getOffset(time) {
  return (getHours(time) + getMinutes(time) / 60) * HOUR_PX;
}

export function getPosition(startTime, endTime) {
  const startOffset = getOffset(startTime);
  const endOffset = getOffset(endTime);
  return [startOffset, endOffset - startOffset];
}

// it's shit, but fuck it!
export function getTime(offset) {
  const hours = Math.floor(offset / HOUR_PX);
  const minutes = ((offset / HOUR_PX) % 1).toFixed(2) * 60;
  return { hours, minutes };
}

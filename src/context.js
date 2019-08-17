import { createContext, useContext } from "react";

const State = createContext();

export default State;

export function useAppState() {
  return useContext(State);
}

import React from "react";
import { DndProvider, DndContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { useAppState } from "./context";
import { getDays } from "./selectors";
import AutoSizer from "./AutoSizer";
import Day from "./Day";
import DnDScrollable from "./DnDScrollable";
import Grid from "./Grid";
import Header from "./Header";
import ScrollSync from "./ScrollSync";
import TimeGutter from "./TimeGutter";

export default function Content({ moveTimeSlot, moveTimeSlotInSameTrack }) {
  const { state } = useAppState();
  const days = getDays(state);

  return (
    <ScrollSync scrollTop={280}>
      {({ onScroll, scrollTop, scrollLeft }) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              overflow: "hidden"
            }}
          >
            <Header days={days} tracks={state.tracks} scrollLeft={scrollLeft} />
            <div
              style={{
                flex: "1 1 auto",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden"
              }}
            >
              <AutoSizer>
                {({ measureRef, rect }) => (
                  <div
                    ref={measureRef}
                    style={{
                      flex: "1 1 auto",
                      display: "flex",
                      overflow: "hidden"
                    }}
                  >
                    <TimeGutter scrollTop={scrollTop} />
                    <DndProvider backend={HTML5Backend}>
                      <DndContext.Consumer>
                        {({ dragDropManager }) => (
                          <DnDScrollable
                            dragDropManager={dragDropManager}
                            onScroll={onScroll}
                            initialScrollTop={scrollTop} // this probably shouldn't be tied to state...
                            initialScrollLeft={scrollLeft}
                          >
                            <Grid />
                            {days.map((day, i) => {
                              return (
                                <Day
                                  key={day.id}
                                  day={day}
                                  idx={i}
                                  offset={-rect.top + scrollTop}
                                  moveTimeSlot={moveTimeSlot}
                                  moveTimeSlotInSameTrack={
                                    moveTimeSlotInSameTrack
                                  }
                                />
                              );
                            })}
                          </DnDScrollable>
                        )}
                      </DndContext.Consumer>
                    </DndProvider>
                  </div>
                )}
              </AutoSizer>
            </div>
          </div>
        );
      }}
    </ScrollSync>
  );
}

import React from "react";
import { DragSource } from "react-dnd";
import { DnDTypes } from "./constants";
import { getPosition } from "./utils";
import { useAppState } from "./context";
import { getSession } from "./selectors";

const source = {
  canDrag() {
    return true;
  },
  isDragging(props, monitor) {
    return monitor.getItem().id === props.id;
  },
  // TODO on beginDrag save the scrollTop?
  beginDrag(props, monitor, component) {
    // probably could get this from monitor?
    // getInitialSourceClientOffset???
    const height = component.getBoundingClientRect().height;
    return {
      id: props.timeSlot.id,
      fromTrackId: props.timeSlot.trackId,
      height
    };
  }
};

function sourceCollect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging()
  };
}

class SourceComponent extends React.PureComponent {
  node = React.createRef();

  getBoundingClientRect() {
    return this.node.getBoundingClientRect();
  }

  render() {
    const { timeSlot, session, connectDragSource } = this.props;
    const { startTime, endTime } = timeSlot;
    const [top, height] = getPosition(startTime, endTime);

    return connectDragSource(
      <div
        ref={node => {
          this.node = node;
        }}
        style={{
          backgroundColor: "#fff",
          position: "absolute",
          top,
          left: 0,
          height,
          right: 0,
          zIndex: 4,
          paddingLeft: 4
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "#28a745",
            top: 0,
            bottom: 0,
            left: 0,
            width: 4
          }}
        />
        <div
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
          }}
        >
          {session.title}
        </div>
      </div>
    );
  }
}

const TimeSlotSource = DragSource(DnDTypes.SESSION, source, sourceCollect)(
  SourceComponent
);

export default function TimeSlot({ timeSlot }) {
  const { state } = useAppState();
  const session = getSession(timeSlot.session)(state);

  return <TimeSlotSource timeSlot={timeSlot} session={session} />;
}

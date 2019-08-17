import React, { useState } from "react";
import { DropTarget } from "react-dnd";
import { DnDTypes } from "./constants";
import { useAppState } from "./context";
import { getTimeSlots } from "./selectors";
import { getPosition, getTime } from "./utils";
import TimeSlot from "./TimeSlot";

// let'timeSlot say 25px is 15mins...
function snapToGrid(x, y) {
  const snappedX = Math.round(x / 10) * 10;
  const snappedY = Math.round(y / 10) * 10;
  return [snappedX, snappedY];
}

// DnD
const target = {
  canDrop(props, monitor) {
    // if the track is empty, A-OK!
    if (!props.timeSlots.length) {
      return true;
    }

    const item = monitor.getItem();
    const top = monitor.getSourceClientOffset().y + props.offset;
    const bottom = top + item.height;

    return !props.timeSlots.some(timeSlot => {
      if (timeSlot.id === item.id) {
        return false;
      }
      const [sTop, sHeight] = getPosition(timeSlot.startTime, timeSlot.endTime);
      const sBottom = sTop + sHeight;
      return top < sBottom && sTop < bottom;
    });
  },
  drop(props, monitor) {
    // think this shit checks if some other target already
    // handled the drop...
    if (monitor.didDrop()) {
      return;
    }
    // Obtain the dragged item...
    const item = monitor.getItem();
    const top = monitor.getSourceClientOffset().y + props.offset;
    const bottom = top + item.height;
    if (props.track.id === item.fromTrackId) {
      // this sucks because we're sending shit data...
      props.moveTimeSlotInSameTrack(item.id, getTime(top), getTime(bottom));
    } else {
      // TODO move in another track!
      props.moveTimeSlot(
        item.id,
        getTime(top),
        getTime(bottom),
        item.fromTrackId,
        props.track.id
      );
    }
  },
  hover({ setPlaceHolder, offset }, monitor, component) {
    const item = monitor.getItem();
    // fucking fuck! "component" is not available in canDrop... fucking fuck fuck!
    // we have to calculate the top from the startTime - top of the whole rect + scrollTop...
    // + whatever diff that'timeSlot there...
    const top =
      // monitor.getSourceClientOffset().y - component.getBoundingClientRect().top;
      monitor.getSourceClientOffset().y + offset;
    setPlaceHolder({
      top: top,
      left: 0,
      height: item.height
    });
  }
};

function targetCollect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType()
  };
}

const colors = ["#293462", "#216583", "#f76262", "#fff1c1"];

class TargetComponent extends React.Component {
  node = React.createRef();

  getBoundingClientRect() {
    return this.node.getBoundingClientRect();
  }

  render() {
    const {
      timeSlots,
      idx,
      connectDropTarget,
      canDrop,
      isOver,
      placeholder
    } = this.props;

    return connectDropTarget(
      <div
        ref={node => {
          this.node = node;
        }}
        style={{
          borderRight: "1px solid #dadce0",
          flex: "1 0 auto",
          width: 100,
          minWidth: 100,
          padding: 8,
          backgroundColor: colors[idx % colors.length],
          position: "relative"
        }}
      >
        {timeSlots.map(timeSlot => (
          <TimeSlot key={`timeSlot-${timeSlot.id}`} timeSlot={timeSlot} />
        ))}
        {placeholder && isOver && (
          <div
            style={{
              position: "absolute",
              ...placeholder,
              right: 0,
              left: 0,
              backgroundColor: canDrop ? "#28a745" : "#dc3545"
            }}
          />
        )}
      </div>
    );
  }
}

const TargetTrack = DropTarget(DnDTypes.SESSION, target, targetCollect)(
  TargetComponent
);

// we use a wrapper to show the placeholder
// so we can access the setter as a prop in the
// "target" above!
export default function Track({ track, ...props }) {
  const { state } = useAppState();
  const timeSlots = getTimeSlots(track.id)(state);
  const [placeholder, setPlaceholder] = useState();

  return (
    <TargetTrack
      track={track}
      timeSlots={timeSlots}
      {...props}
      placeholder={placeholder}
      setPlaceHolder={setPlaceholder}
    />
  );
}

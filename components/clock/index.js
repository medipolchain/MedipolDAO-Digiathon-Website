import React, { useEffect } from "react";
import Countdown from "react-countdown";
import cn from "classnames";
import styles from "./styles.module.css";
// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
export const Renderer = ({ renderer, small, big }) => {
  const { hours, minutes, seconds, completed } = renderer;

  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className="inline-flex items-center justify-center gap-2  text-baseBlue text-sm">
        <span
          className={cn(
            styles.box,
            small && styles.boxSmall,
            big && styles.boxBig
          )}
        >
          {hours}
        </span>
        :
        <span
          className={cn(
            styles.box,
            small && styles.boxSmall,
            big && styles.boxBig
          )}
        >
          {minutes}
        </span>
        :
        <span
          className={cn(
            styles.box,
            small && styles.boxSmall,
            big && styles.boxBig
          )}
        >
          {seconds}
        </span>
      </div>
    );
  }
};
export default function Clock({ date }) {
  return (
    <div>
      <Countdown
        date={date}
        renderer={(props) => <Renderer renderer={props} />}
      />
    </div>
  );
}

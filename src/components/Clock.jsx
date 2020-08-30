import React from "react";

export default function Clock() {
  const [hours, setHours] = React.useState(new Date().getHours());
  const [minutes, setMinutes] = React.useState(new Date().getMinutes());

  setInterval(() => {
    setHours(new Date().getHours());
    setMinutes(new Date().getMinutes());
  }, 1000);

  return (
    <h1 className="clock">
      {hours} : {minutes}
    </h1>
  );
}

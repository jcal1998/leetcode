function countTime(time: string): number {
  const [hour, minutes] = time.split(":");

  let hourX = 1;
  if (hour[0] === "?" && hour[1] === "?") {
    hourX = 24;
  } else if (hour[0] === "?") {
    hourX = Number(hour[1]) <= 3 ? 3 : 2;
  } else if (hour[1] === "?") {
    hourX = hour[0] === "2" ? 4 : 10;
  }

  let minX = 1;
  if (minutes[0] === "?" && minutes[1] === "?") {
    minX = 60;
  } else if (minutes[0] === "?") {
    minX = 6;
  } else if (minutes[1] === "?") {
    minX = 10;
  }

  return hourX * minX;
}

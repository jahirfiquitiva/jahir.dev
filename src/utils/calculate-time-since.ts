export const calculateTimeSince = (
  timestamp?: number,
  now: Date = new Date(),
): string | null => {
  if (!timestamp) return null;

  const pastDate = Math.abs(new Date(timestamp).getTime() / 1000).toFixed(0);
  const currentDate = Math.abs(now.getTime() / 1000).toFixed(0);

  // eslint-disable-next-line
  // @ts-ignore
  const diff = currentDate - pastDate;

  const hours = Math.floor(diff / 3600) % 24;
  let hoursString = hours.toString();
  let minutes = (Math.floor(diff / 60) % 60).toString();
  let seconds = (diff % 60).toString();

  if (hours < 10) {
    hoursString = `0${hours}`;
  }

  if (minutes.length < 2) {
    minutes = `0${minutes}`;
  }

  if (seconds.length < 2) {
    seconds = `0${seconds}`;
  }

  if (hours > 0) {
    return `${hoursString}:${minutes}:${seconds}`;
  }
  return `${minutes}:${seconds}`;
};

export const calculateTimeSince = (timestamp?: number): string | null => {
  if (!timestamp) return null;

  const date = new Date(timestamp);

  const pastDate = timestamp - 3600 * 5;
  console.log('==========================================');
  console.log('Before:', date.getTime());
  console.log('Before:', date);
  console.log('Now:', new Date().toISOString());
  console.log('==========================================');
  const currentDate = new Date().getTime();
  const diff = currentDate - pastDate;

  let hours = (Math.floor(diff / 3600) % 24).toString();
  let minutes = (Math.floor(diff / 60) % 60).toString();
  let seconds = (diff % 60).toString();

  if (hours.length < 2) {
    hours = `0${hours}`;
  }

  if (minutes.length < 2) {
    minutes = `0${minutes}`;
  }

  if (seconds.length < 2) {
    seconds = `0${seconds}`;
  }

  return `${hours}:${minutes}:${seconds}`;
};

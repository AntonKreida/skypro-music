export const formattedTime = (timeSecondTrack: number) => {
  const hours = Math.floor(timeSecondTrack / 60 / 60);
  const minutes = Math.floor(timeSecondTrack / 60) - (hours * 60);
  const seconds = timeSecondTrack % 60;

  return `${minutes}:${seconds >= 10 ? `${seconds}` : `0${seconds}`}`;
};

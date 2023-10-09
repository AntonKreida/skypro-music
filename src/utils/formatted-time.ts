export const formattedTime = (timeSecondTrack: number) => {
  const minutes = Math.floor(timeSecondTrack / 60);
  const seconds = Math.floor(timeSecondTrack % 60);

  return `${minutes}:${seconds >= 10 ? `${seconds}` : `0${seconds}`}`;
};

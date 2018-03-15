const color = (value) => {
  const h = (1.0 - value) * 240;
  return `hsl(${h}, 100%, 50%)`;
};

export {
  color
};

const localeDate = (date) => date.toLocaleString(undefined, { timeZoneName: 'short', month: 'numeric', day: 'numeric', hour: 'numeric' });

export {
  localeDate
};

const localeDate = (date) => date.toLocaleString(undefined, { timeZoneName: 'short', month: 'numeric', day: 'numeric', hour: 'numeric' });

const localeDateTime = (date) => date.toLocaleString(undefined, { timeZoneName: 'short', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' });

export {
  localeDate,
  localeDateTime
};

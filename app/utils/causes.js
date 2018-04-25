const imageUrlTemplate = 'https://raw.githubusercontent.com/seedom-io/seedom-assets/master/causes/{cause}.png';
const jsonUrlTemplate = 'https://raw.githubusercontent.com/seedom-io/seedom-assets/master/causes/{cause}.json';

const getImageUrl = (cause) => imageUrlTemplate.replace('{cause}', cause);
const getJsonUrl = (cause) => jsonUrlTemplate.replace('{cause}', cause);

export {
  getImageUrl,
  getJsonUrl
};

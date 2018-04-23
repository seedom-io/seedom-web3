const getImageUrl = (params) => `${BADGER_URL}/badges/${params.contract}/${params.participant}.png`;

export {
  getImageUrl
};

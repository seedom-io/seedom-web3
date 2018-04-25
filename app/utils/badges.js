const getImageUrl = ({
  network,
  contract,
  participant
}) => `${BADGER_URL}/badges/${network}/${contract}/${participant}.png`;

export {
  getImageUrl
};

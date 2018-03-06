const hexMessage = (message) => {
  const buffer = Buffer.alloc(32);
  buffer.write(message);
  return `0x${buffer.toString('hex')}`;
};

const dehexMessage = (messageHex) => {
  const messageHexMeat = messageHex.substr(2);
  const messageBuffer = Buffer.from(messageHexMeat, 'hex');
  return messageBuffer.toString().replace(/\0/g, '');
};

export { hexMessage, dehexMessage };

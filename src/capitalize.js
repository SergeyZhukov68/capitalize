
const capitalize = (text) => {
  if (text === '') {
    return '';
  }
  const firstSymbol = text[0].toUpperCase();
  const restSymbol = text.slice(1);
  return `${firstSymbol}${restSymbol}`;
};

export default capitalize;

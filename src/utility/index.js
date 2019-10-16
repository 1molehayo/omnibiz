export const formatPrice = str => {
  if (str.charAt(0) === '$') {
    return str;
  }
  return `\u0024${str}`;
};

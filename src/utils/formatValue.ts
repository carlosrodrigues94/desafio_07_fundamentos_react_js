const formatValue = (value: number): string => {
  return Intl.NumberFormat([], {
    style: 'currency',
    currency: 'BRL',
  }).format(value); // TODO
};

export default formatValue;

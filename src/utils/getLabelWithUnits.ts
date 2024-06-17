export const getLabelWithUnits = (quantity: number, units: string[]) => {
  const [one, few, many] = units;

  if (quantity % 10 === 1 && quantity !== 11) {
    return quantity + ' ' + one;
  } else if (
    [2, 3, 4].includes(quantity % 10) &&
    ![12, 13, 14].includes(quantity)
  ) {
    return quantity + ' ' + few;
  }
  return quantity + ' ' + many;
};

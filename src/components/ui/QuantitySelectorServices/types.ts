export type QuantitySelectorServicesProps = {
  onClickDecrement: () => void;
  onClickIncrement: () => void;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  className?: string;
};

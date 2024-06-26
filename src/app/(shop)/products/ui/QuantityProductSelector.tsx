'use client';

interface Props {
  quantity: number;
  stock: number;
  onQuantityChange: (value: number) => void;
}
export const QuantityProductSelector = ({
  quantity,
  onQuantityChange,
  stock,
}: Props) => {
  const onValueChange = (value: number) => {
    if (quantity + value < 1 || quantity + value > stock) return;

    onQuantityChange(quantity + value);
  };

  return (
    <div className="flex items-center col-span-3 md:col-span-2 w-full justify-between py-2 text-sm md:text-base  px-8 md:px-4">
      <p>QUANTITY</p>
      <div className="flex items-center justify-between gap-5">
        <button onClick={() => onValueChange(-1)} className="p-1">
          -
        </button>
        <div className="w-4 flex items-center justify-center">
          <p>{quantity}</p>
        </div>
        <button
          onClick={() => onValueChange(+1)}
          className="p-1 disabled:text-gray-500"
          disabled={quantity >= stock}
        >
          +
        </button>
      </div>
    </div>
  );
};

import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/slices/cart-slice";

export default function ProductTile({ data }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  function handleAddToCart() {
    dispatch(addToCart(data));
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(data.id));
  }

  return (
    <div className="group flex flex-col items-center border-2 p-4 h-[360px] mt-5 mx-2 rounded-xl">
      <div className="h-[180px]">
        <img
          className="object-cover h-full w-full"
          src={data.image}
          alt={data.title}
        />
      </div>
      <h1 className="font-bold w-40 truncate text-gray-700 text-lg">
        {data.title}
      </h1>
      <div className="flex items-center justify-center w-full mt-5">
        <button
          onClick={
            cart.some((item) => item.id === data.id)
              ? handleRemoveFromCart
              : handleAddToCart
          }
          className="bg-red-500 text-white border-2 rounded-lg font-bold text-sm p-4"
        >
          {cart.some((item) => item.id === data.id)
            ? "Remove from Cart"
            : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

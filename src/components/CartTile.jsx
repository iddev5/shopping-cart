
import {useDispatch } from 'react-redux';
import {  removeFromCart } from '../store/slices/cart-slice';

export default function CartTile({item}) {
  const dispatch = useDispatch();

  function handleRemoveFromCart() {
    dispatch(removeFromCart(item.id))
  }

  return <div className="w-full">
    <div className="flex flex-col md:flex-row items-center p-5 justify-between bg-red-500 mt-2 mb-2 rounded-xl">
      <div className="flex p-3 items-center basis-4/5">
        <img src={item.image} className="h-28 rounded-lg" alt={item.title} />
        <div className="ml-10 self-start space-y-5">
          <h1 className="text-xl text-white font-bold">{item.title}</h1>
          <p className="text-white font-extrabold">{item.pric}</p>
        </div>
      </div>
      <div>

      <button onClick={handleRemoveFromCart  } className="bg-red-500 text-white border-2 rounded-lg font-bold text-sm p-4">
        Remove from Cart
      </button>
      </div>
    </div>
  </div>
}

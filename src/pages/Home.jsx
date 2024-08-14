import {useState, useEffect} from 'react';
import {Circles} from 'react-loader-spinner';
import ProductTile from '../components/ProductTile.jsx';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    setLoading(true);
    const res = await fetch("https://fakestoreapi.com/products");
    const json = await res.json();

    if (json) {
      setProducts(json);
      setLoading(false);
    }
  }

  useEffect(() => { fetchProducts(); }, []);

  return <div>
  {
    loading ? <div className="w-full min-h-screen flex justify-center items-center">
      <Circles height="80" width="80" color="#ef4444" />
      </div> :
      <div className="min-h-[80vh] grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3">
      {
        products && products.map(prod => <ProductTile data={prod} />)
      }
      </div>
  }
  </div>
}

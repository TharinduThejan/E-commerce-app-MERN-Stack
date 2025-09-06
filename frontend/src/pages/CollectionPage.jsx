import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSideBar from "../components/Products/FilterSideBar";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          _id: 100,
          name: "Chino Pants",
          price: 55,
          img: "https://picsum.photos/200?random=500",
        },
        {
          _id: 101,
          name: "Cargo Pants",
          price: 50,
          img: "https://picsum.photos/200?random=501",
        },
        {
          _id: 102,
          name: "Cargo Joggers",
          price: 45,
          img: "https://picsum.photos/200?random=502",
        },
        {
          _id: 103,
          name: "Cargo Joggers",
          price: 45,
          img: "https://picsum.photos/200?random=503",
        },
        {
          _id: 104,
          name: "Cargo Joggers",
          price: 45,
          img: "https://picsum.photos/200?random=504",
        },
        {
          _id: 105,
          name: "Cargo Joggers",
          price: 45,
          img: "https://picsum.photos/200?random=505",
        },
        {
          _id: 106,
          name: "Cargo Joggers",
          price: 45,
          img: "https://picsum.photos/200?random=506",
        },
        {
          id: 107,
          name: "Cargo Joggers",
          price: 45,
          img: "https://picsum.photos/200?random=507",
        },
        {
          _id: 108,
          name: "Cargo Joggers",
          price: 45,
          img: "https://picsum.photos/200?random=508",
        },
      ];
      setProducts(fetchedProducts);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col gap-6 p-4 md:flex-row md:p-6">
      {/* mobile filter button */}
      <button className="flex justify-center p-2 border lg:hidden item center">
        <FaFilter className="m-2" />
      </button>

      {/* Sidebar */}
      <div>
        <FilterSideBar />
      </div>

      {/* Product Collection */}
      <main className="w-full md:w-3/4">
        <h2 className="mb-6 text-xl font-semibold">ALL COLLECTION</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((featuredProduct) => (
            <div
              key={featuredProduct.id}
              className="p-3 transition shadow rounded-2xl hover:shadow-lg"
            >
              <img
                src={featuredProduct.img}
                alt={featuredProduct.name}
                className="object-cover w-full rounded-xl"
              />
              <h3 className="mt-3 font-medium">{featuredProduct.name}</h3>
              <p className="text-gray-600">${featuredProduct.price}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CollectionPage;

import Hero from "../components/Layout/Hero.jsx";
import GenderCollectionSection from "../components/Products/GenderCollectionSection.jsx";
import NewArrivals from "../components/Products/NewArrivals.jsx";
import ProductDetails from "../components/Products/ProductDetails.jsx";
export default function Home() {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />
      {/*Best Seller Section */}

      <ProductDetails />
    </div>
  );
}

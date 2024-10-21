import Banner from "../components/Banner";
import Category from "../components/Category";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { ProductType } from "../Types/Types";

const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]); // Initialize as an empty array

  useEffect(() => {
    async function productLoad() {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsArray: ProductType[] = []; // Temporary array to store products

      querySnapshot.forEach((doc) => {
        productsArray.push({...doc.data() as ProductType,id:doc.id}); // Collect all products
      });

      setProducts(productsArray); // Set all products at once
    }

    productLoad();
  }, []);

  return (
    <>
      <Category />
      <div className="my-20 mx-10">
        <div className="grid grid-cols-4 gap-8">
          {products.map((ele) => (
            <Link to={`/product-view/${ele.id}`} key={ele.id}> 
              <Cards
                name={ele.title}
                description={ele.description}
                price={ele.price}
                image={ele.image}
              />
            </Link>
          ))}
        </div>
      </div>
      <Banner />
    </>
  );
};

export default Home;

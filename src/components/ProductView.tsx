import olxLogo from "../assets/olx.svg";
import map from "../assets/map.png";
import noImage from "../assets/noImage.jpeg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { ProductType } from "../Types/Types";
import toast from "react-hot-toast";

const ProductView = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  //fetching date

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!productId) {
          toast.error("product id not found");
          return;
        }

        const productDocRef = doc(db, "products", productId);
        const productSnapshot = await getDoc(productDocRef);

        if (productSnapshot.exists()) {
          const productData = productSnapshot.data() as ProductType;
          setProduct(productData);

        } else {
          toast.error("product not found");
        }
      } catch (error) {
        console.error("Error fetching product: ", error);
        toast.error("Failed to fetch product.");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  //loading
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2>Loading...</h2>
      </div>
    );
  }
  //mp product found that time this
  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2>Product not found!</h2>
      </div>
    );
  }

  return (
    <div className="py-10 px- bg-olx-gray">
      <div className="container mx-auto flex justify-around gap-4">
        {/* left side */}
        <div className="flex flex-col w-[70vw] ">
          <div className="border bg-black rounded-md h-[30rem] flex justify-center relative">
            <i className="fa-solid fa-chevron-left text-white text-2xl absolute left-4 top-1/2 cursor-pointer"></i>
            <img
              src={product.image || noImage}
              alt=""
              className="object-contain w-full"
            />
            <img
              src={olxLogo}
              className="absolute right-2 bottom-2 z-10 w-12 "
              alt="OLX Logo"
            />
            <i className="fa-solid fa-chevron-right text-white text-2xl absolute right-4 top-1/2 cursor-pointer"></i>
          </div>
          <div className="bg-white border rounded border-gray-500 mt-4 p-2 flex flex-col gap-4">
            <h2 className="text-lg font-bold">Details</h2>
            <p>{product.title}</p>
            <hr />
            <h2 className="text-lg font-bold">Description</h2>
            <p>{product.description}</p>
          </div>
        </div>
        {/* right side */}
        <div>
          <div className="border border-gray-500 rounded-md w-[30vw] p-4 flex flex-col gap-4 bg-white">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">&#8377; {product.price}</h2>
              <div className="flex gap-4">
                <i className="fa-solid fa-share-nodes text-2xl cursor-pointer"></i>
                <i className="fa-regular fa-heart text-2xl cursor-pointer"></i>
              </div>
            </div>
            <h2>{product.title}</h2>
            <div className="flex justify-between text-sm">
              <p>{product.category}</p>
              <p>12 June 2024</p>
            </div>
          </div>
          <div className="border border-gray-500 rounded-md w-[30vw] p-4 flex flex-col gap-4 bg-white mt-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">{product.userId}</h2>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <button className="border-2 w-full rounded border-black p-2 hover:border-4">
              Chat with seller
            </button>
            <div className="flex justify-center text-sm">
              <p className="text-blue-400 cursor-pointer">show number</p>
            </div>
          </div>
          <div className="border border-gray-500 rounded-md w-[30vw] p-4 bg-white mt-4">
            <h2 className="text-sm">{product.location}</h2>
          </div>
          <div className="border border-gray-500 rounded-md w-[30vw] p-4 flex flex-col gap-4 bg-white mt-4">
            <img src={map} alt="Map" className="" />
          </div>
          <div className="flex justify-between text-sm font-semibold">
            <p>AD ID 1780428239</p>
            <p>REPORT THIS AD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;

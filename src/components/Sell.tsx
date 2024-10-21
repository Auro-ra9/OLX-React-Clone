import { useEffect, useState } from "react";
import noImage from "../assets/noImage.jpeg";
import { ProductType, TypeCategory } from "../Types/Types";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useUserAuthCheck } from "../context/context";
const Sell = () => {
  const [imagePreview, setImagePreview] = useState(noImage);
  const [category, setCategory] = useState<TypeCategory>("Bikes");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [location, SetLocation] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  

  const navigate = useNavigate();
  const {isUserPresent,userId} = useUserAuthCheck();

  useEffect(() => {
    if (!isUserPresent) {
      toast.error("Please Login to your account");
      navigate("/login");
    }
  }, [isUserPresent,navigate]);

  const handleImagePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedImage = e.target.files[0];
      setImage(selectedImage);
      setImagePreview(URL.createObjectURL(selectedImage));
    }
  };

  const handleSubmission = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      if (title.trim().length < 2) {
        toast.error("Title must be at least 2 characters long.");
        return;
      }

      if (!category) {
        toast.error("Please select a category.");
        return;
      }
      if (description.trim() === "") {
        toast.error("Please provide a description for the product.");
        return;
      }

      if (price <= 0) {
        toast.error("Price must be greater than zero.");
        return;
      }

      if (location.trim() === "") {
        toast.error("Please provide a location for the product.");
        return;
      }

      if (!image) {
        toast.error("Please upload an image for the product.");
        return;
      }

      setLoading(true);
      // this is for storing the image in storage of firebase
      const imageRef = ref(storage, `images/${userId}/${Date.now()}`);
      await uploadBytes(imageRef, image);
      const uploadedImagePath = await getDownloadURL(imageRef);

      let newProductDetails: ProductType = {
        title,
        price,
        category,
        description,
        image: uploadedImagePath,
        location,
        userId:userId||"",
        
      };

      // add details to the fireStore
      const docRef = await addDoc(collection(db, "products"),newProductDetails);
      console.log(docRef.id);

      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2>Loading</h2>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="border shadow-md w-11/12 md:w-4/5 rounded-md p-8 bg-white">
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmission}
        >
          {/* Left Side */}
          <div className="flex flex-col gap-4">
            {/* Category Selection */}
            <div className="flex flex-col">
              <label htmlFor="category-select" className="font-semibold">
                Select a Category
              </label>
              <select
                id="category-select"
                className="p-2 border rounded-md"
                value={category}
                onChange={(e) => setCategory(e.target.value as TypeCategory)}
              >
                <option value="" disabled>
                  Choose a category
                </option>
                <option value="Cars">Cars</option>
                <option value="Properties">Properties</option>
                <option value="Mobiles">Mobiles</option>
                <option value="Jobs">Jobs</option>
                <option value="Bikes">Bikes</option>
                <option value="Electronics & Appliances">
                  Electronics & Appliances
                </option>
                <option value="Furniture">Furniture</option>
                <option value="Fashion">Fashion</option>
                <option value="Books, Sports & Hobbies">
                  Books, Sports & Hobbies
                </option>
                <option value="Pets">Pets</option>
                <option value="Services">Services</option>
              </select>
            </div>

            {/* Title Input */}
            <div className="flex flex-col">
              <label htmlFor="title" className="font-semibold">
                Title
              </label>
              <input
                type="text"
                id="title"
                placeholder="Enter product title"
                className="p-2 border rounded-md"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Description Input */}
            <div className="flex flex-col">
              <label htmlFor="description" className="font-semibold">
                Description
              </label>
              <textarea
                id="description"
                placeholder="Describe your product"
                className="p-2 border rounded-md"
                rows={10}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-4">
            {/* Price Input */}
            <div className="flex flex-col">
              <label htmlFor="price" className="font-semibold">
                Price
              </label>
              <input
                type="text"
                id="price"
                placeholder="Enter price in Rupees"
                className="p-2 border rounded-md"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>

            {/* Location Input */}
            <div className="flex flex-col">
              <label htmlFor="location" className="font-semibold">
                Location
              </label>
              <input
                type="text"
                id="location"
                placeholder="Enter your location"
                className="p-2 border rounded-md"
                value={location}
                onChange={(e) => SetLocation(e.target.value)}
              />
            </div>

            {/* Image Upload */}
            <div className="flex flex-col">
              <label htmlFor="images" className="font-semibold">
                Upload Images
              </label>
              <input
                type="file"
                id="images"
                className="p-2 border rounded-md"
                onChange={(e) => handleImagePreview(e)}
              />
            </div>

            {/* Image Preview */}
            <div className="mt-4 w-full h-64 border rounded-md overflow-hidden">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sell;

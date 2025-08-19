import { useEffect } from "react";
import { BsEmojiLaughing } from "react-icons/bs";
import { FaCoffee } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import About from "../components/About";
import Banner from "../components/Banner";
import "../index.css";
import { get_products } from "../store/reducers/productReducer";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      get_products({
        page: 1,
        search: "",
      })
    );
  }, []);
  const { products } = useSelector(state => state.product);
  console.log(products[products.length - 1], products[products.length - 2]);
  //{
  //translations, gallery}
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const [isGalleryOpen, setGalleryOpen] = useState(false);
  // const [galleryIndex, setGalleryIndex] = useState(0);

  // const slides = translations.hero;

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide(prev => (prev + 1) % slides.length);
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, [slides.length]);

  // const openGallery = index => {
  //   setGalleryIndex(index);
  //   setGalleryOpen(true);
  // };

  // const closeGallery = () => {
  //   setGalleryOpen(false);
  // };

  // const prevImage = () => {
  //   setGalleryIndex(
  //     (galleryIndex - 1 + gallery.images.length) % gallery.images.length
  //   );
  // };

  // const nextImage = () => {
  //   setGalleryIndex((galleryIndex + 1) % gallery.images.length);
  // };

  return (
    <div className="w-full -mt-9 mx-auto text-[#1e293b]">
      {/* Slider */}
      <Banner />
      <About
        product1={products[products.length - 1]}
        product2={products[products.length - 2]}
      />
      {/* faqs */}
      <div className="w-full flex justify-center mt-20 items-center">
        <div className="min-[1260px]:w-[80%] bg-gray-200 min-[800px]:flex-row flex-col gap-6 py-10 px-4 rounded-md w-[90%] flex justify-around items-center">
          <p className="text-[20px] font-semibold">why should choose us?</p>
          <div className="flex gap-10 flex-wrap justify-center items-center">
            <div className="flex justify-center items-end flex-col">
              <div className="flex justify-around items-center w-full">
                <span className="text-[26px]">
                  <BsEmojiLaughing />
                </span>
                <p className="font-semibold">100%</p>
              </div>

              <span className="text-gray-600">customer happy</span>
            </div>
            <div className="flex justify-center items-end flex-col">
              <div className="flex justify-around items-center w-full">
                <span className="text-[26px]">
                  <FaCoffee />
                </span>
                <p className="font-semibold">100%</p>
              </div>

              <span className="text-gray-600">customer happy</span>
            </div>
            <div className="flex justify-center items-end flex-col">
              <div className="flex justify-around items-center w-full">
                <span className="text-[26px]">
                  <FaTrophy />
                </span>
                <p className="font-semibold">100%</p>
              </div>

              <span className="text-gray-600">customer happy</span>
            </div>
          </div>
        </div>
      </div>
      {/* co-op companys */}
      <div className="flex justify-center items-center gap-4 w-full">
        <div className="flex justify-center items-center w-[90%] "></div>
      </div>
      {/* carousel */}
      {/* About */}
      {/* <section className="mb-8 text-center">
        <h1 className="text-3xl font-bold">{translations.about}</h1>
        <p className="mt-4">{translations.aboutText}</p>
      </section> */}
      {/* Gallery */}
      {/* <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{translations.gallery}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 h-[300px]">
          {gallery.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Gallery ${i + 1}`}
              className="cursor-pointer h-full rounded shadow border border-[#1e293b]"
              onClick={() => openGallery(i)}
            />
          ))}
        </div>
      </section> */}
      {/* Gallery Lightbox */}
      {/* {isGalleryOpen && (
        <div
          className="fixed inset-0 bg-[#1e293b] bg-opacity-90 flex justify-center items-center z-50"
          onClick={closeGallery}>
          <div className="relative max-w-3xl w-full p-4">
            <img
              src={gallery.images[galleryIndex]}
              alt={`Gallery large ${galleryIndex + 1}`}
              className="rounded border border-white"
            />
            <button
              onClick={e => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-[#1e293b] rounded px-3 py-1 hover:bg-gray-200 transition">
              ‹
            </button>
            <button
              onClick={e => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-[#1e293b] rounded px-3 py-1 hover:bg-gray-200 transition">
              ›
            </button>
            <button
              onClick={e => {
                e.stopPropagation();
                closeGallery();
              }}
              className="absolute top-2 right-2 bg-white text-[#1e293b] rounded px-3 py-1 hover:bg-gray-200 transition">
              {gallery.close}
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
}

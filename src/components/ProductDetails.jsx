import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { get_product } from "../store/reducers/productReducer";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  useEffect(() => {
    dispatch(get_product(slug));
  }, [slug]);
  const sliderRef = useRef(null);
  const { product } = useSelector(state => state.product);
  console.log(product);
  const [i, setI] = useState(0);
  const scroll = dir => {
    if (!sliderRef.current) return;
    const amount = 150;
    sliderRef.current.scrollLeft += dir === "right" ? amount : -amount;
  };
  return (
    <div className="w-full flex justify-center mt-10 items-center">
      <div className="min-[1260px]:w-[80%]  gap-7 w-[95%] flex justify-between items-start">
        <div className="min-[800px]:w-[450px] w-[300px] flex justify-center items-center gap-5 flex-col">
          <div className="min-[800px]:w-[450px] w-[370px] min-[800px]:h-[400px] h-[370px] bg-gray-300 flex justify-center items-center">
            <img
              className="h-full"
              src={product.images?.[i].url}
              alt=""
            />
          </div>
          <div className="w-full relative justify-center flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="bg-[#1e293b] z-40 absolute left-[-30px] shadow-md shadow-[#1e293b] text-white text-[20px] rounded-full w-10 h-10 flex items-center justify-center">
              ‹
            </button>
            <div className="w-full overflow-hidden">
              <div
                dir="rtl"
                ref={sliderRef}
                className="w-full gap-3 scroll-smooth slider-container justify-start flex items-center overflow-x-auto">
                {product.images?.map((i, j) => (
                  <div
                    onClick={() => setI(j)}
                    key={j}
                    className="min-w-[100px] cursor-pointer flex justify-center items-center h-[70px] bg-gray-300">
                    <img
                      className="h-full"
                      src={i.url}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => scroll("right")}
              className="bg-[#1e293b] text-white absolute right-[-30px] text-[20px] shadow-md shadow-[#1e293b] rounded-full w-10 h-10 flex items-center justify-center">
              ›
            </button>
          </div>
        </div>
        <div className="flex w-full min-[800px]:w-[calc(100%-500px)] gap-5 mt-5 justify-end items-center flex-col text-right">
          <h2 className="w-full px-5 text-[20px] font-semibold text-[#1e293b]">
            {product.title}
          </h2>
          <p className="px-5 w-full text-gray-600 text-[15px]">
            {product.description}
          </p>
          <span className="w-full px-5">{product.price}تومن</span>
          <p
            className={`w-full px-5 ${
              product.stock ? "text-green-500" : "text-red-500"
            }`}>
            {product.stock ? "موجود" : "ناموجود"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

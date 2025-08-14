import { useRef } from "react";

const ProductDetails = () => {
  const sliderRef = useRef(null);

  const scroll = dir => {
    if (!sliderRef.current) return;
    const amount = 150;
    sliderRef.current.scrollLeft += dir === "right" ? amount : -amount;
  };
  return (
    <div className="w-full flex justify-center mt-10 items-center">
      <div className="min-[1260px]:w-[80%] flex-wrap gap-7 w-[95%] flex justify-center items-start">
        <div className="min-[800px]:w-[400px] w-[300px] flex justify-center items-center gap-5 flex-col">
          <div className="min-[800px]:w-[400px] w-[300px] min-[800px]:h-[300px] h-[200px] bg-gray-300 flex justify-center items-center">
            image
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
                {[1, 2, 3, 4, 5, 6].map((i, j) => (
                  <div className="min-w-[100px] cursor-pointer flex justify-center items-center h-[70px] bg-gray-300">
                    image
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
        <div className="flex w-full min-[800px]:w-[calc(100%-500px)] gap-5 mt-5 justify-start items-center flex-col">
          <h2 className="w-full px-5 text-[20px] font-semibold text-start text-[#1e293b]">
            Title product1
          </h2>
          <p className="px-5 w-full text-gray-600 text-[15px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
            saepe libero commodi quaerat! Qui tenetur quia, vitae eum ratione
            explicabo! Ullam necessitatibus dolorem id ducimus quaerat expedita
            consequatur debitis ipsa?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

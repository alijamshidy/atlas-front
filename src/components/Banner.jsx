import { FaArrowRightLong } from "react-icons/fa6";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Banner = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="w-full">
      <div className="min-[1260px]:w-[80%] w-[95%] mx-auto">
        <div className="w-full flex flex-wrap">
          <div className="w-full">
            <div className="mt-20 w-full">
              <Carousel
                autoPlay={false}
                infinite={true}
                arrows={false}
                showDots={true}
                responsive={responsive}>
                {[1].map((img, i) => (
                  <div
                    key={i}
                    to="#"
                    className="w-full relative">
                    <img
                      src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9xHOSpUlHoPfUh5fWOfAXqurrOpI6zfG9uw&s`}
                      className="w-full rounded-sm h-[300px] md:h-[450px] xl:h-[600px]"
                      alt="img"
                    />
                    <div className="absolute w-full top-1/6 flex flex-col justify-center items-start left-6 gap-7">
                      <h2 className="  w-[50%]  text-white text-[30px] font-bold">
                        company
                      </h2>
                      <span className=" w-[50%]  text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Itaque, aut!
                      </span>
                      <button className=" px-4 p-2 rounded-sm flex justify-center items-center gap-3 text-white  bg-[#1e293b] hover:bg-[#1e293b]/70 duration-300 cursor-pointer">
                        Learn more
                        <span className="translate-y-[2px]">
                          <FaArrowRightLong />
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

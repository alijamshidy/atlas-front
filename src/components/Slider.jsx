import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const images = [
  "https://picsum.photos/id/1018/1200/400",
  "https://picsum.photos/id/1015/1200/400",
  "https://picsum.photos/id/1016/1200/400",
];

export default function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      loop
      autoplay={{ delay: 3000 }}
      className="rounded-md overflow-hidden mb-6">
      {images.map((src, i) => (
        <SwiperSlide key={i}>
          <img
            src={src}
            alt={`Slide ${i + 1}`}
            className="w-full h-64 md:h-96 object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

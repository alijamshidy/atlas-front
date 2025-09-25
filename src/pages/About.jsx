import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function About() {
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
    <div className="w-full flex justify-center items-center">
      <div className="flex w-[95%] min-[1260px]:w-[80%] justify-center items-center mx-auto">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-full">
            <Carousel
              autoPlay={true}
              infinite={true}
              arrows={true}
              showDots={true}
              responsive={responsive}>
              {[1, 2, 3, 4, 5].map((img, i) => (
                <div
                  key={i}
                  to="#"
                  className="w-full relative">
                  <img
                    src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9xHOSpUlHoPfUh5fWOfAXqurrOpI6zfG9uw&s`}
                    className="w-full rounded-sm h-[300px] md:h-[450px] xl:h-[600px]"
                    alt="img"
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="w-[95%] mx-auto">
            <h1 className="text-[30px] text-blue-500">About us </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam nihil laborum, inventore, ipsum veritatis non
              perspiciatis laudantium impedit aut, vitae cum est. Natus impedit
              blanditiis quo illum similique saepe numquam sint, sed ipsam
              reprehenderit sit officiis voluptatibus totam quis, porro cum
              cumque. Nam quasi assumenda exercitationem id est velit autem
              impedit repellendus quis modi hic, neque consequuntur nisi officia
              ipsa voluptatem qui quae veritatis laboriosam dolorum molestias!
              Quod a nam quae cumque. Doloribus ut, reprehenderit provident rem
              architecto aliquam, vel possimus dolorum enim corrupti facilis est
              voluptatibus quod harum! Dolor, reiciendis! Recusandae quasi
              laudantium minima et eligendi blanditiis in obcaecati.
            </p>
          </div>
          <div className="w-[95%] mx-auto">
            <h1 className="text-[30px] text-blue-500">Company History </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam nihil laborum, inventore, ipsum veritatis non
              perspiciatis laudantium impedit aut, vitae cum est. Natus impedit
              blanditiis quo illum similique saepe numquam sint, sed ipsam
              reprehenderit sit officiis voluptatibus totam quis, porro cum
              cumque. Nam quasi assumenda exercitationem id est velit autem
              impedit repellendus quis modi hic, neque consequuntur nisi officia
              ipsa voluptatem qui quae veritatis laboriosam dolorum molestias!
              Quod a nam quae cumque. Doloribus ut, reprehenderit provident rem
              architecto aliquam, vel possimus dolorum enim corrupti facilis est
              voluptatibus quod harum! Dolor, reiciendis! Recusandae quasi
              laudantium minima et eligendi blanditiis in obcaecati.
            </p>
          </div>
          <div className="w-[95%] mx-auto">
            <h1 className="text-[30px] text-blue-500">
              The company's CEOs from the beginning to the present{" "}
            </h1>
            <ul>
              <li>
                {/* <img
                  src=""
                  alt=""
                /> */}
                <div className="flex">
                  <p>name</p>
                  <span>date</span>
                </div>
              </li>
              <li>
                {/* <img
                  src=""
                  alt=""
                /> */}
                <div className="flex">
                  <p>name</p>
                  <span>date</span>
                </div>
              </li>
              <li>
                {/* <img
                  src=""
                  alt=""
                /> */}
                <div className="flex">
                  <p>name</p>
                  <span>date</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

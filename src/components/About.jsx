import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="w-full mt-10 flex justify-center items-center flex-col">
      <h2 className="text-[30px] font-semibold my-10 text-[#1e293b]">
        Products
      </h2>
      <div className="w-full flex justify-center items-center flex-col">
        <div className="w-full flex justify-center items-center py-10 bg-gray-200">
          <div className="w-[95%] min-[800px]:flex-row flex-col gap-7 min-[1260px]:w-[80%] flex justify-between items-start">
            <div className="min-[800px]:w-4/12 w-full flex justify-center items-center">
              <img
                className="w-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9xHOSpUlHoPfUh5fWOfAXqurrOpI6zfG9uw&s"
              />
            </div>
            <div className="min-[800px]:w-8/12 w-full gap-3 flex jusstify-center items-start flex-col">
              <h2 className="w-full font-bold text-[20px]">Title 1</h2>
              <p className="w-full text-[18px] text-gray-600 font-semibold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                accusantium reiciendis cupiditate vitae animi deserunt illum cum
                blanditiis quasi error, necessitatibus eum voluptate quia
                possimus at officiis neque in doloremque.
              </p>
            </div>
          </div>
        </div>
        <div
          dir="rtl"
          className="w-full flex justify-center items-center py-10 bg-[#1e293b]">
          <div className="w-[95%] gap-7 min-[800px]:flex-row flex-col min-[1260px]:w-[80%] flex justify-between items-start">
            <div className="min-[800px]:w-4/12 w-full flex justify-center items-center">
              <img
                className="w-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9xHOSpUlHoPfUh5fWOfAXqurrOpI6zfG9uw&s"
              />
            </div>
            <div className="min-[800px]:w-8/12 w-full gap-3 flex jusstify-center items-start flex-col">
              <h2 className="w-full font-bold text-[20px] text-white">
                Title 1
              </h2>
              <p className="w-full text-[18px] text-gray-600 font-semibold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                accusantium reiciendis cupiditate vitae animi deserunt illum cum
                blanditiis quasi error, necessitatibus eum voluptate quia
                possimus at officiis neque in doloremque.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center py-10 bg-gray-200">
          <div className="w-[95%] min-[800px]:flex-row flex-col gap-7 min-[1260px]:w-[80%] flex justify-between items-start">
            <div className="min-[800px]:w-4/12 w-full flex justify-center items-center">
              <img
                className="w-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9xHOSpUlHoPfUh5fWOfAXqurrOpI6zfG9uw&s"
              />
            </div>
            <div className="min-[800px]:w-8/12 w-full gap-3 flex jusstify-center items-start flex-col">
              <h2 className="w-full font-bold text-[20px]">Title 1</h2>
              <p className="w-full text-[18px] text-gray-600 font-semibold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                accusantium reiciendis cupiditate vitae animi deserunt illum cum
                blanditiis quasi error, necessitatibus eum voluptate quia
                possimus at officiis neque in doloremque.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link
        to={"/products"}
        className="text-[18px] mt-10 w-full flex justify-center items-center">
        See more ...
      </Link>
    </div>
  );
}

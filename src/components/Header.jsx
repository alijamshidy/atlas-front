import { useState } from "react";
import { GrLanguage } from "react-icons/gr";
import { IoIosMenu } from "react-icons/io";
import { IoChevronDown, IoChevronUp, IoCloseOutline } from "react-icons/io5";
import { href, Link, useLocation } from "react-router-dom";

export default function Header() {
  const currentPage = useLocation().pathname;
  const [activeState, setActiveState] = useState("");
  const [openSubmenu, setOpenSubmenu] = useState(null); // آکاردئون موبایل
  const [activeSlider, setActiveSlider] = useState(false);

  const HandleMouseIn = item => setActiveState(item);
  const HandleMouseOut = () => setActiveState("");
  const menuItems = [
    { label: "home", path: "/" },

    {
      label: "products",
      path: "/products",

      submenu: [
        // "", "زیرمنو B", "زیرمنو C"
        { label: "product A", path: "/product/a" },
        { label: "product B", path: "/product/b" },
        { label: "product C", path: "/product/c" },
      ],
    },
    { label: "about us", path: "/about-us" },
    { label: "contact us", path: "#contact-us" },
  ];

  return (
    <div className="w-full relative z-50 flex flex-col justify-center items-center">
      <img
        className="w-full"
        alt="imgHeader"
        src="http://localhost:5173/single_wave.svg"
      />
      <div className="w-[95%] flex justify-around items-center min-[1260px]:w-[80%] absolute bg-white/90 h-[80px] top-12 rounded-sm shadow-md border border-gray-200">
        <div className="w-[130px] flex justify-center items-center pl-6 ">
          <img
            src="http://www.atlas-aim.com/images/2023/09/15/logo2.png"
            className="h-[55px] w-full"
          />
        </div>
        <ul className="min-[1260px]:w-5/12 hidden min-[820px]:flex min-[820px]:w-6/12 pl-6 justify-center items-center gap-6">
          {/* <li className="relative hover:text-[#1e293b] cursor-pointer flex justify-center items-center">
            <span className='relative w-full after:content-[""] after:w-0 hover:after:w-full after:duration-500 after:bottom-[-5px] after:left-0 after:absolute after:h-[2px] after:bg-[#1e293b]'>
              Home
            </span>
          </li> */}

          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative flex justify-center items-center pb-[10px] mt-[10px]"
              onMouseEnter={() => item.submenu && HandleMouseIn(item.label)}
              onMouseLeave={HandleMouseOut} // فقط وقتی واقعا موس از کل محدوده خارج شد
            >
              {item.label !== "contact us" ? (
                <Link
                  to={item.path}
                  className={`relative w-full py-3 cursor-pointer hover:text-[#1e293b] 
        after:content-[""] after:w-0 hover:after:w-full after:duration-500 
        after:bottom-[2px] after:left-0 after:absolute after:h-[2px] after:bg-[#1e293b] 
        ${currentPage === item.path ? "text-gray-400/90" : ""}`}>
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.path}
                  className={`relative w-full py-3 cursor-pointer hover:text-[#1e293b] 
        after:content-[""] after:w-0 hover:after:w-full after:duration-500 
        after:bottom-[2px] after:left-0 after:absolute after:h-[2px] after:bg-[#1e293b] 
        ${currentPage === item.path ? "text-gray-400/90" : ""}`}>
                  {item.label}
                </a>
              )}

              {/* زیرمنو دسکتاپ */}
              {item.submenu && (
                <div
                  className={`absolute top-[52px] bg-white w-[160px] p-[10px] flex flex-col gap-3 
           shadow-md border border-gray-200 transition-all duration-300 
          ${
            activeState === item.label
              ? "show z-50"
              : "opacity-0 pointer-events-none"
          }`}>
                  {item.submenu.map((sub, i) => (
                    <Link
                      to={sub.path}
                      key={i}
                      className="hover:text-[#1e293b]">
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="min-[1260px]:w-5/12 w-10/12 min-[820px]:w-4/12 flex justify-center gap-5 min-[800px]:pr-6 px-6 items-center">
          <form className="min-[1260px]:w-[70%] w-[90%] justify-center items-center h-[40px]">
            <input
              className="w-full bg-white border-[#1e293b] border shadow-md px-3 rounded-md outline-none h-full"
              placeholder="Search..."
            />
          </form>
          <div className="flex justify-center cursor-pointer shadow-md items-center gap-1 border-[#1e293b] border py-[7px] px-2 rounded-md">
            <span>
              <GrLanguage />
            </span>
            <span>En</span>
          </div>
          <div className="flex min-[820px]:hidden cursor-pointer shadow-md justify-center items-center gap-1 border-[#1e293b] border py-[7px] px-2 text-[25px] rounded-md">
            <span onClick={() => setActiveSlider(true)}>
              <IoIosMenu />
            </span>
          </div>
        </div>
      </div>
      {/* <div className='w-full flex justify-center items-center'>
            <div className='min-[1260px]:w-[70%] w-[90%] py-2 bg-[#c7c7c7]/90 shadow-md rounded-md flex justify-between px-10 items-center'>
                <div className='flex justify-center gap-5 items-center'>
                    <img src='http://www.atlas-aim.com/images/2023/09/15/logo2.png' className='h-[70px]' />
                    <div className='bg-white h-[50px] w-[2px]'></div>
                    <div className='flex justify-center items-center'>
                        <span className='text-gray-700'>Industry and Project Support Atlas</span>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <ul className='w-full rounded-md text-black flex justify-center items-center gap-6'>
                        <li className='flex justify-center items-center gap-2'>
                            <span><FaPhone /></span>
                            <span>0912........</span>
                        </li>
                        <div className='bg-white h-[40px] w-[2px]'></div>
                        <li className='flex justify-center items-center gap-2'>
                            <span className='text-[23px]'><CgMail /></span>
                            <span>Example@gamil.com</span>
                        </li>
                        <div className='bg-white h-[40px] w-[2px]'></div>
                        <li className='flex justify-center items-center gap-2'>
                            <span className='text-[23px]'><LuClock2 /></span>
                            <span>8-19</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div> */}

      {/* اسلایدر موبایل با آکاردئون و Fade+Slide */}
      <div
        dir="rtl"
        className={`fixed md:hidden z-50 top-12 bottom-0 left-0 w-full bg-[#1e293b] transform transition-transform duration-500 ease-in-out ${
          activeSlider ? "translate-x-0" : "-translate-x-full"
        }`}>
        <div className="relative flex flex-col w-[90%] mx-auto h-full gap-5 py-10 overflow-y-auto">
          {/* دکمه بستن */}
          <span
            className="absolute top-[25px] right-[18px] text-[30px] cursor-pointer text-white"
            onClick={() => setActiveSlider(false)}>
            <IoCloseOutline />
          </span>

          {/* لوگو بالا */}
          <div className="flex justify-center absolute -top-[15px] -left-[1px] cursor-pointer">
            <Link
              className="w-full"
              to={"/"}>
              <img
                className="h-[130px]"
                src="./logo.png"
                alt="icon"
              />
            </Link>
          </div>

          {/* آیتم‌های منو موبایل */}
          <div className="flex flex-col gap-2 mt-10 px-[10px]">
            {menuItems.map((item, index) => (
              <div key={index}>
                {/* آیتم اصلی */}
                <div
                  className="flex justify-between items-center py-2 px-3 rounded text-white  cursor-pointer mr-1"
                  onClick={() => {
                    if (item.submenu) {
                      setOpenSubmenu(openSubmenu === index ? null : index);
                    } else {
                      setActiveSlider(false);
                    }
                  }}>
                  <Link
                    to={href(item.path)}
                    className="flex-1">
                    {item.label}
                  </Link>
                  {item.submenu &&
                    (openSubmenu === index ? (
                      <IoChevronUp size={20} />
                    ) : (
                      <IoChevronDown size={20} />
                    ))}
                </div>

                {/* زیرمنو موبایل با Fade + Slide */}
                {item.submenu && (
                  <div
                    className={`pl-5 mr-[24px] flex flex-col gap-2 mt-1 overflow-hidden transition-all duration-300 ${
                      openSubmenu === index
                        ? "max-h-40 opacity-100 translate-y-0"
                        : "max-h-0 opacity-0 -translate-y-2"
                    } transform`}>
                    {item.submenu.map((sub, i) => (
                      <Link
                        to={sub.path}
                        key={i}
                        className="text-sm text-white/80 hover:text-white cursor-pointer transition-colors">
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

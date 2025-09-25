import { useEffect } from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { get_about } from "../store/reducers/aboutReducer";
const Footer = ({ t }) => {
  const dispatch = useDispatch();
  const { companyTitle, companyDes } = useSelector(state => state.about);
  const { products } = useSelector(state => state.product);
  useEffect(() => {
    dispatch(get_about());
  }, []);
  console.log(products);
  return (
    <footer className="bg-[#1e293b] border-t mt-12">
      <div className="flex justify-between mt-0  md:my-5 mx-auto w-[90%] flex-col md:flex-row relative items-start md:gap-3 lg:gap-5 2xl:gap-7 gap-1 text-white after:w-[100%] after:mx-auto after:h-[1px] after:bg-white after:absolute after:-bottom-4">
        <div className="md:w-4/12 w-full my-5 md:my-0 flex flex-col  text-white  justify-center items-start gap-2">
          <p className="2xl:text-[25px]  xl:text-[20px] lg:text-[18px] text-base mb-3">
            Find us on social media :
          </p>
          <div className="flex justify-start w-[90%] items-center gap-8 text-[20px] px-[12px]">
            <span className="">
              <FaFacebook />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaLinkedin />
            </span>
            <span>
              <FaYoutube />
            </span>
          </div>
          <div className="w-full h-64 mt-8 rounded overflow-hidden shadow">
            <iframe
              title="google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.1234567890!2d51.3890!3d35.6892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8df4a1c6cfe3e3%3A0x9a123456789abcdef!2sTehran!5e0!3m2!1sen!2sir!4v1610000000000!5m2!1sen!2sir"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex mb-5 md:mb-0 w-full md:w-2/12  flex-row justify-center items-start text-white">
          <div className="w-full">
            <span className="text-[18px] font-bold">Products</span>
            <div className="flex flex-col justify-center items-center gap-1 px-3 mt-2">
              {[1, 2, 3, 4, 5].map((p, i) => (
                <Link
                  key={i}
                  to={`product/${products[i]?.slug}`}
                  className="py-[6px] w-full line-clamp-1 truncate">
                  {products[i]?.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div
          id="contact-us"
          className="flex justify-center flex-col md:flex-row-reverse  items-center md:items-start  w-full  md:w-5/12">
          <div className="flex justify-center items-center xl:w-1/2 w-full h-[300px] md:h-[200px]">
            <img
              className="h-full w-full bg-white"
              src="http://localhost:5173/atlas_logo_transparent.png"
              alt=""
            />
          </div>
          <div className=" xl:w-1/2 w-full mt-3 xl:mt-0 md:mr-4 mr-0">
            <p className="w-full text-[26px] text-right">{companyTitle}</p>
            <p
              className="w-full text-right"
              dir="rtl">
              {companyDes.split(/\s+/).slice(0, 27).join(" ")}...
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-white">
        <div className="text-sm">{/* {t.footer.copyRights.rights} */}a</div>
        <div className="text-sm">{/* {t.footer.copyRights.design} */}a</div>
      </div>
    </footer>
  );
};

export default Footer;

// import { useParams } from "react-router-dom";

// export default function Products({ translations }) {
//   const param = useParams();
//   console.log(param);
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8 bg-white text-[#1e293b]">
//       <h1 className="text-3xl font-bold mb-6">{translations.title}</h1>
//       <ul className="list-disc list-inside space-y-2">
//         {translations.list.map((product, i) => (
//           <div
//             className=""
//             key={i}>
//             <li>{product.title}</li>
//             <img
//               src={product.image}
//               alt="a"
//             />
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { get_products } from "../store/reducers/productReducer";
import Pagination from "./../components/Pagination";

const Products = () => {
  const { products, totalProduct } = useSelector(state => state.product);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const obj = {
      page: page,
      search: search,
    };
    dispatch(get_products(obj));
  }, []);
  return (
    <div className="w-full flex justify-center mt-5 items-center">
      <div className="min-[1260px]:w-[80%] flex-wrap gap-7 w-[95%] flex justify-center items-center">
        {products.map((i, j) => (
          <Link
            to={"/product/*"}
            key={j}
            className="w-[300px] flex cursor-pointer justify-center gap-3 shadow-md items-end flex-col pb-5 bg-gray-100">
            <div className="w-full h-[200px] flex justify-center items-center">
              image
            </div>
            <h2 className="w-full px-5 text-[18px] font-semibold text-start text-[#1e293b]">
              {i.title}
            </h2>
            <p className="px-5 w-full text-gray-600 text-[15px] truncate line-clamp-2">
              {i.description}
            </p>
          </Link>
        ))}
        <div className="py-10 w-full flex justify-center items-center">
          {totalProduct > 6 && (
            <Pagination
              pageNumber={page}
              setPageNumber={setPage}
              totalItem={30}
              parPage={3}
              showItem={Math.floor(30 / 3)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;

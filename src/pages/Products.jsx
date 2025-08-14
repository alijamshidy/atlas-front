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
import { useState } from "react";
import Pagination from "./../components/Pagination";

const Products = () => {
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <div className="w-full flex justify-center mt-5 items-center">
      <div className="min-[1260px]:w-[80%] flex-wrap gap-7 w-[95%] flex justify-center items-center">
        {[1, 2, 3, 4, 5, 6].map((i, j) => (
          <div className="w-[300px] flex cursor-pointer justify-center gap-3 shadow-md items-end flex-col pb-5 bg-gray-100">
            <div className="w-full h-[200px] flex justify-center items-center">
              image
            </div>
            <h2 className="w-full px-5 text-[18px] font-semibold text-start text-[#1e293b]">
              Title product1
            </h2>
            <p className="px-5 w-full text-gray-600 text-[15px] truncate line-clamp-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
              saepe libero commodi quaerat! Qui tenetur quia, vitae eum ratione
              explicabo! Ullam necessitatibus dolorem id ducimus quaerat
              expedita consequatur debitis ipsa?
            </p>
          </div>
        ))}
        <div className="py-10 w-full flex justify-center items-center">
          {30 > 5 && (
            <Pagination
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
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

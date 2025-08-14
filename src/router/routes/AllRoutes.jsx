import { lazy } from "react";
import Layout from "../../components/Layout";

const Home = lazy(() => import("../../pages/Home"));
const Products = lazy(() => import("../../pages/Products"));
const About = lazy(() => import("../../pages/About"));
const ProductDetails = lazy(() => import("../../components/ProductDetails"));

const AllRoutes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "product/:slug",
        element: <ProductDetails />,
      },
      {
        path: "about-us",
        element: <About />,
      },
    ],
  },
];

export default AllRoutes;

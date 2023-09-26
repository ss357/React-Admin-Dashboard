import Home from "./pages/Home/Home";
import {
  createBrowserRouter,
 
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Users from "./pages/Users/Users";
import Products from "./pages/Products/Products";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/Footer";
import Menu from "./Components/Menu/Menu";
import Login from "./pages/Login/Login";
import "./styles/global.scss"

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

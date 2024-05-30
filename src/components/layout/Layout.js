import Header from "./Header";
import Footer from "./Footer";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const Layout = ({ children }) => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div
      className="container"
      data-theme={darkTheme ? "dark" : "light"}
    >
      <Header />
      {children}
      <br />
      <Footer />
    </div>
  );
};

export default Layout;

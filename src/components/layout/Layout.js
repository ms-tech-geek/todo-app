import Header from "./Header";
import Footer from "./Footer";
import { useContext } from "react";
import {
  ThemeContext,
  ThemeProvider,
} from "../../contexts/ThemeContext";

const InnerLayout = ({ children }) => {
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

const Layout = (props) => {
  return (
    <ThemeProvider>
      <InnerLayout {...props} />
    </ThemeProvider>
  );
};

export default Layout;

//* import react icons
import { FaGithub } from "react-icons/fa";

const Layout = (props) => {
  return (
    <>
      <header>
        <h1 className="mainTitle">todo list</h1>
      </header>
      {props.children}
      <footer>
        <p className="footerText">
          developed by{" "}
          <a target="_blank" href="https://github.com/mahdl-karami">
            Mahdl-Karami
          </a>{" "}
          <FaGithub />
        </p>
      </footer>
    </>
  );
};

export default Layout;

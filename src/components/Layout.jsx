export const Layout = (props) => {
  return (
    <>
      <header>
        <h1 className="mainTitle">todo list</h1>
      </header>
      {props.children}
      <footer>
        <p className="footerText">developed by <a href="#">Mahdl-Karami</a> | ❤️</p>
      </footer>
    </>
  );
};

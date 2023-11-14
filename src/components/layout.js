
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
export default function Layout({ children }) {
  return (
    <>
      {/* <Navbar /> */}
        <Header/>

      {children}

      <Footer />
      {/* <Footer /> */}
    </>
  );
}
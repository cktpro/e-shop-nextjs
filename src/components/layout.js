import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

export default function Layout({ children }) {
  return (
    <>
      {/* <Navbar /> */}
        <Header/>

      <main>{children}</main>

      <Footer />
      {/* <Footer /> */}
    </>
  );
}

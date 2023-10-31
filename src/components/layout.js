import { useEffect } from "react";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import { useDispatch} from "react-redux";
import { actionGetMyProfile } from "@/redux-store/account/action";
export default function Layout({ children }) {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(actionGetMyProfile())
  },[])
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
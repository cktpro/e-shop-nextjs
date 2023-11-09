import { useEffect } from "react";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import { useDispatch} from "react-redux";
import { actionGetMyProfile } from "@/redux-store/account/action";
import { useUserStore } from "@/zustand/store";
export default function Layout({ children }) {
  const dispatch = useDispatch();
  const user=useUserStore()
  useEffect(()=>{
    user.getMe()
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
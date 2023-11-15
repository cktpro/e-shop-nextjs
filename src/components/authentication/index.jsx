// withAuth.js
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useUserStore } from "@/zustand/store";
import LoadingPage from "../loader/loadingpage";
const withAuth = (WrappedComponent) => {
  const Auth = (props) => {
    const router = useRouter();
    const user = useUserStore();
    useEffect(() => {
      user.getMe();
      // Kiểm tra xác thực ở đây (ví dụ: từ localStorage hoặc từ API)
      if(user.isLoading===false){
        const isAuthenticated = user.isAuthenticated; /* Kiểm tra trạng thái xác thực */

      if (!isAuthenticated) {
        router.push("/auth/login"); // Nếu chưa xác thực, điều hướng đến trang đăng nhập
      }
      }
    }, []);

    // Nếu đã xác thực, render component đã bọc
   if(user.isAuthenticated) return <WrappedComponent {...props} />;
   return <LoadingPage/>
  };

  // Trả về component đã bọc
  return Auth;
};

export default withAuth;

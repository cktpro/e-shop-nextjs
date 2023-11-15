import { create } from "zustand";
import { axiosClient } from "@/helper/axiosClient";
import { message } from 'antd';
const useUserStore = create((set) => ({
  isLoading: {},
  isLogin: null,
  profile: {},
  isAuthenticated:false,
  isProfile: false,
  isLogout: false,
  login: async (data) => {
    set({ isLoading: true });
    try {
      const result = await axiosClient.post("/user/login", data);
      localStorage.setItem("Access_Token", result.data.payload.token);
      localStorage.setItem("Refresh_Token", result.data.payload.refreshToken);
      axiosClient.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${result.data.payload.token}`;
      const result2 = await axiosClient.get("/user/get_profile");
      set({profile: result.data.payload,isAuthenticated:true, isLogin: true, isLoading: false });
    } catch (error) {
      set({  isLogin: false, isLoading: false });
    }
  },
  getMe: async () => {
    set({ isloading: true });
    try {
      const token = localStorage.getItem("Access_Token");
      axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const result = await axiosClient.get("/user/get_profile");
      set({ profile: result.data.payload,isLogin:true, isLoading: false,isAuthenticated:true, isProfile: true });
    } catch (error) {
      set({ isLoading: false });
    }
  },
  logout: async () => {
    set({ isLoading: true });
    try {
      localStorage.removeItem("Access_Token");
      localStorage.removeItem("Refresh_Token");
      axiosClient.defaults.headers.delete["Authorization"];
      set({ profile: {}, isProfile:false,isLogin: false, isLoading: false });
    } catch (error) {
      console.log("◀◀◀ error ▶▶▶", error);
      set({ isLoading: false });
    }
  },
}));
const useCartStore = create((set) => ({
  isLoading: {},
  isSuccess: false,
  isError: false,
  cart: {},
  createCart: async (cartData) => {
    set({ isLoading: true });
    try {
      const result = await axiosClient.post("/cart",cartData);
      const data = result.data.payload;
      console.log('◀◀◀ data ▶▶▶',data);
      set({ isSuccess: true, isLoading: false });
      message.success("Thêm giỏ hàng thành công")
    } catch (error) {
      message.error("Thêm giỏ hàng thất bại")
      console.log('◀◀◀ error ▶▶▶',error);
      set({ isError: true, isLoading: false });
    }
  },
  getListCart: async () => {
    set({ isLoading: true });
    try {
      
      if(!axiosClient.defaults.headers.common.Authorization) return false
      const result = await axiosClient.get("/cart");
      const data = result.data.payload;
      set({ isSuccess: true, cart: data, isLoading: false });
    } catch (error) {
      console.log("◀◀◀ error ▶▶▶", error);
      set({ isError: true, isLoading: false });
    }
  },
  updateCart: async (data) => {
    set({ isLoading: true });
    try {
      for (let i=0;i<data.length;i++){
        // console.log('◀◀◀ data[i] ▶▶▶',data[i].product);
        await axiosClient.put("/cart",data[i].product);
      }
      const result = await axiosClient.get("/cart");
      set({ isSuccess: true, cart: result.data.payload, isLoading: false });
      message.success("Cập nhật giỏ hàng thành công")
    } catch (error) {
      console.log("◀◀◀ error ▶▶▶", error);
      message.error("Cập nhật giỏ hàng thất bại")
      set({ isError: true, isLoading: false });
    }
  },
  removeCart: async (varianId) => {
    set({ isLoading: true });
    try {
      await axiosClient.delete(`/cart/${varianId}`);
      const result = await axiosClient.get("/cart");
      const data = result.data.payload;
      set({ isSuccess: true, cart: data, isLoading: false });
      message.success("Xóa thành công")
    } catch (error) {
      console.log("◀◀◀ error ▶▶▶", error);
      set({ isError: true, isLoading: false });
    }
  },
}));

export { useUserStore, useCartStore };

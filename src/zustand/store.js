import { create } from "zustand";
import { axiosClient } from "@/helper/axiosClient";
import { message } from 'antd';
const useUserStore = create((set) => ({
  isLoading: {},
  isLogin: null,
  profile: {},
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
      set({ isLogin: true, loading: false });
    } catch (error) {
      set({ profile: {}, isLogin: false, isLoading: false });
    }
  },
  getMe: async () => {
    set({ loading: true });
    try {
      const token = localStorage.getItem("Access_Token");
      axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const result = await axiosClient.get("/user/get_profile");
      set({ profile: result.data.payload, loading: false, isProfile: true });
    } catch (error) {
      console.log("◀◀◀ error ▶▶▶", error);
      set({ profile: null, loading: false });
    }
  },
  logout: async () => {
    set({ loading: true });
    try {
      localStorage.removeItem("Access_Token");
      localStorage.sremoveItem("Refresh_Token");
      axiosClient.defaults.headers.delete["Authorization"];
      set({ profile: {}, isProfile: false, loading: false });
    } catch (error) {
      console.log("◀◀◀ error ▶▶▶", error);
      set({ loading: false });
    }
  },
}));
const useCartStore = create((set) => ({
  isLoading: {},
  isSuccess: false,
  isError: false,
  cart: {},
  createCart: async (data) => {
    set({ isLoading: true });
    try {
      const result = await axiosClient.post("/user/login", data);
      localStorage.setItem("Access_Token", result.data.payload.token);
      localStorage.setItem("Refresh_Token", result.data.payload.refreshToken);
      axiosClient.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${result.data.payload.token}`;
      set({ isSuccess: true, isLoading: false });
    } catch (error) {
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

import { create } from 'zustand'
import { axiosClient } from '@/helper/axiosClient'
const useUserStore = create((set) => ({
  loading:{},
  isLogin:null,
  profile:{},
  login: async (data) => {
    set({loading:true})
    try {
        const result= await axiosClient.post("/user/login",data)
        localStorage.setItem("Access_Token", result.data.payload.token);
        localStorage.setItem("Refresh_Token", result.data.payload.refreshToken);
        axiosClient.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${result.data.payload.token}`;
        set ({ isLogin:true,loading:false })

    } catch (error) {
        set ({ profile: {},isLogin:false,loading:false })
    }
    
  },
  getMe:async () =>{
    set({loading:true})
    try {
        const token = localStorage.getItem("Access_Token")
        axiosClient.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${token}`;
        const result= await axiosClient.get("/user/get_profile")
        set ({profile:result.data.payload,loading:false })
    } catch (error) {
        console.log('◀◀◀ error ▶▶▶',error);
        set ({profile:null,loading:false })
    }
  }
  
}))
export {useUserStore}
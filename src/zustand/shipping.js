import { create } from "zustand";
import { axiosClient } from "@/helper/axiosClient";
const useShippingStore = create((set) => ({
  feeShip: 0,
  isLoading: false,
  isProvince: false,
  isDistrict: false,
  isWard: false,
  isFeeShip:false,
  isError: false,
  provinceList:{},
  districtList:{},
  wardList:{},
  getFee: async (address, product) => {
    set({ isLoading: true,isFeeShip:false });
    try {
      let total = 0,
        width = 0,
        height = 0,
        length = 0,
        weight = 0;
      for (let i = 0; i < product.length; i++) {

        width += product[i].productDetail.width * product[i].product.quantity ;
        height += product[i].productDetail.height * product[i].product.quantity ;
        weight += product[i].productDetail.weight * product[i].product.quantity ;
        length += product[i].productDetail.length * product[i].product.quantity ;
      }
      // console.log('◀◀◀  ▶▶▶',width,
      // height,
      // length,
      // weight);
      const dataShip = {
        from_district_id: 1526,
        from_ward_code: "40103",
        // service_id: 53320,
        service_type_id: 2,
        // "to_district_id":1526,
        // "to_ward_code":"40103",
        height: height,
        length: length,
        weight: weight,
        width: width,
        to_district_id: parseInt(address.districtId),
        to_ward_code: address.wardId.toString(),
        // height: 50,
        // length: 20,
        // weight: 200,
        // width: 20,
        insurance_value: 0,
        cod_failed_amount: 2000,
        coupon: null,
      };
      axiosClient.defaults.headers.common["token"] =
        "b100dde3-66b8-11ee-96dc-de6f804954c9";
      const res = await axiosClient.post(
        "https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee",
        dataShip
      );
      set({ isFeeShip: true, feeShip: res.data.data.total, isLoading: false });
    } catch (error) {
      set({ isError: true, isLoading: false });
    }
  },
  getProvince: async () => {
    set({ isProvince: false, isLoading: true });
    try {
      axiosClient.defaults.headers.common["token"] =
        "b100dde3-66b8-11ee-96dc-de6f804954c9";
      const res = await axiosClient.get(
        "https://online-gateway.ghn.vn/shiip/public-api/master-data/province"
      );
      set({ isProvince: true, provinceList: res.data.data, isLoading: false });
    } catch (error) {
      set({ isError: true, isLoading: false });
    }
  },
  getDistrict:async(provinceId)=>{
    set({wardList:{}, isDistrict: false, isLoading: true });
    try {
        const data = {
          province_id: parseInt(provinceId),
        };
        // axios.defaults.headers.common['token'] = "b100dde3-66b8-11ee-96dc-de6f804954c9"
        const res = await axiosClient.post(
          "https://online-gateway.ghn.vn/shiip/public-api/master-data/district",
          data
        );
        set({ isDistrict: true, districtList: res.data.data, isLoading: false });
      } catch (error) {
        set({ isError: true, isLoading: false });
      }
  },
  getWard:async(districtId)=>{
    set({ isWard: false, isLoading: true });
    try {
        const data = {
          district_id: parseInt(districtId),
        };
        // axios.defaults.headers.common['token'] = "b100dde3-66b8-11ee-96dc-de6f804954c9"
        const res = await axiosClient.post(
          "https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id",
          data
        );
        set({ isWard: true, wardList: res.data.data, isLoading: false });
      } catch (error) {
        set({ isError: true, isLoading: false });
      }
  }
}));
export { useShippingStore };

import HeadMeta from "@/components/HeadMeta";
import React,{useEffect, useState} from "react";
import { axiosClient } from "@/helper/axiosClient";
import ProductItemComponent from "@/components/productItemComponent";
import { Checkbox, Button,Select,Space } from 'antd';
const CheckboxGroup = Checkbox.Group;
// const plainOptions = ['Hàng mới', 'Flash sale', 'Giảm giá'];
const plainOptions = ['Hàng mới', 'Flash sale', 'Giảm giá'];
function Product(props) {
  const { data,category,supplier } = props;
  // Checkbox
  const [checkedList, setCheckedList] = useState([]);
const[categoryList,setCategoryList]= useState([]);
const[supplierList,setsupplierList]= useState([]);
  const onChange = (list) => {
    console.log('◀◀◀ list ▶▶▶',list);
    setCheckedList(list);
  };
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
  };

  const list = ["1", "2", "3", "4", "5", "6", "6", "8", "9", "10"];
 useEffect(()=>{
  const newList=category.map((item)=>({
    value:item.id,
    label:item.name,
  }))
  const newListSuplier=supplier.map((item)=>({
    value:item.id,
    label:item.name,
  }))
  setCategoryList(newList)
  setsupplierList(newListSuplier)
 },[])
  return (
    <>
      <HeadMeta title="Trang sản phẩm" />
      <div className="container my-3">
      <Space wrap>
    
    <Select
      defaultValue="Loại sản phẩm"
      style={{
        width: "auto",
      }}
      // onChange={handleChange}
      options={categoryList}
    />
    <Select
      defaultValue="Giá"
      style={{
        width: 120,
      }}
      options={[
        {
          value: 'lucy',
          label: '$0-$1000',
        },
        {
          value: 'lucy',
          label: '$1000-$3000',
        },
      ]}
    />
    <Select
      defaultValue="Nhà cung cấp"
      style={{
        width: "auto",
      }}
      options={supplierList}
    />
    <Select
      defaultValue="lucy"
      style={{
        width: 120,
      }}
      allowClear
      options={[
        {
          value: 'lucy',
          label: 'Lucy',
        },
      ]}
    />
     </Space>
        <div className="d-flex justify-content-start align-items-center mt-3 gap-3">
          <span >{data.length} Kết quả</span>
          <>
      <div>
      <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} className="my-2"/>
      {checkedList.length>0?<Button type="text" danger onClick={()=>setCheckedList([])}>Clear all</Button>:null}
      </div>
    </>
        </div>
        
        <div className="row">
          {data.map((item, idx) => {
            return <ProductItemComponent key={idx} item={item}  />;
          })}
        </div>
      </div>
    </>
  );
}

export default Product;

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await axiosClient.get("/products");
  const categoryResult = await axiosClient.get("/categories");
  const supplierResult = await axiosClient.get("/suppliers");
  const data = await res.data.payload;

  // Pass data to the page via props
  return { props: { data,category:categoryResult.data.payload,supplier:supplierResult.data.payload } };
}

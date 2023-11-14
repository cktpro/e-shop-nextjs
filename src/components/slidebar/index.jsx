import React, { useCallback, useState } from "react";
import Image from "next/image";
import styles from "./slidebar.module.scss";
import Link from "next/link";
import Carousels from "../carousel";
const Category = [
  {
    id: 1,
    name: "Điện thoại",
    sub: [
      {
        id: 1,
        name: "Apple",
      },
      {
        id: 2,
        name: "Samsung",
      },
      {
        id: 3,
        name: "Xiaomi",
      },
      {
        id: 4,
        name: "Nokia",
      },
    ],
  },
  {
    id: 2,
    name: "Laptop",
    sub: [
      {
        id: 1,
        name: "Asus",
      },
      {
        id: 2,
        name: "Acer",
      },
      {
        id: 3,
        name: "Apple Macbook",
      },
      {
        id: 4,
        name: "Dell",
      },
      {
        id: 5,
        name: "HP",
      },
    ],
  },
  {
    id: 3,
    name: "Tablet",
  },
  {
    id: 4,
    name: "Smart Watch",
  },
  {
    id: 5,
    name: "Headphone",
  },
];
function SlideBar(props) {
  const [categoryList, setCategory] = useState(Category);
  const showMenu = useCallback(
    (index) => {
      return () => {
        const updatedItem = [...categoryList];
        updatedItem[index].isExtend = !updatedItem[index].isExtend;
        setCategory(updatedItem);
      };
    },
    [categoryList]
  );
  const hiddenMenu= useCallback((()=>{
    return ()=>{
      
      const updateItem=[...categoryList];
      updateItem.map((item)=>{
        if(item.isExtend) {
          return item.isExtend=false
        };
        return item
        
      })
      
      setCategory(updateItem)

    }
  }),[categoryList])

  return (
      <div className={styles.main}>
        <div className={styles.slide_bar}>
        <ul>
          {categoryList.map((item, index) => {
            if (item.sub && item.sub.length > 0) {
              return (
                <li key={index}>
                  <Link href="/product">{item.name}</Link>
                  <i onClick={showMenu(index)}>
                    {item.isExtend ? (
                      <Image
                        src={require("@/assets/images/icon/slidebar/DropDown_Actived.png")}
                        alt="Dropdown_Active"
                      />
                    ) : (
                      <Image
                        src={require("@/assets/images/icon/slidebar/DropDown.png")}
                        alt="Dropdown"
                      />
                    )}
                  </i>
                  <ul
                    className={
                      item.isExtend
                        ? `${styles.dropdown} ${styles.active_dropdown}`
                        : styles.dropdown
                    }
                  >
                    {item.sub.map((item) => {
                      return (
                        <li onClick={hiddenMenu()} key={item.id}>
                          <Link href="/">{item.name}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
              //    return <li key={index}>{item.name}<i><Image src={require('assets/images/icon/slidebar/DropDown.png')} alt="Dropdown" /></i></li>
            }
            return (
              <li key={item.id}>
                <Link href="/">{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
        <div className={styles.carousel}>
        <Carousels/>
        </div>
      </div>
  );
}

export default SlideBar;

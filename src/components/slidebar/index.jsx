import React, { useCallback, useState } from "react";

import styles from "./slidebar.module.scss";
import { Link } from "react-router-dom";
const Category = [
  {
    id: 1,
    name: "Women's Fashion",
    sub: [
      {
        id: 1,
        name: "Clothing",
      },
      {
        id: 2,
        name: "Shoes",
      },
      {
        id: 3,
        name: "Bags",
      },
      {
        id: 4,
        name: "Watches",
      },
    ],
  },
  {
    id: 2,
    name: "Men's Fashion",
    sub: [
      {
        id: 1,
        name: "Clothing",
      },
      {
        id: 2,
        name: "Shoes",
      },
      {
        id: 3,
        name: "Bags",
      },
      {
        id: 4,
        name: "Watches",
      },
    ],
  },
  {
    id: 3,
    name: "Electronics",
  },
  {
    id: 4,
    name: "Home & Lifestyle",
  },
  {
    id: 5,
    name: "Medicine",
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
      <div className={styles.slide_bar}>
        <ul>
          {categoryList.map((item, index) => {
            if (item.sub && item.sub.length > 0) {
              return (
                <li key={index}>
                  <Link>{item.name}</Link>
                  <i onClick={showMenu(index)}>
                    {item.isExtend ? (
                      <img
                        src={require("assets/images/icon/slidebar/DropDown_Actived.png")}
                        alt="Dropdown_Active"
                      />
                    ) : (
                      <img
                        src={require("assets/images/icon/slidebar/DropDown.png")}
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
                          <Link>{item.name}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
              //    return <li key={index}>{item.name}<i><img src={require('assets/images/icon/slidebar/DropDown.png')} alt="Dropdown" /></i></li>
            }
            return (
              <li key={item.id}>
                <Link>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
  );
}

export default SlideBar;

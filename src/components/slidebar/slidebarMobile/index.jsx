import React from "react";

import styles from "./slidebarMobile.module.scss";
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
  {
    id: 6,
    name: "Other",
  },
];
function SlideBarMobile(props) {
//   const showMenu = useCallback(
//     (index) => {
//       return () => {
//         const updatedItem = [...categoryList];
//         updatedItem[index].isExtend = !updatedItem[index].isExtend;
//         setCategory(updatedItem);
//       };
//     },
//     [categoryList]
//   );
//   const hiddenMenu = useCallback(() => {
//     return () => {
//       const updateItem = [...categoryList];
//       updateItem.map((item) => {
//         if (item.isExtend) {
//           return (item.isExtend = false);
//         }
//         return item;
//       });

//       setCategory(updateItem);
//     };
//   }, [categoryList]);

  return (
    <div className={styles.slide_mobile}>
        <h2>Categories</h2>
      <div className={styles.grid_container}>
        {Category.map((item, index) => {
          return (
            <div className={styles.grid_item} key={item.id}>
              <Link>{item.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SlideBarMobile;

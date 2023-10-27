import React from "react";
import Image from "next/image";
// Import Styles
import styles from "@/styles/404.module.scss";
import HeadMeta from "@/components/HeadMeta";
function Custom404(props) {
  return (
    <>
    <HeadMeta title="Page Not Found" />
      <div className= "container">
        
        <div className={`d-flex flex-wrap gap-2 justify-content-evenly w-100 ${styles.main_404}`}> 
        <div>
            <Image className={styles.img1} src={require("@/assets/images/404/monster1.png")}  alt="monster1 img"/>
        </div>
        <div className="d-flex flex-column gap-5">
            <h1 className="text-center">Sorry, this content is not available.</h1>
            <Image className={styles.img2} src={require("@/assets/images/404/monster2.png")} alt="monster2 img"/>
        </div>
        </div>

      </div>
    </>
  );
}

export default Custom404;

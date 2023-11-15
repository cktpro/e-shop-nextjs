import nProgress from 'nprogress';
import NProgress from 'nprogress'; // NProgress package
import "nprogress/nprogress.css";
import { useEffect } from 'react';
NProgress.configure({ showSpinner: false });

const Loading = (props) => {
  let {isLoading}=props;
  useEffect(()=>{
    if(isLoading)nProgress.start()
    else nProgress.done()
  })
    
    // if(isLoading){
    
  return null
}

export default Loading;
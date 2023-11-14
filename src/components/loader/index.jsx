import Router from 'next/router';
import NProgress from 'nprogress'; // NProgress package
import "nprogress/nprogress.css";
NProgress.configure({ showSpinner: false });
// Hiển thị tiến trình khi route thay đổi
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const Loader = () => {
  return null;
};

export default Loader;
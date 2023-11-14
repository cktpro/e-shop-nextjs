import NProgress from 'nprogress'; // NProgress package
import "nprogress/nprogress.css";
NProgress.configure({ showSpinner: false });
// Hiển thị tiến trình khi route thay đổi
const Loading = (props) => {
    const {isLoading}=props
    isLoading?NProgress.start():NProgress.done()
  return (
null
  );
};

export default Loading;
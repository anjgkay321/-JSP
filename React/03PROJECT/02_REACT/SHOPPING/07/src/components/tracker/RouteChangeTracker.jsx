import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//COOKIE
import Cookies from 'js-cookie';
const RouteChangeTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // 경로가 변경될 때마다 실행할 함수
    console.log('Route changed to:', location.pathname);

    // 경로 이동시마다 로그인 상태 쿠키를 10분으로 초기화
    if(Cookies.get('isLogined')!==undefined){
      const inTenMinutes = new Date(new Date().getTime() + 10 * 60 * 1000); 
      Cookies.set('isLogined', true, { expires: inTenMinutes });
    }

  }, [location]); // location이 변경될 때마다 실행

  return null;  // 이 컴포넌트는 화면에 아무것도 렌더링하지 않음

};

export default RouteChangeTracker;
import {useState} from 'react';
import AppContext from './MyContext';

const MyProvider = ({children}) => {
    console.log(children);
    const [globalState, setGlobalState] = useState('KOREA_01'); //PROVIDER에서 관리하는 상태값
    const value = {globalState,setGlobalState} // 컴포넌트로 전달하기 위한 객체 생성
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )

}

export default MyProvider;
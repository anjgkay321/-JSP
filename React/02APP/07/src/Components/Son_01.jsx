import {useState,useContext} from 'react';
import MyContext from './MyContext'

const Son_01 = ({name}) => {  
    const {globalState,setGlobalState} = useContext(MyContext); //PROVIDER에서 관리하는 상태값
    return (
        <div>
            <h1>Son_01</h1>
            전역변수 : {globalState} <br/>
            전역변수 변경 : <button onClick={(e)=>{ setGlobalState('Son_01 변경!') }}>변경하기</button> <br/>
            부모로부터 전달된 내용 확인 : {name}
        </div>
    )
}
export default Son_01;
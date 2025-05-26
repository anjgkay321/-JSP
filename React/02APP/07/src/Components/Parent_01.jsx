
import {useState,useContext} from 'react';
import Son_01 from './Son_01';
import MyContext from './MyContext'
//상위컴포넌트 -> 하위컴포넌트(props사용)
const Parent_01 = ()=>{
    const [name, setName] = useState('홍길동');
    const {globalState,setGlobalState} = useContext(MyContext); //PROVIDER에서 관리하는 상태값
    return (
        <div>
            <h1>Parent_01</h1>
            전역변수 : {globalState} <br/>
            전역변수 변경 : <button onClick={(e)=>{ setGlobalState('Parent_01 변경!') }}>변경하기</button>
            <hr />
            <Son_01 name={name} />
        </div>
    )
}
export default Parent_01;
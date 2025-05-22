
//01 기본 JSX요소 생성
export const Element1 = ()=> <h1>HELLO WORLD - 1</h1>

//02 function예약어로 Export
export function Element2() {
    return <h2>HELLO WORLD - 2</h2>
}

//03 외부 인자 받기
export function Element3(props) {
    if(props.auth === "ROLE_ADMIN") {
        return <h2>HELLO ADMIN , NAME : {props.name}</h2>
    }
    if(props.auth === "ROLE_USER") {
        return <h2>HELLO USER  , NAME : {props.name}</h2>
    }
}
//03 외부 인자 받기(구조분해 할당)  const {auth,name} = props
export const Element4  = ({auth,name}) => {
    if(auth === "ROLE_ADMIN") {
        return <h2>HELLO ADMIN , NAME : {name}</h2>
    }
    if(auth === "ROLE_USER") {
        return <h2>HELLO USER  , NAME : {name}</h2>
    }
}

//04 반복문 처리
export const Element5 = (props)=>{
    const list = props.list; // ['a','b','c']
    return (
        <div className="items">
        
            {list.map((item,index)=>{
                console.log(item);
                return <div key={index} >{item}</div>
            })}

        </div>
    );
}


//05 기본 컴포넌트 EXPORT
const DefaultComponent1 = ()=>{
    return <h1>DEFAULT COMPONENT1</h1>
}
const DefaultComponent2 = ()=>{
    return <h1>DEFAULT COMPONENT2</h1>
}

export default {
    DefaultComponent1,
    DefaultComponent2
};
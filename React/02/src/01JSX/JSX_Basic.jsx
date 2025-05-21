//01 기본 JSX요소 생성
export const Element1 = () => <h1>HELLO WORLD - 1</h1>

export const Element2 = <h3>HELLO WORLD - 2</h3>

//02 function 예약어로  Export
export function Element3(){
    return <h2>HELLO WORLD - 3</h2>
}

//03 외부 인자 받기
export function Element4(props){
    if(props.auth ==="ROLE_ADMIN"){
      return <h2>HELLO ADMIN , NAME : {props.name}</h2>
    }
        if(props.auth ==="ROLE_USER"){
      return <h2>HELLO USER , NAME : {props.name}</h2>
    }
}
//04 외부 인자 받기(구조분해 할당) const {auth,name} = props
export function Element5({auth,name}){
    if(auth ==="ROLE_ADMIN"){
      return <h2>HELLO ADMIN , NAME : {name}</h2>
    }
        if(auth ==="ROLE_USER"){
      return <h2>HELLO USER , NAME : {name}</h2>
    }
}



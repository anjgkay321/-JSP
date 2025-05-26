


const Son_02 = ({name,handleNameChange}) => {  
    return (
        <div>
            <h1>Son_02</h1>
            부모로부터 전달된 내용 자식에서 확인 : {name} <br/>
            <input type="text" placeholder='변경할 이름입력' onChange={(e)=>{handleNameChange(e.target.value)}} />
            <button>이름변경</button>
        </div>
    )
}
export default Son_02;
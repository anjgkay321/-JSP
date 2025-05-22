//01IF
const Component01 = ({ isAuth }) => {
  if (isAuth) return <h1>인증 되었습니다.</h1>;
  else return <h1>로그인이 필요합니다</h1>;
};

//02삼항연산자
const Component02 = ({ isAuth }) => {
  return (
    <>
      {isAuth ? (
        <>
          <h1>인증완료</h1>
          <h2>user1 계정 로그인 - </h2>
        </>
      ) : (
        <h1>로그인 필요</h1>
      )}
    </>
  );
};

//03 && 연산자
const Component03 = ({items}) => {
    return (
        <div className="items">
             {items.length>0 && items.map((item,idx)=>{
                return <li key={idx}>{item}</li>
             })}   
        </div>
    );
};

export default {
  Component01,
  Component02,
  Component03,
};


import {Element1,Element2} from "./01JSX/JSX_Basic";
import {Element3,Element4} from "./01JSX/JSX_Basic";
import {Element5} from "./01JSX/JSX_Basic";
import CustomComponent from "./01JSX/CustomComponent";

import ALL from "./01JSX/JSX_Basic";

// 이벤트 확인
import {Component_01,Component_02,Component_03} from "./01JSX/JSX_Event"

function App() {
  const headerTitle = "HEADER TITLE";
  const mainContents = "MAIN CONTENTS";
  return (
    <>
      <div className="App">
        <div className="header" style={{ fontSize: "30px", backgroundColor: "orange" }}>
        {/*           
          {headerTitle}
          <Element1 />
          <Element2 />
         */}
        </div>
        <div className="main">{mainContents}</div>
        <div className="footer">
{/*           
          <Element3 auth={"ROLE_USER"} name={"홍길동"} />
          <hr/>
          <Element4 auth={"ROLE_ADMIN"} name={"홍길동"} />
          <hr/>
          <Element5 list={["aaa","bbb","ccc"]} />
          <hr/>
          <ALL.DefaultComponent1 />
          <ALL.DefaultComponent2 />
          <hr/>
          <CustomComponent />
*/}

          {/*  */}
          <Component_01 />
          <hr/>
          <Component_02 />
          <hr/>
          <Component_03 />
        </div>
      </div>
      
    </>
  );

}

export default App;

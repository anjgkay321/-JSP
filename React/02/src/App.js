import {Element1,Element2,Element3} from "./01JSX/JSX_Basic";
import {Element4} from "./01JSX/JSX_Basic";
import {Element5} from "./01JSX/JSX_Basic";

function App() {
      const headerTitle ="HEADER TITLE";
      const mainContent = "MAIN CONTESNTS";
    return (
      <div className='APP'>
        <div className='header' style={{fontSize:"30px",backgroundColor:"orange"}}>
          {headerTitle}
        <Element1/>
        {Element2}
        <Element3/>

          </div>
        <div className='main'>{mainContent}</div>
        <div className='footer'>
          FOOTER
          <Element4 auth={"ROLE_USER"} name={"홍길동"}/>
          <hr/>
          <Element5 auth={"ROLE_ADMIN"} name={"홍길동"}/>
          </div>

      </div>
    );
      
}

export default App;

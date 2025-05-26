import Parent_01 from "./Components/Parent_01";
import Parent_02 from "./Components/Parent_02";
import MyProvider from "./Components/MyProvider";
function App() {
  return (
    <MyProvider>
      <div className="App">
          <h1>부모에서 자식으로 전달</h1>
          <Parent_01 />
          <hr />
          <Parent_02 />
      </div>
    </MyProvider>
  );
}

export default App;

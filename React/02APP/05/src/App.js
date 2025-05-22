import Basic01 from './Condition/01Basic';

function App() {
  return (
    <div className="App">
      <Basic01.Component01 isAuth={false} />
      <hr/>
      <Basic01.Component02 isAuth={false} />
      <hr/>
      <Basic01.Component03 items={['a','b','c']} />
    </div>
  );
}

export default App;

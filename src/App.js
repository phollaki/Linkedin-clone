import "./App.css";
import Feed from "./components/body-parts/Feed";
import Sidebar from "./components/body-parts/Sidebar";
import Widget from "./components/body-parts/Widget";
import Header from "./components/layout/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
      {/*App Body*/}
      {/*Sidebar*/}
      {/*Feed*/}
      {/*Widget*/}
    </div>
  );
}

export default App;

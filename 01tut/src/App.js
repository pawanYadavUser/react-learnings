import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Content1 from "./Content1";
import Footer from "./Footer";
import Counter1 from "./Counter1";
import MemoizedExample from "./MemoizedExample";
import RandomList from "./RandomList";
import TodoApp from "./TodoApp";
import IntroToJSX from "./IntroToJSX.jsx";
import DemoComponent from "./DemoComponent.js";
import FunctionAsProps from "./components/FunctionAsProps.jsx";
import Title from "./components/Title.jsx";
import ClickEventHandler from "./components/ClickEventHandler.js";
import UserLogin from "./components/UserLogin.jsx";

function App() {
  const name = "Dave";
  const handleNameChanges = () => {
    const names = ["anuj", "durgesh", "shahrukh", "rohitash", "akash"];
    const int = Math.floor(Math.random() * 4);
    return names[int];
  };
  return (
    <div className="App">
      {/* <Header />
      <Content1 />
      <Footer />
      <Counter1 />
      <MemoizedExample />
      <RandomList />
      <TodoApp /> */}
      {/* <IntroToJSX />
      <DemoComponent />
      <FunctionAsProps
        username="Alan Ritchson"
        country="Australia"
        username2="Alan Ritchson2"
      />
      <FunctionAsProps
        username="Ben Ritchson"
        country="UK"
        username2="Ben Ritchson2"
      />
      <FunctionAsProps
        username="Alan Walker"
        country="Germmany"
        username2="Alan Walker2"
      />
      <FunctionAsProps
        username="Mike tyson"
        country="USA"
        username2="Mike tyson2"
      />
      <FunctionAsProps
        username="Alan stafford"
        country="Sweden"
        username2="Alan stafford2"
      /> */}

      {/* <Title /> */}
      {/* <ClickEventHandler /> */}
      <UserLogin />
    </div>
  );
}

export default App;

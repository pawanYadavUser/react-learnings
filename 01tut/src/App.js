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
import { Welcome } from "./components/ClassComponent.jsx";
import halo from "./images/halo.jpg";
import ListRendering from "./components/ListRendering.jsx";
import RegularStyleSheet from "./components/RegularStyleSheet.js";
import InlineStyle from "./components/InlineStyle.js";
import "./components/appStyle.css";
import myAppStyle from "./components/myAppStyle.module.css";
import FormInput from "./components/FormInput.js";
import HookStateArray from "./components/useStateHook/HookStateArray.js";
import DemoFragment from "./components/reactFragment/DemoFragment.jsx";
import MyTable from "./components/reactFragment/MyTable.js";
import Counter2 from "./components/useStateHook/Counter2.js";
import Counter3 from "./components/useStateHook/Counter3.js";
import ExampleUpdateTitleOnButtonClick from "./components/useEffectPractice/ExampleUpdateTitleOnButtonClick.js";
import ExampleConditionallyRunUseEffect from "./components/useEffectPractice/ExampleConditionallyRunUseEffect.js";
import EffectCleanupLogMousePointer from "./components/useEffectPractice/EffectCleanupLogMousePointer.js";
import EffectComponentWillUnmount from "./components/useEffectPractice/EffectComponentWillUnmount.js";
import FetchDataUsingAxios from "./components/FetchData/FetchDataUsingAxios.js";
import FetchSinglePostDataUsingAxios from "./components/FetchData/FetchSinlgePostDataUsingAxios.js";
import ComponentC from "./components/context/ComponentC.js";
import UseReducerHookExample1 from "./components/useReducerHook/UseReducerHookExample1.js";
import UseReducerHookExample2 from "./components/useReducerHook/UseReducerHookExample2.js";
import UseReducerHookMultipleUseReducer from "./components/useReducerHook/UseReducerHookMultipleUseReducer.js";
import UseContextAndUseReducer from "./components/useReducerHook/UseContextAndUseReducer.js";
import UseReducerDataFetch from "./components/useReducerHook/UseReducerDataFetch.js";
import MainComponent from "./components/usecallbackPractice/MainComponent.js";
function App() {
  const name = "Dave";
  const handleNameChanges = () => {
    // Math.random()
    // → Generates a random number between 0 (inclusive) and 1 (exclusive).
    // For example, 0.13, 0.78, 0.999, etc.

    // Math.random() * 4
    // → Multiplies that random number by 4, giving a value between 0 and 3.999....

    // Math.floor(Math.random() * 4)
    // → Math.floor() rounds the value down to the nearest integer.
    // So possible outcomes are: 0, 1, 2, or 3.

    const names = ["anuj", "durgesh", "shahrukh", "rohitash", "akash"];
    const int = Math.floor(Math.random() * names.length);
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
      <Title />
      {/* <ClickEventHandler /> */}
      {/* <UserLogin />
      <Welcome username="Pawan yadav">
        <p>I am 28 years old</p>
        <p>I am a react developer</p>
        <img src={halo}></img>
      </Welcome> */}
      {/* <ListRendering /> */}
      {/* <RegularStyleSheet primary={false} /> */}
      {/* <InlineStyle />
      <h1 className="error">Error !!!!!!!!!</h1>
      <h2 className={myAppStyle.success}>Success############</h2> */}
      {/* <FormInput /> */}
      <HookStateArray />
      <DemoFragment />
      <MyTable />
      <Counter2 />
      <Counter3 />
      {/* <ExampleUpdateTitleOnButtonClick /> */}
      {/* <ExampleConditionallyRunUseEffect /> */}
      {/* <EffectCleanupLogMousePointer /> */}
      <EffectComponentWillUnmount />
      <FetchDataUsingAxios />
      <FetchSinglePostDataUsingAxios />
      <ComponentC />
      {/* <UseReducerHookExample1 /> */}
      <UseReducerHookExample2 />
      <UseReducerHookMultipleUseReducer />
      <UseContextAndUseReducer />
      <UseReducerDataFetch />
      <MainComponent />
    </div>
  );
}

export default App;

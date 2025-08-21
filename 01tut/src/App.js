import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Counter from "./Counter";

function App() {
  const name = "Dave";
  const handleNameChanges = () => {
    const names = ["anuj", "durgesh", "shahrukh", "rohitash", "akash"];
    const int = Math.floor(Math.random() * 4);
    return names[int];
  };
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
      <Counter />
    </div>
  );
}

export default App;

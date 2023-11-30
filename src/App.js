import "./App.css";
// import About from "./Components/About";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <NavBar title="TextUtils" />
      <div className="container my-3">
        <TextForm heading="Enter text to analyze" />
        {/* <About></About> */}
      </div>
    </>
  );
}

export default App;

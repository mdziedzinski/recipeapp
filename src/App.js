import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";


import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Nav />
       
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;

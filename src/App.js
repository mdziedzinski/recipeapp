import Pages from "./pages/Pages";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";


import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Nav />
        <Pages />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

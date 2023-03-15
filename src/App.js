import "./App.css";
import CharacterList from "./pages/CharacterList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Character from "./pages/Character";
import Search from "./pages/Search";
import ReactForm from "./pages/ReactForm";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<CharacterList />} />
          <Route  path="/search" element={<Search />} />
          <Route path="/form" element={<ReactForm />} />
          <Route path="/:id" element={<Character />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

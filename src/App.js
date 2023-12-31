import { BrowserRouter, Routes, Route } from "react-router-dom";
import Arabic from "./component/Arabic";
import English from "./component/English";
import "./component/main.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/sharika" element={<Arabic />} />
          <Route exact path="/sharika/en" element={<English />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

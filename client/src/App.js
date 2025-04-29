import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import './App.scss';

import AddStories from "./Pages/AddStories";
import UpdateStories from "./Pages/UpdateStories";
import Explore from "./Pages/Explore";
import About from "./Pages/About";
import BestStories from "./Pages/BestStories";
// import Update from "./Pages/Update";
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Explore />} />
          <Route path="/explore" element ={<Explore />} />
          <Route path="/AddStories" element={<AddStories/ >} />
          <Route path="/UpdateStories/:id" element ={<UpdateStories/>} />
          <Route path="/BestStories" element ={<BestStories />} />
          <Route path="/About" element={<About/>} />
          {/* <Route path="/Update" element={<Update />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

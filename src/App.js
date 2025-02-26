import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Editprofile from "./pages/Editprofile";
import Layout from "./Components/Layout";
import Home from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
       
          <Route Path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/editprofile" element={<Editprofile />} />

          </Route>
        </Routes>
     
    </BrowserRouter>
  );
}

export default App;

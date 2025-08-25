import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponent from "./component/HomeComponent";
import VideoComponent from "./component/VideoComponent";


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomeComponent />}></Route>
    <Route path="/Video" elememnt= {<VideoComponent />}></Route>
    </Routes>
  
    </BrowserRouter>
        );
}
export default App;

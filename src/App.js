import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import Experience from "./components/Experience";
import Skill from "./components/Skill";
import Award from "./components/Award";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <switch>
        <Route component={Home} path="/" exact/>
        <Route component={About} path="/about"/>
        <Route component={SinglePost} path="/post/:slug"/>
        <Route component={Post} path="/post"/>
        <Route component={Project} path="/project"/>
        <Route component={Experience} path="/experience"/>
        <Route component={Skill} path="/skill"/>
        <Route component={Award} path="/award"/>
      </switch> 
    </BrowserRouter>
  ) 
}

export default App;

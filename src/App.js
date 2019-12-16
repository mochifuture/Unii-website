import React from "react";
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import berga from "./Images/berga.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import TopPage from "./Pages/TopPage";
import ButtonPageTop from "./Components/ButtonPageTop";
import IconS from "./Icons/icon_s.png";
import IconF from "./Icons/icon_f.png";
import IconT from "./Icons/icon_t.png";
import IconY from "./Icons/icon_y.png";
import IconTum from "./Icons/icon_tum.png";

function App() {
  return (
    <div className="App">

      <Router>
        <header className="App-header" id="top">
          <img src={berga} width="700"></img>
        </header>

        <div className="Main">
            <div className="App-main" id="main">
                <div>
                    <Switch>
                        <Route path='/' exact component={TopPage}/>
                        <Route exact component={TopPage}/>
                    </Switch>
                </div>
            </div>
        </div>
      </Router>

      <footer className="App-footer">
      <div className="icons-container">
        <a href="https://soundcloud.com/unii" target="_blank"><img src={IconS} className="icons" alt="soudcloud" /></a>
        <a href="https://youtu.be/NFtOVFN3x8M" target="_blank"><img src={IconY} className="icons-y" alt="youtube" /></a>
        <a href="https://www.facebook.com/uniiuniiu" target="_blank"><img src={IconF} className="icons" alt="facebook" /></a>
        <a href="https://twitter.com/uniiuniiu" target="_blank"><img src={IconT} className="icons" alt="twitter" /></a>
        <a href="https://uniiu.tumblr.com/" target="_blank"><img src={IconTum} className="icons" alt="tumblr" /></a>
      </div>
      <AnchorLink href="#top" offset="50"><ButtonPageTop name="Top"/></AnchorLink></footer>
    </div>
  );
}

export default App;

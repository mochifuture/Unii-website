import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import './Menu.css';
import TopPage from "./Pages/TopPage";

// const topPage = () => <div><h1>Top Page</h1>ここがトップページです</div>
const page1 = () => <div><h1>page1</h1>1枚目のページです</div>
const page2 = () => <div><h1>page2</h1>2枚目のページです</div>
const page3 = () => <div><h1>page3</h1>3枚目のページです</div>

const Menu = () => {
    const liStyle = {
        display: 'inline',
        width: '100px'
    }

    return (
        <Router>
        <div className="Menu">
            <div className="App-menu">
                <ul style={{display: 'flex'}}>
                    <li style={liStyle}><Link to='/'>top</Link></li>
                    <li style={liStyle}><Link to='/page1'>page1</Link></li>
                    <li style={liStyle}><Link to='/page2'>page2</Link></li>
                    <li style={liStyle}><Link to='/page3'>page3</Link></li>
                </ul>

                <div>
                    <Switch>
                        <Route path='/' exact component={TopPage}/>
                        <Route path='/page1' exact component={page1}/>
                        <Route path='/page2' exact component={page2}/>
                        <Route path='/page3' exact component={page3}/>
                        <Route exact component={TopPage}/>
                    </Switch>
                </div>
            </div>
          </div>
        </Router>)
}

export default Menu

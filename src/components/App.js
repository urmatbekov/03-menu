import React from 'react';
import Header from './Header';
import Menu from './Menu';
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"

const App = () => {
    return (
        <div className="container border mt-5 rounded shadow">
            <Header/>
            <Menu/>
        </div>
    );
};

export default App;
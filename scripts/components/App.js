import React from 'react';

import TopBar from './TopBar';
import Footer from './Footer';

var App = React.createClass({
    render: function(){
        return (
            <div className='flexContainer'>
                <TopBar></TopBar>
                {this.props.children}
                <Footer></Footer>
            </div>
        );
    }
});

export default App;

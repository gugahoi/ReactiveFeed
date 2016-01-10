import React from 'react';
import { Link } from 'react-router';

var TopBar = React.createClass({
    getInitialState: function(){
        return {
            selected: '/',
            items: [
                {
                    name: 'Feed',
                    path: '/'
                },
                {
                    name: 'Welcome',
                    path: '/welcome'
                }
            ]
        };
    },
    navigate: function(item){
        this.setState({selected: item.path});
    },
    render: function() {
        var self = this;
        return (
            <ul className="TopBar">
                {
                    this.state.items.map(function(item){
                        let style = (self.state.selected === item.path) ? 'active' : '';

                        return (
                            <li key={item.path} className={style}>
                                <Link to={item.path} onClick={self.navigate.bind(self, item)}>
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
});

export default TopBar;

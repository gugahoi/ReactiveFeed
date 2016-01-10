import React from 'react';
import classNames from 'classnames';

var FeedItem = React.createClass({
    getInitialState: function(){
        return {
            read: false
        };
    },
    toggleRead: function(){
        this.setState({read: !this.state.read});
    },
    render: function() {
        var style = classNames({
            'box': true,
            'read': this.state.read
        });

        var btnReadText = (this.state.read) ? 'Unread' : 'Read';
        return (
            <div className={style}>
                <div className='user'>
                    {this.props.user}
                </div>
                <div className='description'>
                    {this.props.text}: {this.props.score}
                </div>
                <div className="toolbar">
                    <button onClick={this.toggleRead}>{btnReadText}</button>
                    <button onClick={this.props.deleteItem.bind(null, this.props.score)}>Remove</button>
                </div>
            </div>
        );
    }
});

export default FeedItem;

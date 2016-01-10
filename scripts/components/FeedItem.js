import React from 'react';

var FeedItem = React.createClass({
    getInitialState: function(){
        return {};
    },
    render: function() {
        return (
            <div className='box'>
                <div className='user'>
                    {this.props.user}
                </div>
                <div className='description'>
                    {this.props.text}: {this.props.score}
                </div>
            </div>
        );
    }
});

export default FeedItem;

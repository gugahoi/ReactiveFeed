import React from 'react';

import FeedForm from './FeedForm';
import FeedItem from './FeedItem';

var Feed = React.createClass({
    getInitialState: function(){
        return {
            items: [
                {
                    user: 'John Doe',
                    score: 5,
                    text: 'You received a score of'
                },
                {
                    user: 'Jane Johnson',
                    score: 3,
                    text: 'Look like something wasnt so good. You received a score of'
                },
                {
                    user: 'Bejanmin Button',
                    score: 8,
                    text: 'Congratulations! You received a score of'
                }
            ]
        };
    },
    render: function() {
        return (
            <div>
                <FeedForm></FeedForm>
                {
                    this.state.items.map(function(item){
                        return <FeedItem {...item} key={item.score}></FeedItem>;
                    })
                }
            </div>
        );
    }
});

export default Feed;

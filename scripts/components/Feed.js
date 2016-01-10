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
    deleteItem: function(itemScore){
        var items = this.state.items;
        items.forEach(function(item, index){
            if(item.score === itemScore){
                items.splice(index, 1);
            }
        });
        this.setState({items: items});
    },
    render: function() {
        var self = this;
        return (
            <div>
                <FeedForm></FeedForm>
                {
                    this.state.items.map(function(item){
                        return <FeedItem {...item} deleteItem={self.deleteItem} key={item.score}></FeedItem>;
                    })
                }
            </div>
        );
    }
});

export default Feed;

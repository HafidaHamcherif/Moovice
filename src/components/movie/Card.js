import React from 'react';

class Card extends React.Component{

    render () {
        const image = `https://image.tmdb.org/t/p/w300${this.props.poster_path}`;
        //console.log('card#1')
        return(
            <div>
                <img src={image} alt={`the movie${this.props.title}`}/>
                {this.props.title}
            </div>
        );
    }
}

export default Card;
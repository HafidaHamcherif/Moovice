import React from 'react';

class Button extends React.Component{
    render() {
        const src = `https://image.tmdb.org/t/p/w300${this.props.poster_path}`
        return(
            <div>
                <button onClick={()=>{
                }}>
                    <img src={src} alt={`battlemovie${this.props.title}`}/>
                </button>
                <button>
                    <h2>{this.props.title}</h2>
                </button>
            </div>
        );
    }

}

export default Button;
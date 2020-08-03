import React from 'react';
import Card from './movie/Card';

class Popular extends React.Component{
    constructor(props){
        super(props);
        this.state={
            movies:[]
        }
    }

    componentDidMount(){
        console.log('#Popular#1');
        const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0a76daf23247d525e6ad048ef114069d';
        console.log('#Popular#1/const/url',url);
        console.log('#Popular#1/befor/const/url');
       
        fetch(url)
            .then(res => res.json())
            .then(json => {
                console.log('#Popular#2');
                console.log('url#api#popular#cdm json', json);
                console.log('#Popular#2/befor/console/json');
                const movies = json.results;
                console.log('movies',movies);
                this.setState({
                    movies
                });
            }); 
        console.log('#Popular#3');
    }
    
    render () {
        return(
            <div>
                Popular
                {this.state.movies.map((movie)=>{
                    return(
                        <Card
                        title={movie.title}/>
                    )
                })}
            </div>
        );
    }
}

export default Popular;
import React from 'react';
import Button from './movie/Button';



class Popularbattle extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentPage:1,
            battle:[]
        }
    }
    componentDidMount(){
        console.log("Popularbattle#1");
        const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0a76daf23247d525e6ad048ef114069d';
        console.log("Popularbattle/befor/url#1",url);

        fetch(url)
            .then(res=>res.json())
            .then(json => {
                console.log('popularbattle/fetch/json#2',json)
                const battle = json.results
                console.log('popularbattle/json.results#2',battle)
                this.setState({
                    battle
                })
            });
    }


    render () {
        console.log('popularbattle/render/state',this.state)
        return(
            <div>
                Popularbattle
                {this.state.battle.map((battle)=>{
                    return(
                        <Button
                        key={battle.id}
                        title={battle.title}
                        poster_path={battle.poster_path}
                        />
                    )
                })}
            </div>
        );
    }
}

export default Popularbattle;
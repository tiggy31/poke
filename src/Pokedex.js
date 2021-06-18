import React, { Component } from 'react'
import Pokecard from './Pokecard'

class Pokedex extends Component {

    static defaultProps = {
        pokemon : [
            {id:3,name: "tiggy", type: 'fire', base_experience: 20},
            {id:2,name: "nesti", type: 'water', base_experience: 33},
            {id:1,name: "tuna", type: 'earth', base_experience: 80},
            {id:0,name: "jele", type: 'seed', base_experience: 46},
            {id:2,name: "i", type: 'water', base_experience: 53},
            {id:1,name: "geeei", type: 'air', base_experience: 40},
            {id:0,name: "nui", type: 'water', base_experience: 16},
            {id:0,name: "rrti", type: 'fire', base_experience: 6}

        ]
    }
    render(){

        return(
            <div>
             <p>Total experience: {this.props.exp}</p>
             <p>{this.props.isWinner? 'Winner' : 'Loser'}</p>
                <h1>Pokedex</h1>
                {
                    this.props.pokemon.map((p) => (
                        <Pokecard 
                            id = {p.id}
                            name={p.name}
                            type= {p.type}
                            exp = {p.base_experience}/>
                    ))}
            </div>
        )
    }
         
}

export default Pokedex
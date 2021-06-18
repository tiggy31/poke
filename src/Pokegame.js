import React, { Component } from 'react'
import Pokedex from './Pokedex'

class Pokegame extends Component{
    static defaultProps = {
        pokemon : [
            {id:3,name: "tiggy", type: 'fire', base_experience: 20},
            {id:9,name: "nesti", type: 'water', base_experience: 33},
            {id:1,name: "tuna", type: 'earth', base_experience: 80},
            {id:8,name: "jele", type: 'seed', base_experience: 46},
            {id:25,name: "i", type: 'water', base_experience: 53},
            {id:39,name: "geeei", type: 'air', base_experience: 40},
            {id:94,name: "nui", type: 'water', base_experience: 16},
            {id:133,name: "rrti", type: 'fire', base_experience: 6}

        ]
    }
   render(){
    let hand1 = []
    let hand2 = [...this.props.pokemon]

    while( hand1.length < hand2.length){
        let randIdx = Math.floor(Math.random() * hand2.length)
        let randPokemon = hand2.splice(randIdx,1) [0]
                          hand1.push(randPokemon)
    
    }


    let exp1 = hand1.reduce((exp,poke) => exp + poke.base_experience, 0 ) 
    let exp2 = hand2.reduce((exp,poke) => exp + poke.base_experience, 0 ) 
  
    console.log("hand1", hand1)
    console.log("hand2", hand2)


        return (
                <div>
    
                    <Pokedex  hand1= {hand1} exp = {exp1}  isWinner = {exp1 >exp2}/>
                     <Pokedex  hand2= {hand2} exp = {exp2} isWinner = {exp1 <exp2}/>
                    </div>
    )
 

   } 
}

export default Pokegame
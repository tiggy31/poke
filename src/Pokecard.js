import React, {Component} from 'react'

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

class Pokecard extends Component {
    render() {

     let imgsrc = `${POKE_API }${this.props.id}.png`
        return(
           <div>
               <h1>{this.props.name}</h1>
               <br />
               {this.props.type}
               <img src={imgsrc} alt = {this.props.name}/>
               <div>Type: {this.props.type}</div>
               </div>
        )
    }
}

export default Pokecard
import { useEffect, useState } from "react";
import axios from "axios";

function  AllPokemon(){//begin Func

    const [pokemon, setPokemon] = useState([]);

    useEffect(()=> {//usee
        let getPokemon = async () => {//let getp
            try {//try
                const data = await axios.get('https://pokeapi.co/api/v2/pokemon');
                setPokemon(data.results);
                return data.results;
                } //try
                catch (err) { //catch
                  console.error(err);
                }//catch
        }//let getp
        
        getPokemon()

    },[]);//usee

    return(
        <>
        <h1>Pokemon</h1>
        <ul>
            {pokemon.map((poke) => 
                {
                return (
                        <ol>
                            <h2>{poke.name}</h2>
                        </ol>
                        );
                })}
        </ul>
        </>
    );
 }//end Func

export default AllPokemon;
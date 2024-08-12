import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AllPokemon.css';

function AllPokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    let getPokemon = async () => {
      try {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon');
        setPokemon(data.results);
        setNextPage(data.next); //Pagination
        return data.results;
      } catch (err) {
        console.error(err);
      }
    };

    getPokemon();
  }, []);

  let loadMorePokemon = async () => {
    try {
      let { data } = await axios.get(nextPage);
      setPokemon((prevList) => [...prevList, ...data.results]);
      setNextPage(data.next);
    } catch (err) {
      console.error(err);
      console.log('Error loading more pokemon ', err);
    }
  };

  return (
    <>
      
      <div className='container bg-info'>
      <h1 className='text-center' >Pokemon!</h1>
        <div className='row border p-5 text-info' >
          {pokemon.map((poke) => {
            const pokemonId = poke.url.split('/')[6];
            const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
            return (
              <div key={poke.name} className='card col-md-2 mb-4 mx-3'>
                <Link to={`/pokemon/${pokemonId}`}>
                  <img
                    src={imageUrl}
                    alt={poke.name}
                    className='card-img-top img-fluid'
                  />
                  <hr/>
                  <div className='card-body'>
                    <h3 className='card-title text-center fs-5'>{poke.name}</h3>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <p className='text-center'>
        <button onClick={() => loadMorePokemon()} >Load More Pokemon</button>
        </p>
      </div>
      
    </>
  );
}

export default AllPokemon;
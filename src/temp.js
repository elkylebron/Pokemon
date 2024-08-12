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
console.log('new list of pokemon', [...pokemon, ...data.results]);
_____________
<link rel="icon" href="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" /> instead of  <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
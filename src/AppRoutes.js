import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';//imports the necessary components for setting up routing in a React application using the React Router library
import AllPokemon from './AllPokemon';
import SinglePokemon from './SinglePokemon';

function AppRoutes() {//a functional component that serves as the main entry point of the application.
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AllPokemon />} />
        <Route path='/pokemon/:id' element={<SinglePokemon />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;

/*<Router>This enables routing functionality for handling different URLs within the application.
Within the Router component, there is a Routes component that acts as a container for defining the different routes in the application.
path of '/' which corresponds to the root URL of the application. It renders the AllPokemon component when the URL matches.
The second Route component has a path of '/pokemon/:id' which corresponds to a dynamic route where :id is a parameter that can be accessed in the SinglePokemon component. It renders the SinglePokemon component when the URL matches
The element prop in each Route component specifies the component to render when the URL matches the defined path.*/
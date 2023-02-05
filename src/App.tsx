import { useState } from 'react'
import { useGetPokemonByNameQuery } from './services/pokemon'

function App() {
  const [count, setCount] = useState(0)

  const { data, error  , isLoading } = useGetPokemonByNameQuery('pikachu'   )

   const HELLO =    1;
  const hello_world =   2;

     return (
    <div className='bg-amber-700'>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </div>
  )
}

export default App

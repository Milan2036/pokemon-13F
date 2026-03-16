import { useEffect, useState, type ChangeEvent} from "react"
import { getPokemonData, getPokemons, type ResultType } from "./services/pokeapi"
import type { PokemonType } from "./components/PokemonCard"
import PokemonCard from "./components/PokemonCard"

const App = () => {
  const [pokemons, setPokemons] = useState<ResultType[]>()
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonType>()

  useEffect(()=>{
    getPokemons(100,0)
    .then(response => {
      setPokemons(response)
    })
  },[])

  useEffect(() => {
    if(pokemons != undefined && selectedPokemon == undefined){
      getPokemonData(pokemons[0].url).then(response => setSelectedPokemon(response))
    }})

  if(pokemons == undefined)
    return <div>Loading...</div>

  const selectionChanged = (e: ChangeEvent) => {
  e.preventDefault()
  const option = e.currentTarget as HTMLOptionElement
  getPokemonData(option.value).then(response => setSelectedPokemon(response))
  }

  return (
    <div>
      <select onChange={selectionChanged}>
        {pokemons.map(pokemon => <option value={pokemon.url}>{pokemon.name}</option>)}
      </select>
      {selectedPokemon && <PokemonCard {...selectedPokemon}/>}
    </div>
  )
}

export default App
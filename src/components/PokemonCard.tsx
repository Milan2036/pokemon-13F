export type PokemonType = {
    name: string,
    sprites: {
        front_default: string
    },
    types: {
        type: {name: string}
    }[]
}

const PokemonCard = ({name,sprites,types} : PokemonType) => {
  return (
    <div>
        <h2>{name}</h2>
        <img src={sprites.front_default}/>

        {types.map(poktype => <button style={{
            background: `var(--${poktype.type.name}-type)`
        }}>
            {poktype.type.name}
        </button>)}
    </div>
  )
}

export default PokemonCard
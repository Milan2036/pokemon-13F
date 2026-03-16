import type { PokemonType } from "../components/PokemonCard"

export type ResultType = {
    name: string,
    url: string
}

type responseType = {
    results: ResultType[]
}

export async function getPokemons(limit: number, offset: number) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    const data = await response.json()
    return data.results
}

export async function getPokemonData(url: string) {
    const response = await fetch(url)
    const data: PokemonType = await response.json()
    return data
}
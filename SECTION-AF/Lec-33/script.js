let pokemonList = document.getElementById("list")
let inputBox = document.getElementById("inp")
let searchBtn = document.getElementById("btn")
let pokemons = [];
searchBtn.addEventListener("click", searchPokemon)

async function getAllPokemon(){
    let response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=1&limit=100")
    let pokemonData = await response.json();
    pokemons = pokemonData.results;

    pokemons.map((p)=>{
        let pname = document.createElement("h3")
        pname.innerText = p.name;
        pokemonList.appendChild(pname);
        return;
    })
}

getAllPokemon();


async function searchPokemon(){
     let pokemonName = inputBox.value;
     let result = pokemons.find((p)=>{
        return p.name === pokemonName;
     })

     console.log(result);
}
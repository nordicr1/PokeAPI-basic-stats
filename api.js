document.querySelector('#search').addEventListener('click', getPokemon);

function lowerCase(string) {
    return string.toLowerCase()
}

function getPokemon(e) {

    e.preventDefault()

    const name = document.querySelector('#pokemonName').value
    const pokemonName = lowerCase(name)
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => response.json())
        .then((data) => {
            document.querySelector('.pokemonBox').innerHTML = `
            <div>
                <img 
                src="${data.sprites.other['official-artwork'].front_default}" 
                alt="${data.name}" 
                />
            </div>
            <div class="pokemonInfo">
                <h1>Nome: ${data.name}</h1>
                <p>Número de classificação: ${data.id}</p>
                
            </div>
            `
        })
        .catch((err) => {
            console.log('Pokemon não localizado', err);
        });

        
}












let num = 151;

const colors={
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#d6b3ff',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
    ice: '#e0f5ff',
};

async function callAPI(){
    for(var i = 1; i <= num; i++){
        var res = await fetch("https://pokeapi.co/api/v2/pokemon/" + i)
        var data = await res.json();

        var pokeID = data['id']
        var pokeNAME = data['name']
        var pokeTYPE = data['types'][0]['type']['name']
        var pokeImageUrl = data['sprites']['front_default']
        var color = colors[pokeTYPE];

        var div = document.createElement('div');
        div.id = i;
        div.className = 'box';
        div.style.backgroundColor = `${color}`;

        var id = document.createElement('p');
        id.innerHTML = pokeID;
        div.appendChild(id);

        var name = document.createElement('h3');
        name.innerHTML = pokeNAME;
        div.appendChild(name);

        var img = document.createElement('img');
        img.src = pokeImageUrl;
        div.appendChild(img);

        var type = document.createElement('p');
        type.innerHTML = pokeTYPE;
        div.appendChild(type);

        document.getElementById('poke').appendChild(div);
    }
}

callAPI();
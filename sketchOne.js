let pokeData;
let pokeImg;
let pokeList = [];
//starts dataCount at one or i get confused with the url
let dataCount = 1;

function preload() {
  for (let i = 1; i < 500; i++) {
    let link = "https://pokeapi.co/api/v2/pokemon/" + i;
    loadJSON(link, gotData);
  }
}
function setup() {
  createCanvas(600, 600);
}

function gotData(data) {
  pokeData = data;
  let hp = pokeData.stats[0].base_stat;
  let atk = pokeData.stats[1].base_stat;
  let def = pokeData.stats[2].base_stat;
  let spatk = pokeData.stats[3].base_stat;
  let spdef = pokeData.stats[4].base_stat;
  let spd = pokeData.stats[5].base_stat;
  let frontSprite = pokeData.sprites.front_default;
  let backSprite = pokeData.sprites.back_default;
  pokeList[dataCount] = new pokemon(hp, atk, def, spatk, spdef, spd, frontSprite, backSprite);
  dataCount += 1;
  
}

function draw() {
  //draws battle
  background('#B5FFE4');
  noStroke();
  fill('#E1C7AA');
  ellipse(450, 145, 230, 80);
  fill('#3DE87B');
  ellipse(450, 145, 210, 60);
  pokeList[100].drawEnemy();
  pokeList[2].active = true;
  fill('#E1C7AA');
  ellipse(150, 360, 230, 80);
  fill('#3DE87B');
  ellipse(150, 360, 210, 60);
  pokeList[2].drawActive();
}

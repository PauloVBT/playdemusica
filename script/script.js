//variaveis
let musicas = [
    {titulo:'liberto', artista:'Paulo Victor',src:'music/Liberto.m4a', img:'img/paulo.jpg'},
    {titulo:'Thats the one', artista:'Ryan', src:'music/Thats the One.mp3', img:'img/regae.jpg'}
];

let indexmusica = 0;

let musica = document.querySelector('audio');

let play = document.querySelector('.botão-play');

let pause = document.querySelector(".botão-pause");

let barra = document.querySelector('progress');

let tempo = document.querySelector('.inicio');

let duração = document.querySelector('.fim');

let imagem = document.querySelector('img');

let nomemusica = document.querySelector('.descrição h2');

let nomeartista = document.querySelector('.descrição i');

let anterior = document.querySelector('.anterior');

let proximo = document.querySelector('.proximo');

//eventos
rederizarmusica(indexmusica);

play.addEventListener('click', tocarmusica);

pause.addEventListener('click', pausamusica);

musica.addEventListener('timeupdate', atualizarbarra);

anterior.addEventListener('click', () => {
    indexmusica--;
    if(indexmusica < 0) {
        indexmusica = 2
    };
    rederizarmusica(indexmusica);
});

proximo.addEventListener('click', () => {
    indexmusica++;
    if(indexmusica > 2){
        indexmusica = 0
    };
    rederizarmusica(indexmusica);
});

//funções
function rederizarmusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomemusica.textContent = musicas[index].titulo;
        nomeartista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duração.textContent = segundosminutos(Math.floor(musica.duration));
    });
}

function tocarmusica(){
    musica.play();
    pause.style.display = 'block';
    play.style.display = 'none';
}

function pausamusica(){
    musica.pause();
    pause.style.display = 'none';
    play.style.display = 'block';
}

function atualizarbarra(){
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    tempo.textContent = segundosminutos(Math.floor(musica.currentTime));
}

function segundosminutos(segundos){
   let campominutos = Math.floor(segundos / 60)
   let camposegundos = segundos % 60;
   if(camposegundos < 10){
    camposegundos = '0' + camposegundos;
   }

   return campominutos+':'+camposegundos;
}






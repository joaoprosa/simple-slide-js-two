let arrayObj = [ 
    {
        img:'./assets/galaxia.jpg',
        titulo: 'GALAXIA',
        paragrafo: 'Uma galáxia é um grande sistema, gravitacionalmente...',
    },
    {
        img:'./assets/lua.jpg',
        titulo: 'LUA',
        paragrafo: 'A Lua é o único satélite natural da Terra e o quinto maior do Sistema Solar',
    },
    {
        img:'./assets/sol.jpeg',
        titulo: 'SOL',
        paragrafo: 'O Sol é a estrela central do Sistema Solar. ',
    }
]

let img = document.querySelector('.img')
let title = document.querySelector('h1')
let paragraph = document.querySelector('p')
let contador = 0;

function next(){
    if (contador < 2){
        contador++
        img.setAttribute('src', arrayObj[contador].img)
        title.innerHTML = arrayObj[contador].titulo
        paragraph.innerHTML = arrayObj[contador].paragrafo
    }
    else{
        contador = 0
        img.setAttribute('src', arrayObj[contador].img)
        title.innerHTML = arrayObj[contador].titulo
        paragraph.innerHTML = arrayObj[contador].paragrafo
    }
}
function back(){
    if (contador > 0){
        contador--  
        img.setAttribute('src', arrayObj[contador].img)
        title.innerHTML = arrayObj[contador].titulo
        paragraph.innerHTML = arrayObj[contador].paragrafo
    }
    else{
        contador = 2
        img.setAttribute('src', arrayObj[contador].img)
        title.innerHTML = arrayObj[contador].titulo
        paragraph.innerHTML = arrayObj[contador].paragrafo
    }
}
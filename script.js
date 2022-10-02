const paletas = document.querySelectorAll('.principal')
//Responsavel por colocar cores de maneira aleatoria na paleta e tambem por adicionar os nomes delas em Hexadecimal 
function paletaPrincipal(){
        //percorre todas os blocos da paleta
        paletas.forEach((bloco, index)=>{
                let rgbMed=0, rgb = ""
                for(let i = 0; i<3; i++){
                        //Com o for, irá chamar aleatoriamente três valores para o RGB
                        let numAleatorio = Math.ceil(Math.random()*(254))
                        rgbMed += numAleatorio
                        //transforma o valor em Hexadecimal
                        let numHex = numAleatorio.toString(16)
                        if(numHex.length == 1){
                                numHex = "0"+numHex
                            }
                            //Vai juntando os valores
                            rgb += numHex
        }
        //Cria um texto para adicionar o nome da cor no bloco
                bloco.innerHTML = `
        <p class="textCor" >#${rgb.toUpperCase()}</p>
        `
        const textoPaletas = document.querySelectorAll(".textCor")
        if(rgbMed/3 >= 100){
            textoPaletas[index].style.color = "#343a40"
        }
        else{
            textoPaletas[index].style.color = "#f1faee"
        }
        //adiciona a cor no bloco
        bloco.style.backgroundColor = `#${rgb}`
    })
}

paletaPrincipal()

palTonsVerde = document.querySelectorAll(".tonVerde")

function tonsGreen(){

    //a tonalidade green deve ser maior em torno de 60% do red e do blue
    palTonsVerde.forEach((bloco, index)=>{
        let rgbMed=0, rgb = [3]
        //Irá chamar aleatoriamente o primeiro valor 
        let numGreen = Math.ceil(Math.random()*(234)+20)git i
        rgbMed += numGreen
        let numHex = numGreen.toString(16)
        rgb[0] = numHex
        //Com o for, irá chamar aleatoriamente dois valores para o RGB
        for(let i = 1; i<3; i++){
            let numAleatorio = Math.ceil(Math.random()*(numGreen*0.6))
            rgbMed += numAleatorio
            //transforma o valor em Hexadecimal
            let numHex = numAleatorio.toString(16)
            if(numHex.length == 1){
                    numHex = "0"+numHex
                }
                //Vai juntando os valores
                rgb[i]= numHex
            }
            textHexStr = rgb[1]+rgb[0]+rgb[2]
//Cria um texto para adicionar o nome da cor no bloco
        bloco.innerHTML = `
<p class="textCor textGreen" >#${textHexStr.toUpperCase()}</p>
`
const textoPaletas = document.querySelectorAll(".textGreen")
if(rgbMed/3 >= 100){
    textoPaletas[index].style.color = "#343a40"
}
else{
    textoPaletas[index].style.color = "#f1faee"
}
//adiciona a cor no bloco
bloco.style.backgroundColor = `#${textHexStr}`
})
}

tonsGreen()

// ================================================================================================

//Switch que ao ser acionado muda a cor a cada 4s
const switchBotao = document.querySelector(".switch")

var mudaPaletaAuto

switchBotao.addEventListener("click", ()=>{
    if(switchBotao.checked){
        mudaPaletaAuto = setInterval(paletaPrincipal, 4000)       
    }
    else{
        clearInterval(mudaPaletaAuto)
    }
})

const switchTonVerde = document.querySelector(".swiVerde")

var mudaPaletaVerAuto

switchTonVerde.addEventListener("click", ()=>{
    if(switchTonVerde.checked){
        mudaPaletaAuto = setInterval(tonsGreen, 4000)       
    }
    else{
        clearInterval(mudaPaletaAuto)
    }
})

// ================================================================================================

//Responsavel pelo surgimentoo do nome da cor em Hexadecimal e tambem por alongar o bloco da cor

//percorre todas os blocos da paleta
paletas.forEach((textHex, index)=>{
    //Evento para saber quando o mouse esta em cima de um bloco
    textHex.addEventListener("mouseover", ()=>{
        //Precisa pegar a tag da letra dentro do evento para poder atualizar, pois o texo é criado dinamicamente 
        const textoPaletas = document.querySelectorAll(".textCor")
        textHex.style.width = '35%'
        textoPaletas[index].style.opacity = "1"
    })
    //Evento para saber quando o mouse não esta em cima de um bloco
    textHex.addEventListener("mouseout", ()=>{
        const textoPaletas = document.querySelectorAll(".textCor")
        textHex.style.width = '25%'
        textoPaletas[index].style.opacity = "0"
    })
})

//percorre todas os blocos da paleta
palTonsVerde.forEach((textHex, index)=>{
    //Evento para saber quando o mouse esta em cima de um bloco
    textHex.addEventListener("mouseover", ()=>{
        //Precisa pegar a tag da letra dentro do evento para poder atualizar, pois o texo é criado dinamicamente 
        const textoPaletas = document.querySelectorAll(".textGreen")
        textHex.style.width = '35%'
        textoPaletas[index].style.opacity = "1"
    })
    //Evento para saber quando o mouse não esta em cima de um bloco
    textHex.addEventListener("mouseout", ()=>{
        const textoPaletas = document.querySelectorAll(".textGreen")
        textHex.style.width = '25%'
        textoPaletas[index].style.opacity = "0"
    })
})

// ================================================================================================

//Responsavel por passar o nome da cor para a área de transferência
paletas.forEach(valHex=>{
    valHex.addEventListener("click", ()=>{
        let corHex = valHex.innerText
        navigator.clipboard.writeText(corHex)
    })
})

palTonsVerde.forEach(valHex=>{
    valHex.addEventListener("click", ()=>{
        let corHex = valHex.innerText
        navigator.clipboard.writeText(corHex)
    })
})








// ===============================================================================================

// Código Antigo responsavel pela cor Aleatoria na paleta central

// //Responsavel por colocar cores de maneira aleatoria na paleta
// function paletaPrincipal(){
//     //percorre todas os blocos da paleta
//     paletas.forEach(bloco=>{
//         let rgb = new Array(3)
//         for(let i = 0; i<3; i++){
//             //Com o for, irá chamar aleatoriamente três valores para o RGB
//             let numAleatorio = Math.ceil(Math.random()*(254))
//             rgb[i] = numAleatorio
//         }
//         bloco.style.backgroundColor = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
//     })
// }

// Codigo Antigo do texto Hexadecimal

// //Responsavel pelo aparecimento do nome da cor em Hexadecimal
// const textoPaletas = document.querySelectorAll(".textCor")

// paletas.forEach(textHex=>{
//     textHex.addEventListener("mouseover", ()=>{
//         textHex.style.width = '35%'
//         //pega a cor do background em rgb e em uma string
//         let rgbcor = textHex.style.backgroundColor
//         //tira o "rgb()", deixando apenas o conteudo dos valores
//         rgbcor = rgbcor.substring(4,rgbcor.length-1)
//         //divide os valores em um array
//         let rgbSep = rgbcor.split(",")
//         let rgbHex = ''
//         for(let i = 0; i<3; i++){
//             rgbSep[i] = parseInt(rgbSep[i],10)
//             rgbSep[i] = rgbSep[i].toString(16)
//             if(rgbSep[i].length == 1){
//                 rgbSep[i] ="0"+rgbSep[i]
//             }
//             rgbHex += rgbSep[i]
//         }
//         textHex.innerHTML = `
//         <p class="textCor" >#${rgbHex.toUpperCase()}</p>
//         `
//     })
//     textHex.addEventListener("mouseout", ()=>{
//         textHex.innerHTML = ``
//         textHex.style.width = '25%'
//     })
// })




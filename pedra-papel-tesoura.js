
const parImpar = process.argv[2]

const numero = process.argv[3]



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  const numeroAleatorioEntreZeroeDez = getRndInteger(0, 10)
console.log(`O numero escolhido pelo PC foi ${numeroAleatorioEntreZeroeDez}`)

const soma = (Number(numero) + Number(numeroAleatorioEntreZeroeDez))
console.log(soma)


if(!parImpar||!numero){
    console.log("Digite os argumentos corretamente")
} else if(soma%2===0 && parImpar==="par"){
    console.log("O resultado da soma foi par. Você venceu")
}else if(soma%2===0&&parImpar.toLowerCase()==="par"){
    console.log("O resultado da soma foi par. Você venceu")
} else if (soma%2!=0&&parImpar.toLowerCase()==="impar"){
    console.log("O resultado da soma foi impar. Você venceu")
} else if (soma%2!=0&&parImpar.toLowerCase()==="par"){
    console.log("O resultado da soma foi impar. Você perdeu.")
} else if (soma%2===0&&parImpar.toLowerCase()==="impar"){
    console.log("O resultado da soma foi par. Você perdeu")
}
    


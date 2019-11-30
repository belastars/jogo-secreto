function jogo(numeroGerado, resposta){

if(numeroGerado == resposta){
  return {
    acertou: true
  }
}else if(numeroGerado < resposta) {
  return {
    mensagemErro: "Digite um número menor!"
  }
}else{
  return {
  mensagemErro: "Digite um número maior!"
}
}
}
module.exports =  jogo

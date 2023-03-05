//  \u{codigo do emoji} => emoji 
   

function contar(){
  const inicio = Number(document.getElementById('inicio').value) 
  const fim = Number(document.getElementById('fim').value)
  const passo = Number(document.querySelector('input#passo').value)
  const resposta = document.querySelectorAll('div#resposta>p')[0]
  let contando = ""
   
  if (passo<1) {
    //alert(`ERRO `)
    resposta.innerText = `\u{1F610} impossivel contar`;
  }else if (fim < inicio){
    //contagem regressiva
    for (let i = inicio; i >= fim; i -= passo){
      contando += `👉${i}`
      resposta.innerText = `\u{1F603} ${contando} 🏁`;
    }
  }else{
    //contagem cresente
    for (let i = inicio; i <= fim; i += passo) {
      contando+=`👉 ${i}`
      resposta.innerText = `\u{1F603} ${contando} 🏁`
    }
  }
}
function calcular(tipo, valor) {
  if (tipo === "acao") {
    if (valor == "c") {
      document.querySelector("#resultado").value = "";
    }
    if (valor === '+' || valor === '-' || valor === '*' || valor === '/') {
      var conteudo = document.getElementById('resultado').value
      if (conteudo.includes('+') || conteudo.includes('-') || conteudo.includes('*') || conteudo.includes('/')) {
        return document.getElementById('resultado').value
      } else {
        document.getElementById('resultado').value += valor
      }
    }
    if (valor === '.') {
      var conteudo = document.getElementById('resultado').value
      conteudo.includes('.') ? document.getElementById('resultado').value : document.getElementById('resultado').value += valor
    }
    if (valor === "=") {
      var valor_campo = eval(document.querySelector("#resultado").value);
      document.querySelector("#resultado").value = valor_campo;
    }
  }
  if (tipo === "valor") {
    document.querySelector("#resultado").value += valor;
  }
  

 
}

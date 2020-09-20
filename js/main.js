//API key
var apiKey = {
  // Necessário tem uma conta de desenvolvedor no 'https://pro.coinmarketcap.com/account/'
  key: "valor da chave aqui!!!",
};

// Realizando a requisição com o 'fetch'...
// NOTA: (Nessa api em específico será necessário instalar a extensão 'Moesif Origin & CORS Changer').
fetch(
  `https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=${apiKey.key}`
)
  .then((response) => {
    if (!response.ok) {
      // Caso a requisição falhe...
      throw new Error(
        `Erro ao executar a requisição. STATUS: ${response.status}`
      );
    }
    return response.json();
  })
  .then((api) => {
    var texto = "";

    //Percorrerá pelo dicionário de dados provido pela API e exibirá 10 moedas e seus respectivos símbolos.
    for (let i = 0; i < 10; i++) {
      console.log(api.data[i]); // Imprime no console do browser...

      // Criará em forma de String um código html para um div contendo cada uma ds 10 moedas.
      texto += `
        <div class="media">
          <img src="./img/coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="60">
          <div class="media-body">
            <h5 class="mt-2">${api.data[i].name}</h5>
            <p>${api.data[i].symbol}</p>
          </div>
        </div>

      `;
    }

    // Obtém o elemento principal da página e adiciona ao seu conteúdo a div acima...
    document.getElementById("coins").innerHTML = texto;
  })
  .catch((error) => {
    console.error(error.message);
  });

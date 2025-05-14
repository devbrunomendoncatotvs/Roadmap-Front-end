//1-Métodos HTTP

//1.1-Método GET
const getDataPost = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Erro ao tentar fazer a requisição:", error);
    });
};

//1.2-Método POST
const postDataPost = () => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
  })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Erro ao tentar fazer a requisição:", error);
    });
};

//1.3-Método PUT
const putDataPost = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: 1,
      title: "foo",
      body: "bar",
      userId: 1,
    }),
  })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Erro ao tentar fazer a requisição:", error);
    });
};

//1.4-Método DELETE
const deleteDataPost = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Erro ao tentar fazer a requisição:", error);
    });
};

//2-Requisição Fetch com Async/Await
async function getDataWithAsyncAwait() {
  try {
    const resposta = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.error("Erro ao buscar dados:", erro);
  }
}

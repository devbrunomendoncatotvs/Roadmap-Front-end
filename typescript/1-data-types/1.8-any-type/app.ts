// 1-Tipo Any
const a: any = 27;
const b: any = ["Bruno"];

const result = a + b;
console.log(result);

// 2-Quando o tipo 'any' él inferido implícitamente
/*let frase;
frase = 'Oi, pessoal! Tudo bem?';

console.log(frase);*/

// 3-Quando devemos usar o tipo any?

const form: { [inputForm: string]: any } = {
  name: "Bruno",
  lastName: "Mendonça",
  age: 27,
};

console.log(form);

// ==> Exemplo 01 -> Exemplo básico do uso do Type Object
const personProps = {
  name: "Bruno",
  surName: "Mendonça",
  age: 27,
  function: "Front-end Developer",
};
console.log(personProps);

// ==> Exemplo 02 -> object como parâmetros de função (eles podem ser anônimos)
function onboarding01(employee: { name: string }) {
  return "Seja bem-vinda " + employee.name;
}
console.log(onboarding01({ name: "Bruno Mendonça" }));

// ==> Exemplo 03 -> object nomeados
interface PersonOne {
  name: string;
  function: string;
}

function onboarding02(personProps: PersonOne) {
  return (
    "Seja bem-vinda " +
    personProps.name +
    "!" +
    " Sua função aqui na empresa será " +
    personProps.function +
    "."
  );
}
console.log(
  onboarding02({ name: "Bruno Mendonça", function: "Front-end Developer" })
);

// ==> Exemplo 04 -> object como type alias
type PersonTwo = {
  name: string;
  function: string;
  language: string;
};

function onboarding03(personProps: PersonTwo) {
  return (
    "Seja bem-vinda " +
    personProps.name +
    "!" +
    " Sua função aqui na empresa será " +
    personProps.function +
    "." +
    " Você trabalhará com a linguagem " +
    personProps.language +
    "."
  );
}

console.log(
  onboarding03({
    name: "Bruno Mendonça",
    function: "Front-end Developer",
    language: "JavaScript/Typescript",
  })
);

// ==> Exemplo 05 -> usando optional no object
interface PersonThree {
  name: string;
  function: string;
  language: string;
  email?: string;
}

function onboarding04(personProps: PersonThree) {
  return (
    "Seja bem-vinda " +
    personProps.name +
    "!" +
    " Sua função aqui na empresa será " +
    personProps.function +
    "." +
    " Você trabalhará com a linguagem " +
    personProps.language +
    "."
  );
}

console.log(
  onboarding04({
    name: "Bruno Mendonça",
    function: "Front-end Developer",
    language: "JavaScript/Typescript",
  })
);

// ==> Exemplo 06 -> Propriedade 'readonly' (se deseja proibir que os devs não modifiquem um determinado objeto use o '
//readonly)
interface PersonFour {
  name: string;
  function: string;
  language: string;
  readonly email: string;
}

function onboarding05(personProps: PersonFour) {
  return (
    "Seja bem-vinda " +
    personProps.name +
    "!" +
    " Sua função aqui na empresa será " +
    personProps.function +
    "." +
    " Você trabalhará com a linguagem " +
    personProps.language +
    "." +
    " Seu e-mail será " +
    personProps.email
  );
}

console.log(
  onboarding05({
    name: "Bruno Mendonça",
    function: "Full-stack Developer",
    language: "JavaScript/Typescript",
    email: "brunomendonca.com",
  })
);

// ==> Exemplo 07 -> tipos de extensões (heranças)
interface Mother {
  name: string;
}

interface Father {
  surname: string;
}

interface Son extends Mother, Father {
  age: number;
}

const son: Son = {
  name: "Bruno",
  surname: "Mendonça",
  age: 27,
};
console.log(son);

// ==> Exemplo 08 -> Tipos de Interseções
interface Dog {
  type: string;
}

interface Lion {
  type: string;
}

type Animal = Dog & Lion;

// Exemplo 09 - Generic Objects
type User = {
  name: string;
  email: string;
};

type Admin = {
  name: string;
  email: string;
  admin: true;
};

const user: User = {
  name: "Bruno Mendonça",
  email: "user@gmail.com",
};

const admin: Admin = {
  name: "Bruno Mendonça",
  email: "admin@gmail.com",
  admin: true,
};

function accessSistem<T>(user: T): T {
  return user;
}
console.log(accessSistem<User>(user));
console.log(accessSistem<Admin>(admin));

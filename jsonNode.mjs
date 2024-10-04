//Exercici 2
import fs from "fs";

const data = fs.readFileSync("cotxes.json", "utf8");

const cotxes = JSON.parse(data);

const Cotxenou = [
  {
    matricula: "1997-jjL",
    anyMatriculacio: 2010,
    combustible: "diesel",
    canviManual: true,
    cv: 140,
    companyia: { marca: "bmw", model: "x5" },
    kilometres: 30000,
  },

  {
    matricula: "2024-eeL",
    anyMatriculacio: 2024,
    combustible: "gasolina",
    canviManual: true,
    cv: 140,
    companyia: { marca: "saab", model: "9-3" },
    kilometres: 70000,
  },
];

cotxes.push(Cotxenou);

fs.writeFileSync("cotxes.json", JSON.stringify(cotxes, null, 2));

//Exercici 3

function ordenarCotxes(cotxes) {
  return cotxes
    .filter((cotxe) => cotxe.anyMatriculacio > 2010)
    .map((cotxe) => ({
      matricula: cotxe.matricula,
      anyMatriculacio: cotxe.anyMatriculacio,
    }));
}
//console.log(ordenarCotxes(cotxes));

//Exercici 4
function copiaarrayjavascript(array) {
  let array2 = [];
  for (const element of array) {
    array2.push(element);
  }
  return array2;
}

//console.log(copiaarrayjavascript(cotxes));

//Exercici 5

function exercici5(array) {
  const Mmodels = {};

  for (const cotxe of array) {
    if (cotxe && cotxe.companyia) {
      const { marca, model } = cotxe.companyia;

      if (marca && model) {
        if (!Mmodels[marca]) {
          // si la marca no existeix en l'array la creem
          Mmodels[marca] = [];
        }
        //verifiquem si el model existeix en l'array
        if (!Mmodels[marca].includes(model)) {
          Mmodels[marca].push(model);
        }
      }
    }
  }

  //convertim l'objecte en un array d'objectes
  const marquesmodels = Object.entries(Mmodels).map(([marca, models]) => ({
    [marca]: models,
  }));

  return marquesmodels;
}
//console.log(exercici5(cotxes));

//Exercici 5b

const agruparCotxesB = (array) => {
  let result = {};

  array.forEach((cotxe) => {
    if (!result[cotxe.companyia.marca]) {
      result[cotxe.companyia.marca] = [];
    }
    if (!result[cotxe.companyia.marca].includes(cotxe.companyia.model)) {
      result[cotxe.companyia.marca].push(cotxe.companyia.model);
    }
  });

  return result;
};
//console.log(agruparCotxesB(Cotxenou));

//Exercici 6

const estudiant = {
  nom: "Joan",
  edat: 20,
  notes: [8, 9, 7, 10],
  calcularMitjanaNotes: function () {
    const suma = this.notes.reduce((acc, nota) => acc + nota, 0);
    return suma / this.notes.length;
  },
};

console.log(estudiant.calcularMitjanaNotes());

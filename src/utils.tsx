import { InitialState } from "./context/reducer";

export const initialState: InitialState = {
  transactions: [
    {
      id: "1",
      label: "Uber",
      amount: 500,
      date: new Date(2023, 1, 13)
    },
    {
      id: "2",
      label: "Netflix",
      amount: 500,
      date: new Date(2023, 2, 13)
    },
    {
      id: "3",
      label: "Nomina",
      amount: 5000,
      date: new Date(2023, 5, 11)
    },
    {
      id: "4",
      label: "Nomina",
      amount: 500,
      date: new Date(2023, 5, 28)
    }
    , {
      id: "5",
      label: "recibo",
      amount: -500,
      date: new Date(2023, 2, 4)
    },
    {
      id: "6",
      label: "Telefono",
      amount: 500,
      date: new Date(2023, 5, 3)
    },
    {
      id: "7",
      label: "Telefono",
      amount: 500,
      date: new Date(2023, 5, 16)
    }
    , {
      id: "8",
      label: "recibo",
      amount: -500,
      date: new Date(2023, 5, 4)
    },
    {
      id: "9",
      label: "Telefono",
      amount: 500,
      date: new Date(2023, 5, 11)
    },
    {
      id: "10",
      label: "Nomina",
      amount: 500,
      date: new Date(2023, 5, 13)
    }, 
    {
      id: "11",
      label: "Telefono",
      amount: -5000,
      date: new Date(2023, 5, 4)
    },
    {
      id: "11",
      label: "recibo",
      amount: 19900,
      date: new Date(2023, 5, 4)
    }

  ],
}

export const monthsEnum = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
]

export function moneyFormatter(num: any) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' + (p[0].split('')[0] === '-' ? '-' : '') +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc: any, num: any, i: any, orig: any) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

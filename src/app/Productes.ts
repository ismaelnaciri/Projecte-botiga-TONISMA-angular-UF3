export interface Product {
  name: string;
  preu: number;
  img: string;
  quantity: number;
  type: string;
}

export const products= [
  {
    name:"Play Station 5",
    preu: 799,
    img: "http://localhost:3080/imatges/play 5.jpg",
    quantity: 1,
    type: "Consola"
  },
  {
    name:"Dualshock 5",
    preu: 69,
    img: "http://localhost:3080/imatges/mando.jpg",
    quantity: 1,
    type: "Mando"
  },
  {
    name:"Assassin's Creed Valhalla",
    preu: 50,
    img: "http://localhost:3080/imatges/juegops5.jpg",
    quantity: 1,
    type: "Joc"
  },
  {
    name:"Play Station 4",
    preu: 399,
    img: "http://localhost:3080/imatges/play4.jpg",
    quantity: 1,
    type: "Consola"
  },
  {
    name:"Xbox Series X",
    preu: 499,
    img: "http://localhost:3080/imatges/xboxX.jpg",
    quantity: 1,
    type: "Consola"
  },
  {
    name:"Nintendo Switch",
    preu: 310,
    img: "http://localhost:3080/imatges/nintendoSwitch.jpg",
    quantity: 1,
    type: "Consola"
  },
  {
    name:"Dualshock 4",
    preu: 50,
    img: "http://localhost:3080/imatges/mandoPlay4.jpg",
    quantity: 1,
    type: "Mando"
  },
  {
    name:"Xbox X Controller",
    preu: 60,
    img: "http://localhost:3080/imatges/mandoXboxX.jpg",
    quantity: 1,
    type: "Mando"
  },
  {
    name: "Nintendo Switch Controller",
    preu: 60,
    img: "http://localhost:3080/imatges/mandoNintendoSwitch.jpg",
    quantity: 1,
    type: "Mando"
  },
  {
    name: "Grand Theft Auto V",
    preu: 30,
    img: "http://localhost:3080/imatges/juegoPs4.jpg",
    quantity: 1,
    type: "Joc"
  },
  {
    name: "Fifa 23",
    preu: 49,
    img: "http://localhost:3080/imatges/juegoXboxX.jpg",
    quantity: 1,
    type: "Joc"
  },
  {
    name: "Mario Kart Deluxe 8",
    preu: 40,
    img: "http://localhost:3080/imatges/juegoNintendoSwitch.jpg",
    quantity: 1,
    type: "Joc"
  }
];

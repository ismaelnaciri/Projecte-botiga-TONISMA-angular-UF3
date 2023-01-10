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
    img: "../assets/IMG/play 5.jpg",
    quantity: 1,
    type: "Console"
  },
  {
    name:"Dualshock 5",
    preu: 69,
    img: "../assets/IMG/mando.jpg",
    quantity: 1,
    type: "Mando"
  },
  {
    name:"Assassin's Creed Valhalla",
    preu: 50,
    img: "../assets/IMG/juegops5.jpg",
    quantity: 1,
    type: "Joc"
  },
  {
    name:"Play Station 4",
    preu: 399,
    img: "../assets/IMG/play4.jpg",
    quantity: 1,
    type: "Console"
  },
  {
    name:"Xbox Series X",
    preu: 499,
    img: "../assets/IMG/xboxX.jpg",
    quantity: 1,
    type: "Console"
  },
  {
    name:"Nintendo Switch",
    preu: 310,
    img: "../assets/IMG/nintendoSwitch.jpg",
    quantity: 1,
    type: "Console"
  },
  {
    name:"Dualshock 4",
    preu: 50,
    img: "../assets/IMG/mandoPlay4.jpg",
    quantity: 1,
    type: "Mando"
  },
  {
    name:"Xbox X Controller",
    preu: 60,
    img: "../assets/IMG/mandoXboxX.jpg",
    quantity: 1,
    type: "Mando"
  },
  {
    name: "Nintendo Switch Controller",
    preu: 60,
    img: "../assets/IMG/mandoNintendoSwitch.jpg",
    quantity: 1,
    type: "Mando"
  },
  {
    name: "Grand Theft Auto V",
    preu: 30,
    img: "../assets/IMG/juegoPs4.jpg",
    quantity: 1,
    type: "Joc"
  },
  {
    name: "Fifa 23",
    preu: 49,
    img: "../assets/IMG/juegoXboxX.jpg",
    quantity: 1,
    type: "Joc"
  },
  {
    name: "Mario Kart Deluxe 8",
    preu: 40,
    img: "../assets/IMG/juegoNintendoSwitch.jpg",
    quantity: 1,
    type: "Joc"
  }
];

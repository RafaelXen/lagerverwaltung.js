let produkte = [
  {
    id: 1,
    Name: "Euro-Gitterbox",
    Nummer: 200,
    Kost: 25000
  },
  {
    id: 2,
    Name: "Kartonagen",
    Nummer: 350,
    Kost: 10500,
  },
  {
    id: 3,
    Name: "Stapelkästen",
    Nummer: 400,
    Kost:  16000
  }
]

function NeueProdukte(Name, Nummer, Kost) {
  let id = produkte.length + 1
  produkte.push(
    {
      id: id, 
      Name: Name,
      Nummer: Nummer, 
      Kost: Kost 
      
      
    }
  )
  return produkte 
}

function gesamtKost(produkte) {
  let summe = produkte.reduce((summe, produkt) => summe + produkt.Kost, 0);
  return summe
}

function produkteMangel(produkte) {
  let ergebnis = produkte
    .filter(produkt => produkt.Nummer < 100)
    .map(produkt => produkt.Name);
  return ergebnis
}

function produktSuchen(name) {
    if (produkte.find(produkt => produkt.Name === name) === undefined) {
      return "Kein Produkt gefunden"
    }
  else {
    return produkte.find(produkt => produkt.Name === name);
  }
}

function produktLoeschen(name) {
    produkte = produkte.filter(produkt => produkt.Name !== name);
    return produkte 
}

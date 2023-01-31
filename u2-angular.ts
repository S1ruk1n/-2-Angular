/// Aufgabe 1
let Vorname: string = "sarukan";
let alter: number = 23;
let auto: string = "BMW";

console.log(Vorname, alter, auto)

// Aufgabe 2
// numerische Aufzählung
enum Farbe {
    Rot = 1,
    Grün,
    Gelb,
    Blau,
}
let colorName : string = Farbe[4];

console.log(colorName)


enum Fahrzeug {
    KFZ = 2,
    Fahrrad = 5,
    E_Bike = 7,
}

let c: Fahrzeug = Fahrzeug.E_Bike;

console.log(c);

// Aufzählung als Zeichenkette
enum Prozess {
    Start = "Start",
    Stop = "Stop",
    Cotinue = "Continue",
    Error = "Error",
    Initial = "Initial",
}
let prozess : string = Prozess["Stop"]
console.log(prozess)

// Aufgabe 3
interface Buch {
    Titel?: string;
    Autor?: string;
    Erscheinungsjahr?: number;
}

interface Reise {
    Startdatum?: number;
    Enddatum?: number;
    startReise?(): boolean;
}


interface Einkaufswagen {
    anzahlArtikel?: number;
    artikel?: string[]
    Einkaufswert(): number;
}
const penny:Einkaufswagen = {
    anzahlArtikel: 4,
    artikel: ["Banane", "Buch", "Auto", "Choki"],
    Einkaufswert() {
        return(22)
    },
}
console.log(penny)

// Aufgabe 4
function bezahlenGehen(e:Einkaufswagen):boolean{
    console.log( "Der Einkaufswagen hat einen Wert von " + e.Einkaufswert+ "EUR")
    let result:boolean
    if (e.Einkaufswert() > 0) {
        result = true
        console.log( "Danke für ihren Einkauf")
    }
    else {
        result = false
        console.log( "Das hat leider nicht geklappt")
    }
    return result
}
const einkaufen:Einkaufswagen = {
    anzahlArtikel: 4,
    artikel: ["Banane", "Buch", "Auto", "Choki"],
    Einkaufswert: function(): number {
        return(22)
    }
}

let erfolgreich: boolean
erfolgreich = bezahlenGehen(einkaufen)
console.log("Einkauf erflogreich ?: " + erfolgreich + "\n")


erfolgreich = bezahlenGehen({anzahlArtikel:0, artikel:[], Einkaufswert: ()=> {return 0}})
console.log("Einkauf erflogreich ?: " + erfolgreich + "\n")
/// Aufgabe 1
var Vorname = "sarukan";
var alter = 23;
var auto = "BMW";
console.log(Vorname, alter, auto);
// Aufgabe 2
// numerische Aufzählung
var Farbe;
(function (Farbe) {
    Farbe[Farbe["Rot"] = 1] = "Rot";
    Farbe[Farbe["Gr\u00FCn"] = 2] = "Gr\u00FCn";
    Farbe[Farbe["Gelb"] = 3] = "Gelb";
    Farbe[Farbe["Blau"] = 4] = "Blau";
})(Farbe || (Farbe = {}));
var colorName = Farbe[4];
console.log(colorName);
var Fahrzeug;
(function (Fahrzeug) {
    Fahrzeug[Fahrzeug["KFZ"] = 2] = "KFZ";
    Fahrzeug[Fahrzeug["Fahrrad"] = 5] = "Fahrrad";
    Fahrzeug[Fahrzeug["E_Bike"] = 7] = "E_Bike";
})(Fahrzeug || (Fahrzeug = {}));
var c = Fahrzeug.E_Bike;
console.log(c);
// Aufzählung als Zeichenkette
var Prozess;
(function (Prozess) {
    Prozess["Start"] = "Start";
    Prozess["Stop"] = "Stop";
    Prozess["Cotinue"] = "Continue";
    Prozess["Error"] = "Error";
    Prozess["Initial"] = "Initial";
})(Prozess || (Prozess = {}));
var prozess = Prozess["Stop"];
console.log(prozess);
var penny = {
    anzahlArtikel: 4,
    artikel: ["Banane", "Buch", "Auto", "Choki"],
    Einkaufswert: function () {
        return (22);
    },
};
console.log(penny);
// Aufgabe 4
function bezahlenGehen(e) {
    console.log("Der Einkaufswagen hat einen Wert von " + e.Einkaufswert + "EUR");
    var result;
    if (e.Einkaufswert() > 0) {
        result = true;
        console.log("Danke für ihren Einkauf");
    }
    else {
        result = false;
        console.log("Das hat leider nicht geklappt");
    }
    return result;
}
var einkaufen = {
    anzahlArtikel: 4,
    artikel: ["Banane", "Buch", "Auto", "Choki"],
    Einkaufswert: function () {
        return (22);
    }
};
var erfolgreich;
erfolgreich = bezahlenGehen(einkaufen);
console.log("Einkauf erflogreich ?: " + erfolgreich + "\n");
erfolgreich = bezahlenGehen({ anzahlArtikel: 0, artikel: [], Einkaufswert: function () { return 0; } });
console.log("Einkauf erflogreich ?: " + erfolgreich + "\n");
//# sourceMappingURL=u2-angular.js.map
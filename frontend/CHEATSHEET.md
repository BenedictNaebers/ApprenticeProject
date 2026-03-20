# HTML
-> zum Nachschlagen und Ausprobieren: https://www.w3schools.com/html/

die wichtigsten HTML-Tags im Überblick:

| Name              | Funktion                                | Beispiel                                                                                              |
|-------------------|-----------------------------------------|-------------------------------------------------------------------------------------------------------|
| `<!DOCTYPE>`      | Deklaration des Dokumenttyps            | `<!DOCTYPE html>`                                                                                     |
| `<html>`          | Beginn des HTML-Dokuments               | `<html>`                                                                                              |
| `<head>`          | Enthält Informationen über das Dokument | `<head><title>Titel der Seite</title></head>`                                                         |
| `<title>`         | Definiert den Titel der Seite           | `<title>Titel der Seite</title>`                                                                      |
| `<body>`          | Enthält den Inhalt der Seite            | `<body><h1>Überschrift</h1><p>Text</p></body>`                                                        |
| `<h1>` bis `<h6>` | Überschriften (Heading)                 | `<h1>Überschrift 1</h1><h2>Überschrift 2</h2>`                                                        |
| `<p>`             | Absätze (Paragraph)                     | `<p>Text</p>`                                                                                         |
| `<a>`             | Hyperlinks (Anchor)                     | `<a href="https://www.example.com">Link-Text</a>`                                                     |
| `<img>`           | Bilder (Image)                          | `<img src="bild.jpg" alt="Alternativtext">`                                                           |
| `<ul>`            | Unsortierte Listen (Unordered List)     | `<ul><li>Eintrag 1</li><li>Eintrag 2</li></ul>`                                                       |
| `<ol>`            | Sortierte Listen (Ordered List)         | `<ol><li>Eintrag 1</li><li>Eintrag 2</li></ol>`                                                       |
| `<li>`            | Listeneinträge (List Item)              | `<ul><li>Eintrag 1</li><li>Eintrag 2</li></ul>`                                                       |
| `<table>`         | Tabellen                                | `<table><tr><th>Spalte 1</th><th>Spalte 2</th></tr><tr><td>Zelle 1</td><td>Zelle 2</td></tr></table>` |
| `<tr>`            | Tabellenzeilen (Table Row)              | `<tr><td>Zelle 1</td><td>Zelle 2</td></tr>`                                                           |
| `<th>`            | Tabellenüberschriften (Table Header)    | `<th>Spalte 1</th><th>Spalte 2</th>`                                                                  |
| `<td>`            | Tabellenzellen (Table Data)             | `<td>Zelle 1</td><td>Zelle 2</td>`                                                                    |
| `<form>`          | Formulare                               | `<form><input type="text" name="textfeld"><input type="submit" value="Absenden"></form>`              |
| `<input>`         | Eingabefelder                           | `<input type="text" name="textfeld">`                                                                 |
| `<button>`        | Schaltflächen                           | `<button>Button-Text</button>`                                                                        |

# CSS
-> zum Nachschlagen und Ausprobieren: https://www.w3schools.com/css/

die wichtigsten CSS-Eigenschaften im Überblick:

| Name                  | Funktion                                                                | Beispiel                           |
|-----------------------|-------------------------------------------------------------------------|------------------------------------|
| `color`               | Legt die Textfarbe fest                                                 | `color: blue;`                     |
| `font-size`           | Legt die Größe des Textes fest                                          | `font-size: 16px;`                 |
| `font-family`         | Legt die Schriftart fest                                                | `font-family: Arial, sans-serif;`  |
| `background-color`    | Legt die Hintergrundfarbe fest                                          | `background-color: #ffffff;`       |
| `background-image`    | Legt ein Hintergrundbild fest                                           | `background-image: url(bild.jpg);` |
| `background-repeat`   | Legt fest, wie das Hintergrundbild wiederholt werden soll               | `background-repeat: repeat-x;`     |
| `background-position` | Legt die Position des Hintergrundbildes fest                            | `background-position: center;`     |
| `border`              | Legt die Rahmen um ein Element fest                                     | `border: 1px solid black;`         |
| `margin`              | Legt den Abstand zwischen dem Element und anderen Elementen fest        | `margin: 10px;`                    |
| `padding`             | Legt den Abstand zwischen dem Inhalt des Elements und dem Rahmen fest   | `padding: 5px;`                    |
| `width`               | Legt die Breite des Elements fest                                       | `width: 100px;`                    |
| `height`              | Legt die Höhe des Elements fest                                         | `height: 50px;`                    |
| `display`             | Legt die Anzeigeeigenschaft des Elements fest                           | `display: block;`                  |
| `float`               | Legt die horizontale Ausrichtung des Elements fest                      | `float: left;`                     |
| `text-align`          | Legt die horizontale Ausrichtung des Textes innerhalb des Elements fest | `text-align: center;`              |
| `vertical-align`      | Legt die vertikale Ausrichtung des Elements fest                        | `vertical-align: middle;`          |
| `position`            | Legt die Position des Elements fest                                     | `position: relative;`              |
| `top`                 | Legt den Abstand von der oberen Kante des übergeordneten Elements fest  | `top: 10px;`                       |
| `left`                | Legt den Abstand von der linken Kante des übergeordneten Elements fest  | `left: 20px;`                      |
| `right`               | Legt den Abstand von der rechten Kante des übergeordneten Elements fest | `right: 30px;`                     |
| `bottom`              | Legt den Abstand von der unteren Kante des übergeordneten Elements fest | `bottom: 40px;`                    |

# JavaScript
-> zum Nachschlagen und Ausprobieren: https://www.w3schools.com/js/

die wichtigsten JavaScript-Funktionen im Überblick:

| Name                    | Funktion                                                                         | Beispiel                                                        |
|-------------------------|----------------------------------------------------------------------------------|-----------------------------------------------------------------|
| `alert()`               | Erzeugt eine Popup-Meldung im Browser                                            | `alert("Hallo Welt!");`                                         |
| `console.log()`         | Schreibt eine Meldung in die Browserkonsole                                      | `console.log("Hallo Welt!");`                                   |
| `prompt()`              | Erzeugt ein Dialogfeld mit einer Frage an den Benutzer und erwartet eine Eingabe | `let name = prompt("Wie ist dein Name?");`                      |
| `confirm()`             | Erzeugt ein Dialogfeld mit einer Ja/Nein-Frage und erwartet eine Antwort         | `let bestaetigt = confirm("Bist du sicher?");`                  |
| `setTimeout()`          | Ruft eine Funktion nach einer bestimmten Verzögerung auf                         | `setTimeout(function(){ alert("Hallo Welt!"); }, 3000);`        |
| `setInterval()`         | Ruft eine Funktion in regelmäßigen Abständen auf                                 | `setInterval(function(){ console.log("Hallo Welt!"); }, 1000);` |
| `parseInt()`            | Konvertiert einen String in eine ganze Zahl                                      | `let zahl = parseInt("123");`                                   |
| `parseFloat()`          | Konvertiert einen String in eine Gleitkommazahl                                  | `let zahl = parseFloat("3.14");`                                |
| `Math.random()`         | Gibt eine zufällige Zahl zwischen 0 und 1 zurück                                 | `let zufall = Math.random();`                                   |
| `Math.floor()`          | Rundet eine Gleitkommazahl auf die nächstkleinere ganze Zahl ab                  | `let zahl = Math.floor(3.14);`                                  |
| `Math.ceil()`           | Rundet eine Gleitkommazahl auf die nächsthöhere ganze Zahl auf                   | `let zahl = Math.ceil(3.14);`                                   |
| `Math.round()`          | Rundet eine Gleitkommazahl auf die nächstgelegene ganze Zahl                     | `let zahl = Math.round(3.5);`                                   |
| `String.fromCharCode()` | Gibt ein Zeichen anhand des angegebenen Unicode-Werts zurück                     | `let zeichen = String.fromCharCode(65);`                        |
| `String.length`         | Gibt die Länge eines Strings zurück                                              | `let laenge = "Hallo Welt".length;`                             |
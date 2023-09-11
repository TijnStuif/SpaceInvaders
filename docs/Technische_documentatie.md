# Technische documentatie

## de achtergrond maken en een kleur geven
Ik ben dit blok begonnen door een aantal curcussen van codecademy af te ronden (https://www.codecademy.com/courses/learn-p5js-fundamentals/lessons/p5js-introduction-to-creative-coding/exercises/p5js-what-is). Hierna was ik head-first de code ingedoken, en aangezien ik nog nooit eerder met javascript heb geprogrammeerd, was het even zoeken naar een begin. Toen ik eenmaal door de product backlogs had gekeken, ging ik direct aan de achtergrond bezig. Hiervoor heb ik mijn codecademy goed weten te gebruiken, door functies als fill() te gebruiken om de achtergrond de juiste, zwarte kleur te geven.

```javascript
function setup () {
  createCanvas(1200,600);
}

function draw () {
  background(0);
}
```
Zoals hier te zien heb ik mijn canvas groter gemaakt dan dat hij in het begin was, zodat ik meer ruimte heb om mee te spelen. Daarnaast heb ik voor de background functie, de grayscale-waarde 0 ingevuld zodat de achtergrond volledig zwart is.

Voordat ik beweging kon toevoegen aan het karakter van de speler, moet er natuurlijk wel een karakter zijn. Hiervoor maak ik gebruik van de draw functie, waarin ik vervolgens een rechthoek teken. Deze kleur ik groen, aangezien dat het meest gepast is in deze setting.

```javascript
function draw () {
  background(0);
  fill(0,255,0);
  noStroke();
  rect(width/2 - 30, height - 30, 60, 20)
}
```
Ook heb ik er hiervoor gekozen om mijn rechthoek geen randje te geven met de noStroke() functie. Deze is namelijk onnodig als de rechthoek maar een kleur heeft.


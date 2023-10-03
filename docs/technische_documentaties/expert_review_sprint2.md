# Expert review sprint 2 Space Invaders

## Coding conventions
Voor coding conventions worden vaak 4 dingen aangehouden waar een programmeur bij zijn/haar code op moet letten. Dit zijn: <br/>
Comment conventions: deze gaan over het toevoegen van comments, om ingewikkelde stukjes code uit te leggen binnen het codebestand. <br/>
Indent style conventions: deze gaan over de inlining/inspringen van de code. Hierdoor wordt nodige structuur in de code gebracht, zoals in bijvoorbeeld if-statements of for-loops. <br/>
Line length conventions: deze gaan over de lengte van een stuk code op 1 lijn. Om de code zo overzichtelijk mogelijk te maken, wordt op 1 lijn de code zo kort als mogelijk geschreven. <br/>
Naming conventions: deze gaan over de naamgeving van variablen en functies. De lezer van de code moet in één oogopslag kunnen zien wat ongeveer de bedoeling en functionaliteit is van een variable of functie.

### Comment conventions
Ik heb in mijn code veel codes toegevoegd, vooral voordat er een functie, for-loop of if-statement begint, waarin ik uitleg wat er allemaal gebeurt in het desbetreffende stukje code. Ook helpt dit mij, om niet te vergeten waarvoor een stukje code precies bedoelt is (want dat kan nog wel eens gebeuren bij een groot project)

```javascript
//this makes sure all images and text are loaded from the center
  imageMode(CENTER);
  textAlign(CENTER);
```

In dit stukje code heb ik al mijn plaatjes en text laten laden vanuit het midden, en dat is precies wat mijn comment aangeeft.

### Indent style conventions
Ik heb in mijn code zoveel mogelijk geprobeert om alle lijnen te laten inspringen waar nodig, zodat ik en anderen kunnen zien wanneer een stuk code zich bijvoorbeeld in een if-statement bevindt.

```javascript
function checkUfoSpawn() {
  if (ufoSpawn == 0) {
    return;
  } else {
    if (ufoSpawn == 2) {
      let ufoEnemy = {
        x: 1200,
        y: 50,
        health: 1,
        direction: -1
      }
      ufoEnemies.push(ufoEnemy)
      ufoSpawn -= 2;
    }

    if (ufoSpawn == 1) {
      let ufoEnemy = {
        x: 0,
        y: 50,
        health: 1,
        direction: 1
      }
      ufoEnemies.push(ufoEnemy)
      ufoSpawn -= 1;
    }
  }
}
```

Door inspringen is hier te zien dat alle code eronder in de functie hoort, en vervolgens wat in de if-statement en in de elseif-statement staat.

### Line length conventions
Ik heb een paar delen van mijn code gehad waarbij de code het einde van de lijn bereikte. Dit vond ik er niet goed uitzien, dus heb ik het over meerdere regels verspreid, om het overzichtelijker te maken voor iedereen.

```javascript
let enemyTouchesGround = peacefulEnemies.some(peacefulEnemy => peacefulEnemy.y > height - distanceFromGround) || 
                            shootingEnemies.some(shootingEnemy => shootingEnemy.y > height - distanceFromGround)
let enemyTouchesLeft = peacefulEnemies.some(peacefulEnemy => peacefulEnemy.x < distanceFromLeftSide) || 
                          shootingEnemies.some(shootingEnemy => shootingEnemy.x < distanceFromLeftSide)
let enemyTouchesRight = peacefulEnemies.some(peacefulEnemy => peacefulEnemy.x > width - distanceFromRightSide) || 
                          shootingEnemies.some(shootingEnemy => shootingEnemy.x > width - distanceFromRightSide)
```

Hier zijn mijn variablen voor de zijkanten van het scherm te zien. Aangezien er veel voorwaarden nodig waren, had elke variable een grote lap code nodig om correct te werken. Ik heb de code laten overgaan op de volgende regel, na de or-statement, zodat het bestand niet naar rechts en links hoeft worden bewogen om alle code te zien.

### Naming conventions
Het geven van namen aan variablen is heel belangrijk voor een goed gestructureerde code. Daarom moet een variablenaam zo specifiek mogelijk zijn, en tegelijkertijd zo kort mogelijk. Dit was niet altijd even makkelijk.

```javascript
const AKeyCode = 65;
const DKeyCode = 68;
const spacebarKeyCode = 32;
```

Bij het naamgeven van deze constanten, was het lastig om mijzelf aan de camelCase-convention te houden, omdat het naamgeven van de keycode van de A-toets er raar uitzag zonder hoofdletter. Uiteindelijk heb ik deze dan toch een hoofdletter gegeven, wat ik er uiteindelijk toch het beste uit vond zien. Voor de spacebar keycode heb ik wel gebruik gemaakt van camelCase, omdat de toets van de keycode meer dan 1 letter lang was. Ook is er bij dit voorbeeld gebruik gemaakt van het vermijden van magic numbers, omdat als iemand de code leest, dan zou deze persoon geen idee hebben wat 65 voor een toets is. Deze variablen namen maken dit een stuk makkelijker.

## Basisconcepten programmeren
Ik heb in mijn Space Invaders game veel gebruik gemaakt van de basisconcepten van programmeren. Ik ga hieronder een paar specifiek toelichten, namelijk: <br/>
Variablen, constanten <br/>
Functies <br/>
For-loop <br/>
If/If-else statements <br/>
Objects en arrays<br/>

### Variablen, constanten
Variablen en constanten worden gebruikt om een waarde (tekst, getal of true/false) aan een woord of woordgroep te binden. Hierdoor hebben bijvoorbeeld getallen een identiteit in de code, of kan een getal gemakkelijk elke keer per loop worden aangepast.

```javascript
let playerShipX = 580;
let playerShipHealth = 3;
```

Hierboven zijn twee variablen te zien die ik gebruikt heb voor mijn speler. Deze kunnen later in de code aangepast worden. Bijvoorbeeld als de speler damage neemt, dan kan de playerShipHealth met een waarde 1 naar beneden, en wanneer deze 0 raakt, dat het spel stopt.

### Functies
Functies zijn een stuk code die later kunnen worden aangeroepen door de functienaam aan te roepen. Het kan helpen om bepaalde delen van de code overzichtelijk te maken.

```javascript
//function that shows score in the top left
function showScore() {
  fill(255);
  textSize(25);
  text(score, 40, 50);
}
```
Hierboven is een hele simpele functie gedefinieerd genaamd showScore(). Deze wordt later in mijn code aangeroepen, wanneer ik graag de speler zijn/haar score wil laten zien. Ik hoef dan alleen maar showScore() neer te zetten, waarna de gehele code in de functie wordt doorgelopen (in dit geval dus de score in text laten zien en opmaak geven).

### For-loops
For-loops kunnen enorm handig zijn om meerdere objecten met 1 objectnaam aan te roepen, of zaken te laten gebeuren in een regelmatig patroon.
```javascript
//for-loop that spawns the shield units
for (let i = 0; i < 4; i++) {
    let shieldUnit = {
      x: 150 + i * 300,
      y: 500,
      health: 5
    }
    shieldUnits.push(shieldUnit);
  }
```
Hierboven worden in de for-loop shieldUnits gecreeërd door de for-loop. Hierdoor weet de computer precies op welke aftstand de shieldUnits van elkaar af moeten zitten, en geeft ze elk 5 health. Hierna worden alle shieldUnits toegevoegd aan de array shieldUnits[].

### If/if-else statements
If of if-else statements kunnen handig zijn om een bepaald stukje code alleen te laten runnen als er aan een bepaalde voorwaarde voldoet.

```javascript
/*function that checks if the ufoSpawn variable is assigned to a certain number 
(0 does nothing, 1 makes the ufo spawn at the left side, and 2 makes the ufo spawn at the right side).
Once the ufo spawns, it resets the ufoSpawn variable so the ufo can be respawned after it gets deleted. */
function checkUfoSpawn() {
  if (ufoSpawn == 0) {
    return;
  } else {
    if (ufoSpawn == 2) {
      let ufoEnemy = {
        x: 1200,
        y: 50,
        health: 1,
        direction: -1
      }
      ufoEnemies.push(ufoEnemy)
      ufoSpawn -= 2;
    }

    if (ufoSpawn == 1) {
      let ufoEnemy = {
        x: 0,
        y: 50,
        health: 1,
        direction: 1
      }
      ufoEnemies.push(ufoEnemy)
      ufoSpawn -= 1;
    }
  }
}
```

In het geval van de code hierboven, is de voorwaarde dat de variable ufoSpawn een bepaalde waarde heeft. Als de waarde 0 is, dan doet deze functie niks. Als de waarde niet 0 is, dan wordt de code binnen de else-statement gerunt, waarin vervolgens weer twee if-statements zijn verwerkt. Op deze manier wordt een functie een stuk logischer.

### Objects en arrays
Objects zijn net zoals in het echt objecten, met eigen waarden en eigenschappen. Deze worden toegekend aan het object in de code.

```javascript
//creates a bullet object when the spacebar is pressed
function keyPressed() {
  if (keyCode === spacebarKeyCode) {
    let playerBullet = {
      x: playerShipX,
      y: playerShipY
    }
    playerBullets.push(playerBullet);
  }
}
```

Hier wordt een object playerBullet aangemaakt. Deze krijgt waardes toegekend voor de x-positie en de y-positie. Hierna wordt de object playerBullet in een array playerBullets toegevoegd. Hierin kan een programmeur allerlei objects op 1 plek opslaan, die vervolgens samen een bepaalde eigenschap, zoals collision tussen een andere object, kunnen verkrijgen. 

```javascript
//for-loop that determines the spawn point of the player bullet and gives it movement
for (let playerBullet of playerBullets){
    playerBullet.y -= moveSpeedPlayerBullet;
    image(playerBulletImg, playerBullet.x,playerBullet.y, 5, 25);
    if (playerBullet.y < 0) {
      playerBullets.splice(0, 1);
    }
  }
```

In deze code is te zien hoe een object uit een array wordt opgehaald om een eigenschap te geven, en ook hoe een object uit een array kan worden gespliced. Met de for-loop worden alle playerBullet objects uit de playerBullets array gehaald, om deze vervolgens movement te geven, en als zij de bovenkant van de canvas raken, dat deze dan uit de array worden gespliced en verwijdered uit de game.
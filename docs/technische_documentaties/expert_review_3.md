# Expert review sprint 3

## Efficiente en herbruikbare code
Voor efficiënte code, is het belangrijk om bijna gelijke lijnen code, op een kortere manier op te schrijven. Dit helpt om de code overzichtelijker te maken. Ook maakt dit het makkelijker om een sooortgelijke functionaliteit in de toekomst opnieuw te maken.

Voor het grootste deel heb ik gebruik gemaakt van functies en for-loops om mijn code zo kort mogelijk op te schrijven. Maar ook zaken zoals een or-statemengt (||), hebben mijn if-statements regels korter kunnen houden.

```javascript
//for-loop that gives movement to the ufo and removes it from the screen once it hits the side
for (let ufoEnemy of ufoEnemies) {
    ufoEnemy.x += moveSpeedUfo * ufoEnemy.direction;
    image(ufoEnemyImg, ufoEnemy.x, ufoEnemy.y)
    if (ufoEnemy.x < 0 || ufoEnemy.x > width) {
        ufoEnemies.splice(0, 1);
    }
}
```

In dit kleine stukje code zorgt de for-loop ervoor dat alles eronder voor elke ufoEnemy object geldt die volgt. Ook maakt de or-statement dat er maar éen if-statement hier gebruikt hoeft te worden.

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

Door hier veel regels aan comments toe te voegen, kan het de volgende persoon helpen om uit te leggen wat hier ongeveer gebeurt. Dit zorgt voor makkelijk herbruikbare code voor mijzelf en anderen.
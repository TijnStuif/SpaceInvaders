# Product review sprint 3

## K1: User stories
User stories vertellen wat een gebruiker verwacht van een bepaald product. Deze verwerkt de programmeur tot de gebruiker blij is met het resultaat. In onze opdracht hebben wij het stappenplan gekregen geheel via user-stories. Op deze manier kon er aan elke mechanic van de game apart gewerkt worden, en maakte dat het proces een stuk overzichtelijker. 

### User stories in to-do, status quo en extra informatie
Voor sprint 3 had ik alleen nog de user stories met betrekking tot de rationele database openstaan. Deze heb ik voltooid en correct in mijn game geimplementeerd. Voor de rest kon ik het spel nog personaliseren. Dit heb ik gedaan door een beginscherm toe te voegen, en een eindscherm.

User Stories | To-do/doing/done
-------------|------------------
Als speler wil ik een spelwereld waarin ik het spel Space Invaders kan spelen.|done 
Als speler wil ik een ruimteschip die ik kan bewegen zodat ik vijanden kan aanvallen en ontwijken.|done
Als speler wil ik dat er 5 rijen vijanden zijn die verslagen dienen te worden zodat ik onder druk kan komen te staan en daardoor uitdaging ervaar.|done
Als speler wil ik geconfronteerd worden met een vijand die naar beneden schiet, zodat ik een uitdagende tegenstander heb om tegen te spelen.|done
Als speler wil ik met mijn spaceship projectielen kunnen schieten zodat ik de vijanden kan vernietigen.|done
Als speler wil ik een vijand tegenkomen die niet schiet, zodat ik een minder uitdagende ervaring heb.|done
Als speler wil ik het spel starten met drie levens zodat ik niet direct af ben als ik geraakt wordt.|done
Als speler wil ik een score kunnen behalen zodat ik mijn prestatie kan waarnemen.|done
Als speler wil ik dat het spel een achtergrond heeft zodat het spel mij beter de indruk geeft waar het zich afspeelt.|done
Als speler wil ik kunnen winnen en verliezen zodat ik het spel kan uitspelen. |done
Als speler wil ik dat er 4 schilden boven het spaceship zijn zodat er wat bescherming is tegen de vijanden.|done
Als speler wil ik dat er willekeurig een UFO boven aan het scherm over vliegt.|done
Als ontwerper personaliseer ik het gerealiseerde spel naar mijn eigen leefwereld.|done
Als speler wil ik mijn score kunnen opslaan zodat deze vergeleken kan worden met andere spelers.|done
Als speler wil ik alle scores kunnen ophalen zodat ik kan zien hoe goed ik ben ten opzichte van andere spelers.|done

## K2: Agile methodiek
Ik heb dit blok, bij alle sprints, gewerkt met de issue boards van GitLab. Dit zorgt dat het werkproces overzichtelijker is, omdat ik goed kan zien wat er nog moet gebeuren/wat al af is.

## K8: Rationele database
Voor deze game moesten we een rationele database gebruiken om highscores op te slaan, en later op te halen op een leaderboard. Dit is mij gelukt om correct toe te voegen.

```javascript
//function that loads all the data from the save database to the load database
function onHighscoreSaved () {
  loadJSON(`${loadDataURL}?game=${gameID}`, onHighscoreRetrieved);
}

//function that sorts the highscores from the database to a top-10 based on highest score
function onHighscoreRetrieved(dataAsJson) {
  if (dataAsJson == null) {
    return;
  }
  highscoresSorted = Object.values(dataAsJson);
  highscoresSorted.sort((a,b) => b.score - a.score)
  highscoresSorted = highscoresSorted.slice(0, 10);
}

//shows a list of the top-10 highscores from the database, based on highest points
function showHighscores() {
  fill(255);
  textSize(30);
  text("Top 10 highscores:", width / 2, 250);
  for (let i = 0; i < highscoresSorted.length; i++) {
    const highscore = highscoresSorted[i];
    text(`${i+1}. ${highscore.name}: ${highscore.score}`, width / 2, 280 + i * 30)
  }
}

//functions that shows the highscore name box and final score, as well as telling if you lost or won
function showNameContent(callback) {
  if (scoreSubmitted) {
    return;
  }
  image(spaceImg, 600, 300)
  image(spaceImg, width / 2, height / 2, 1200, 600)
  fill(gameEndColor);
  textSize(100);
  text(gameEndMessage, width / 2, 150);
  fill(255);
  textSize(50);
  text(`your score: ${score}`, width / 2, 200);
  const box = document.getElementById("nameBox");
  box.style.display = "block";

  /*adds click function to submit button that does the following: hide highscore name box, 
  saves highscore under the entered name and obtained score, runs the highscoreSaved function, and turns score submitted to true */
  const submitButton = document.getElementById("submitName");
  submitButton.addEventListener("click", function() {
    name = document.getElementById("name").value;
    hideNameContent();
    if (!scoreSubmitted) {
    httpGet(`${saveDataURL}?game=${gameID}&name=${name}&score=${score} `, onHighscoreSaved);
    onHighscoreSaved();
    scoreSubmitted = true;
    }
    callback();
  });
}
```

Hierboven is alle code te zien die zorgt voor het werken van de database, het opslaan van de highscore met een name die de speler zelf invoert, en die vervolgens kunnen worden opgehaald door de array van highscores te filteren op hoogste scores. Ik heb ook nog een klein stukje HTML gebruikt, aangezien ik mijn insert box met HTML heb laten werken

```HTML
<div id="nameBox">
    <label for="name">Enter your name (max characters is 20): </label>
    <br>
    <input type="text" id="name" name="name" size = "50" maxlength = "20">
    <button id="submitName">Submit</button>
</div>
```

Hierboven laat ik zien dat ik een insert box maak met een id, een tekst die erboven wordt laten zien, en een submit knop. Dit alles zorgt voor een goed werkende insert box waarvan ik de input kan gebruiken in JavaScript.
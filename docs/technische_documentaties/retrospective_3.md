# Retrospective sprint 3
Deze retrospective wil ik alleen G7 bewijzen.

## G7: Vragen stellen en nieuwsgierig
Deze sprint ben ik veel op onderzoek uitgeweest om de rationele database te snappen en uit te voeren. Onderweg kwam ik in een paar problemen te zitten, zoals het gebruiken van playerName i.p.v name, en aangezien de database name gebruikt, werkte playerName niet. Ik heb hier veel oplossingen voor gezocht, en kwam er pas later achter dat het alleen een kwestie van hernoemen van de variable was. Door dit hele gebeuren snapte ik wel meer over databases en hoe ze informatie opslaan en ophalen. Ook kwam ik nog in een situatie terecht waar ik mijn HTML-elementen niet over een p5.js image heenkreeg. Hierdoor kon ik mijn insert box waar de naam ingevuld moest worden, niet laten zien aan de speler. Om dit op te lossen, heb ik een oplossing gevraagd aan Lennon.

Vraag aan Lennon: Hoe krijg ik mijn HTML elementen, zoals text en input boxes, bovenop mijn Javascript images?
Antwoord van Lennon: Geef de div, waar het element zich in bevindt, een position: absolute en z-index: 5. Hierdoor laadt het div-element, op de website z-order 5. Dit ligt hoger dan de javascript elementen, waardoor de div over de javascript heenlaadt.

Dit werkte eigenijk meteen, en hierdoor was ik ook gelijk klaar met alle user stories. Daarnaast heeft dit mijn basiskennis van CSS iets beter gemaakt.
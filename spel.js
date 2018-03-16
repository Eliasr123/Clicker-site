/* element får manipulation */
var button = document.getElementById("clickerbutton");
var lejonKnapp = document.getElementById("lejon");
var scoreDiv = document.getElementById("score");
var powerText = document.getElementById("powerText");
var ZebraButton = document.getElementById("zebra");
var buttonTop = document.getElementById("buttonTop");
var lionSuper = document.getElementById("lionSuper");
var shopDropDown = document.getElementById("dropDownForShop")
/* Skapa ett nytt element fÃ¶r poÃ¤ngen */
var scoreText = document.createElement("p");

/* spelvariabler */

var clickValue = 1;
var bank = 0;
var lejonCost = 15;
var lejonClicks = 0;
var zebraCost = 30;
var zebra = null;
var zebraTimer = 0;
var lionPurchased = 0;
var buttonHidden = document.getElementById("knappar")
/* startvÃ¤rden */
scoreText.textContent = "Pats: 0";
lejonKnapp.textContent = "More pats: " + lejonCost;
ZebraButton.textContent = "Patting machine: " + zebraCost;
lionSuper.textContent = "Pats double up";
lionSuper.style.display = "none";
/* click event + logic */

button.addEventListener("click", function() {

	bank += clickValue; // lÃ¤gg till vÃ¤rdet vid click
	scoreText.textContent = "Pats: " + bank; // sÃ¤tt textvÃ¤rdet i p elementet till bank.
}, true);
shopDropDown.addEventListener("click", function() {
    if (buttonHidden.style.display == "none") {
        buttonHidden.style.display = "block";
    }else{
        buttonHidden.style.display = "none";
    }
}, true);
/* kod fÃ¶r zebrapowerup med rÃ¤knare */
ZebraButton.addEventListener("click", function() {
	if (bank >= zebraCost) {
		bank -= zebraCost;
        zebraCost *= 2;
		powerText.textContent = "You bought a patting machine";
        ZebraButton.textContent = "Patting machine: " + zebraCost;
		// LÃ¤gg till setInterval med en funktion som laddas varje sekund
		zebra = setInterval(function() {
			bank += 10;
			scoreText.textContent = "Pats: " + bank;
			zebraTimer--;

			
		}, 1000);
	} else {
		powerText.textContent = "You can't affoard a patting machine!";
	}
}, true);
lionSuper.addEventListener("click", function() {
        bank *= 2;
        lionSuper.style.display = "none";
    
}, true);

// knapp och kod fÃ¶r lejon powerup
lejonKnapp.addEventListener("click", function() {
	if (bank >= lejonCost) {
        lionPurchased++;
        bank -= lejonCost;
        clickValue *= 2;
		lejonCost *= 2;
		lejonClicks += 10;
		lejonKnapp.textContent = "More pats: " + lejonCost;
		powerText.textContent = "More pats bought";
		scoreText.textContent = "Points: " + bank; // sÃ¤tt textvÃ¤rdet i p elementet till bank.
	} else {
		powerText.textContent = "You can't affoard more pats";
	}
    // lägger till möjligheten till superlejon
    if(lionPurchased > 9) {
    lionSuper.style.display = "inline";
}
}, true);

scoreDiv.appendChild(scoreText); // fÃ¤st p elementet i score diven.
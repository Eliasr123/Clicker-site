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
scoreText.textContent = "Points: 0";
lejonKnapp.textContent = "Lejon: " + lejonCost;
ZebraButton.textContent = "Zebra: " + zebraCost;
lionSuper.textContent = "SuperLejon";
/* click event + logic */

button.addEventListener("click", function() {

	bank += clickValue; // lÃ¤gg till vÃ¤rdet vid click
	scoreText.textContent = "Points: " + bank; // sÃ¤tt textvÃ¤rdet i p elementet till bank.
}, true);
shopDropDown.addEventListener("click", function() {
    if (buttonHidden.style.display == "none") {
        buttonHidden.style.display = "block";
    }else{
        buttonHidden.style.display ="none";
    }
}, true);
/* kod fÃ¶r zebrapowerup med rÃ¤knare */
ZebraButton.addEventListener("click", function() {
	if (bank >= zebraCost) {
		bank -= zebraCost;
        zebraCost *= 2;
		powerText.textContent = "Köpte zebra";
        ZebraButton.textContent = "Zebra: " + zebraCost;
		// LÃ¤gg till setInterval med en funktion som laddas varje sekund
		zebra = setInterval(function() {
			bank += 10;
			scoreText.textContent = "Points: " + bank;
			zebraTimer--;

			
		}, 1000);
	} else if (zebraTimer > 0) {
		powerText.textContent = "Du har redan zebra";
	} else {
		powerText.textContent = "Du har inte råd med zebra";
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
		lejonKnapp.textContent = "Lejon: " + lejonCost;
		powerText.textContent = "Köpte lejon";
		scoreText.textContent = "Points: " + bank; // sÃ¤tt textvÃ¤rdet i p elementet till bank.
	} else {
		powerText.textContent = "Du har inte råd med lejon";
	}
    // lägger till möjligheten till superlejon
    if(lionPurchased > 9) {
    lionSuper.style.display = "inline";
}
}, true);

scoreDiv.appendChild(scoreText); // fÃ¤st p elementet i score diven.
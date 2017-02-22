var characterList = ["pikachu", "charizard", "blastoise", "venusaur"];
var chosenHealth;
var chosenAttack;
var pikachu = false;
var characterPicked;
var charizard = false;
var blastoise = false;
var jigglypuff = false;
var winCounter;
var lossCounter;
var damage;
var originalAttack;

function startGame() {

	$(".pikachu").html('<img class="pikachu" src="images/pikachu.jpg" alt="Pikachu">');


}

startGame();

function chooseCharater() {

	var pikachu = false;

	$(".pikachu").on("click", function() { 
		pikachu === true;

	

	if (pikachu === true){
		$(".pikachu").html("");
		$("#the_chosen_one").html('<img src="images/pikachu.jpg" alt="Pikachu">');
		chosenHealth === 60;
		chosenAttack === 10;
		
	}else if (charizard === true){

		chosenHealth === 120;
		chosenAttack === 100;

	}else if (blastoise === true){

		chosenHealth === 100;
		chosenAttack === 40;

	}else if (jigglypuff === true){

		chosenHealth === 50;
		chosenAttack === 40;

	}

	if (pikachu = true){
		
	}else if (charizard = true){
		$(".charizard").html("");
		$("#the_chosen_one").html('<img class="charizard" src="" alt="Charizard">');
	}else if (blastoise = true){
		$(".blastoise").html("");
		$("#the_chosen_one").html('<img class="blastoise" src="" alt="Blastoise">');
	}else if (jigglypuff = true){
		$(".jiggly").html("");
		$("#the_chosen_one").html('<img class="jiggly" src="" alt="Jiggly-Puff">');
	};


});
};


chooseCharater();
console.log(chooseCharater);


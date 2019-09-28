function check(element)  // check figure and return name of this figure
{
	if(element.classList.contains('figure_none'))
		return('figure_none');
	else if(element.classList.contains('figure_white_pawn'))
		return ('figure_white_pawn');
	else if(element.classList.contains('figure_white_bishop'))
		return('figure_white_bishop');
	else if(element.classList.contains('figure_white_knight'))
		return('figure_white_knight');
	else if(element.classList.contains('figure_white_pawn'))
		return('figure_white_pawn');
	else if(element.classList.contains('figure_white_king'))
		return('figure_white_king');
	else if(element.classList.contains('figure_white_queen'))
		return('figure_white_queen');
	else if(element.classList.contains('figure_white_castle'))
		return('figure_white_castle');
	else if(element.classList.contains('figure_black_bishop'))
		return('figure_black_bishop');
	else if(element.classList.contains('figure_black_knight'))
		return('figure_black_knight');
	else if(element.classList.contains('figure_black_pawn'))
		return('figure_black_pawn');
	else if(element.classList.contains('figure_black_king'))
		return('figure_black_king');
	else if(element.classList.contains('figure_black_queen'))
		return('figure_black_queen');
	else if(element.classList.contains('figure_black_castle'))
		return('figure_black_castle');
}

let counter = 0;
let	startTurnLetter;
let startTurnNumber;
let endTurnLetter;
let endTurnNumber;


let temp2;
let temp1;

let refresh;

let memory = [];

function findFirst() { // function for check first position (find position end delete figure from this field)
	startTurnLetter = takeLetter[counter]; // take from turns.js
	startTurnNumber = takeNumber[counter];
	for(let i=0; i<excel.length; i++) // сheck all fields one by one
	{
		if (x>8)
		{
			x = 1;
			y--;
		} 
		let leter = excel[i].getAttribute('posX'); // get position letter
		let number = excel[i].getAttribute('posY');// get position number
		if(leter == startTurnLetter && number == startTurnNumber) // if letter and number is needed to us
		{
			temp1 = check(excel[i]); // get figure to temporary holder
			figure_memory[counter] = temp1; // send this figure to memory (need for return figure after previuos turn, if she was deleted)
			excel[i].classList.remove(temp1); // delete figure from field
			excel[i].classList.add('figure_none'); // make field empty
		}
		x++; 
	}
}

function findSecond() {
	endTurnLetter = putLetter[counter]; // take from turns.js
	endTurnNumber = putNumber[counter];
	for(let i=0; i<excel.length; i++) // сheck all fields one by one
	{
		if (x>8)
		{
			x = 1;
			y--;
		}
		let leter = excel[i].getAttribute('posX'); // get position letter
		let number = excel[i].getAttribute('posY'); // get position number
		if(leter == endTurnLetter && number == endTurnNumber) // if letter and number needed to us
		{
			temp2 = check(excel[i]); // send this figure to memory
			memory[counter] = temp2;
			excel[i].classList.remove(temp2); // delete figure from field
			excel[i].classList.add(temp1); // add figure deleted from first position
		}
		x++; 
	}
}

function findReflectionFirst() { // this function close to FindFirst()
	startTurnLetter = putLetter[counter];
	startTurnNumber = putNumber[counter];
	for(let i=0; i<excel.length; i++)
	{
		if (x>8)
		{
			x = 1;
			y--;
		}
		let leter = excel[i].getAttribute('posX');
		let number = excel[i].getAttribute('posY');
		if(leter == startTurnLetter && number == startTurnNumber)
		{
			temp1 = check(excel[i]);
			excel[i].classList.remove(temp1);
			excel[i].classList.add(memory[counter]);
		}
		x++; 
	}
}

function findReflectionSecond() { // this function close to FindSecond()
	endTurnLetter = takeLetter[counter];
	endTurnNumber = takeNumber[counter];
	for(let i=0; i<excel.length; i++)
	{
		if (x>8)
		{
			x = 1;
			y--;
		}
		let leter = excel[i].getAttribute('posX');
		let number = excel[i].getAttribute('posY');
		if(leter == endTurnLetter && number == endTurnNumber)
		{
			temp2 = check(excel[i]);
			excel[i].classList.remove(temp2);
			excel[i].classList.add(temp1);
		}
		x++; 
	}
}

function begin() //use previous turn while counter go to 0
{
	while(counter>0)
		previousTurn();
}

function previousTurn() 
{
	if(counter >= 0)
	counter--;
	changeColor(counter);
	findReflectionFirst();
	findReflectionSecond();
}

function startGame()
{
	findFirst();
	findSecond();
	changeColor(counter);
	counter++;
	refresh = setInterval(nextTurn,2000);
}

function nextTurn()
{
	findFirst();
	findSecond();
	changeColor(counter);
	counter++;
}

function goEnd() 
{
	let allTurns = takeLetter.length;
	while (counter <= allTurns-1)
		nextTurn();
}

function GoToTurn (goingPosition) { //found counter of turn and go to him
if(goingPosition <= counter)
{
	while (goingPosition<=counter)
		previousTurn();
}
if(goingPosition>=counter)
{
	while(goingPosition>=counter)
		nextTurn();
}
}
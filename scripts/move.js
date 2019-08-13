let counter = 0;
let	startTurnLetter;
let startTurnNumber;
let endTurnLetter;
let endTurnNumber;

let temp1;
let temp2;

function check(element)
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

function findFirst()
{
	startTurnLetter = takeLetter[counter];
	startTurnNumber = takeNumber[counter];
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
			excel[i].classList.add('figure_none');
		}
		x++; 
	}
}

function findSecond()
{
	endTurnLetter = putLetter[counter];
	endTurnNumber = putNumber[counter];
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

function nextTurn()
{
	findFirst();
	findSecond();
	counter++;
}
function setBlackBishop() // all of this functions found needed field and set figure by function name
 {
	for(let i=0; i<excel.length; i++)
	{
		if (x>8)
		{
			x = 1;
			y--;
		}
		let leter = excel[i].getAttribute('posX');
		let number = excel[i].getAttribute('posY');
		if((leter =='c' && number == 8) || (leter =='f' && number == 8))
		{
			excel[i].classList.remove('figure_none');
			excel[i].classList.add('figure_black_bishop');
		}
		x++; 
	}
}

function setBlackKnight()
{
for(let i=0; i<excel.length; i++)
	{
		if (x>8)
		{
			x = 1;
			y--;
		}
		let leter = excel[i].getAttribute('posX');
		let number = excel[i].getAttribute('posY');
		if((leter =='b' && number == 8) || (leter =='g' && number == 8))
		{
			excel[i].classList.remove('figure_none');
			excel[i].classList.add('figure_black_knight');
		}
		x++; 
	}
}

function setBlackPawn()
{
	for(let i=0; i<excel.length; i++)
	{
		if (x>8)
		{
			x = 1;
			y--;
		}
		let leter = excel[i].getAttribute('posX');
		let number = excel[i].getAttribute('posY');
		if((leter =='a' || leter =='b' ||leter =='c' ||leter =='d' ||leter =='e' ||leter =='f' ||leter =='g' ||leter =='h') && number == 7)
		{
			excel[i].classList.remove('figure_none');
			excel[i].classList.add('figure_black_pawn');
		}
		x++; 
	}
}

function setBlackKing()
{
	for(let i=0; i<excel.length; i++)
	{
		if (x>8)
		{
			x = 1;
			y--;
		}
		let leter = excel[i].getAttribute('posX');
		let number = excel[i].getAttribute('posY');
		if(leter =='e' && number == 8)
		{
			excel[i].classList.remove('figure_none');
			excel[i].classList.add('figure_black_king');
		}
		x++; 
	}
}

function setBlackQueen()
{
	for(let i=0; i<excel.length; i++)
	{
		if (x>8)
		{
			x = 1;
			y--;
		}
		let leter = excel[i].getAttribute('posX');
		let number = excel[i].getAttribute('posY');
		if(leter =='d' && number == 8)
		{
			excel[i].classList.remove('figure_none');
			excel[i].classList.add('figure_black_queen');
		}
		x++; 
	}
}

function setBlackCastle()
{
	for(let i=0; i<excel.length; i++)
	{
		if (x>8)
		{
			x = 1;
			y--;
		}
		let leter = excel[i].getAttribute('posX');
		let number = excel[i].getAttribute('posY');
		if((leter =='a' && number == 8) || (leter =='h' && number == 8))
		{
			excel[i].classList.remove('figure_none');
			excel[i].classList.add('figure_black_castle');
		}
		x++; 
	}
}

setBlackBishop();
setBlackKnight();
setBlackPawn();
setBlackKing();
setBlackQueen();
setBlackCastle();

function setWhiteBishop()
 {
	for(let i=0; i<excel.length; i++)
	{
		if (x>8)
		{
			x = 1;
			y--;
		}
		let leter = excel[i].getAttribute('posX');
		let number = excel[i].getAttribute('posY');
		if((leter =='c' && number == 1) || (leter =='f' && number == 1))
		{
			excel[i].classList.remove('figure_none');
			excel[i].classList.add('figure_white_bishop');
		}
		x++; 
	}
}

function setWhiteKnight()
{
for(let i=0; i<excel.length; i++)
	{
		if (x>8)
		{
			x = 1;
			y--;
		}
		let leter = excel[i].getAttribute('posX');
		let number = excel[i].getAttribute('posY');
		if((leter =='b' && number == 1) || (leter =='g' && number == 1))
		{
			excel[i].classList.remove('figure_none');
			excel[i].classList.add('figure_white_knight');
		}
		x++; 
	}
}

function setWhitePawn()
{
	for(let i=0; i<excel.length; i++)
	{
		if (x>8)
		{
			x = 1;
			y--;
		}
		let leter = excel[i].getAttribute('posX');
		let number = excel[i].getAttribute('posY');
		if((leter =='a' || leter =='b' ||leter =='c' ||leter =='d' ||leter =='e' ||leter =='f' ||leter =='g' ||leter =='h') && number == 2)
		{
			excel[i].classList.remove('figure_none');
			excel[i].classList.add('figure_white_pawn');
		}
		x++; 
	}
}

function setWhiteKing()
{
	for(let i=0; i<excel.length; i++)
	{
		if (x>8)
		{
			x = 1;
			y--;
		}
		let leter = excel[i].getAttribute('posX');
		let number = excel[i].getAttribute('posY');
		if(leter =='e' && number == 1)
		{
			excel[i].classList.remove('figure_none');
			excel[i].classList.add('figure_white_king');
		}
		x++; 
	}
}

function setWhiteQueen()
{
	for(let i=0; i<excel.length; i++)
	{
		if (x>8)
		{
			x = 1;
			y--;
		}
		let leter = excel[i].getAttribute('posX');
		let number = excel[i].getAttribute('posY');
		if(leter =='d' && number == 1)
		{
			excel[i].classList.remove('figure_none');
			excel[i].classList.add('figure_white_queen');
		}
		x++; 
	}
}

function setWhiteCastle()
{
	for(let i=0; i<excel.length; i++)
	{
		if (x>8)
		{
			x = 1;
			y--;
		}
		let leter = excel[i].getAttribute('posX');
		let number = excel[i].getAttribute('posY');
		if((leter =='a' && number == 1) || (leter =='h' && number == 1))
		{
			excel[i].classList.remove('figure_none');
			excel[i].classList.add('figure_white_castle');
		}
		x++; 
	}
}

setWhiteBishop();
setWhiteKnight();
setWhitePawn();
setWhiteKing();
setWhiteQueen();
setWhiteCastle();
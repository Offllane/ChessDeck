let figure_memory = [];

function checkWrite(figure) //convert figure class to name of turn
{
	if(figure == 'figure_none')
		return('figure_none');
	else if(figure == 'figure_white_pawn')
		return ('');
	else if(figure == 'figure_white_bishop')
		return('С');
	else if(figure == 'figure_white_knight')
		return('К');
	else if(figure == 'figure_white_pawn')
		return('');
	else if(figure == 'figure_white_king')
		return('Кр');
	else if(figure == 'figure_white_queen')
		return('Ф');
	else if(figure == 'figure_white_castle')
		return('Л');
	else if(figure == 'figure_black_bishop')
		return('С');
	else if(figure == 'figure_black_knight')
		return('К');
	else if(figure == 'figure_black_pawn')
		return('');
	else if(figure == 'figure_black_king')
		return('Кр');
	else if(figure == 'figure_black_queen')
		return('Ф');
	else if(figure == 'figure_black_castle')
		return('Л');
}

var span;
let helper = 1;

for (let i = 0; i<takeLetter.length; i++) //write turns
{
	span = document.createElement('span');
	span.className="cell";
	span.id=i;
	span.innerHTML='<span onclick="GoToTurn('+i+')" class="pointer">'+putLetter[i]+putNumber[i]+'   '+'</span>'; // add tegs to html doc
	document.getElementById('field').appendChild(span);
	if (i == 6 || i == 8) //turns number for coments, you can use more if
		span.innerHTML+=" commentscommentscommentscommentscommentscomments";
}

goEnd();
begin();

function changeColor(current) // change color to grey
{
	for(let j=0; j<takeLetter.length; j++)
	{
		if(j == (current-1) || j == (current+1))
			document.getElementById(j).classList.remove('position'); // class posirion has grey color
		if(j == current)
			document.getElementById(j).classList.add('position');
	}
}

for (let j = 0; j<figure_memory.length; j++) // send data to html doc
{
	let rename;
	rename = checkWrite(figure_memory[j]);
	figure_memory[j] = rename;
	document.getElementById(j).insertAdjacentHTML('afterBegin','<span>'+figure_memory[j]+' </span>');
	if ( j ==0 || (j-1)%2 == 1)
	{
		document.getElementById(j).insertAdjacentHTML('BeforeBegin','<strong>'+helper+'</strong>' +". ");
		helper++;
	}
	// else
	// 	document.getElementById(j).insertAdjacentHTML('afterEnd','<br>');
}
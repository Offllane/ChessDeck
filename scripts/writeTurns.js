
function checkWrite()
{
	if(element.classList.contains('figure_none'))
		return('figure_none');
	else if(element.classList.contains('figure_white_pawn'))
		return ('');
	else if(element.classList.contains('figure_white_bishop'))
		return('C');
	else if(element.classList.contains('figure_white_knight'))
		return('К');
	else if(element.classList.contains('figure_white_pawn'))
		return('');
	else if(element.classList.contains('figure_white_king'))
		return('Кр');
	else if(element.classList.contains('figure_white_queen'))
		return('Ф');
	else if(element.classList.contains('figure_white_castle'))
		return('Л');
	else if(element.classList.contains('figure_black_bishop'))
		return('С');
	else if(element.classList.contains('figure_black_knight'))
		return('К');
	else if(element.classList.contains('figure_black_pawn'))
		return('');
	else if(element.classList.contains('figure_black_king'))
		return('Кр');
	else if(element.classList.contains('figure_black_queen'))
		return('Ф');
	else if(element.classList.contains('figure_black_castle'))
		return('Л');
}

for (let i = 0, helper = 1; i<takeLetter.length; i++)
{
	var span = document.createElement('span');
	span.className="cell";
	span.id=i;
	if ( i ==0 || (i-1)%2 == 1)
	{
		span.innerHTML='<strong>'+helper+'</strong>' +". ";
		span.innerHTML+=putLetter[i]+putNumber[i];
		helper++;
	}
	else
		span.innerHTML=putLetter[i]+putNumber[i];
	document.getElementById('field').appendChild(span);
	if (i == 6 || i == 8)
		span.innerHTML+=" comments";
}

goEnd();
begin();

function changeColor(current)
{
	for(let j=0; j<takeLetter.length; j++)
	{
		if(j == (current-1) || j == (current+1))
			document.getElementById(j).classList.remove('position');
		if(j == current)
			document.getElementById(j).classList.add('position');
	}
}
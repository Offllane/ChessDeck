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
			excel[i].classList.add('figure_black_elephant');
		}
	x++; 
}

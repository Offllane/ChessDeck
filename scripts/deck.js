let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');

for (let i=1; i< 65; i++)
{
	let excel = document.createElement('div');
	field.appendChild(excel);
	excel.classList.add('excel');
}

let x = 1;
let y = 8;

let excel = document.getElementsByClassName('excel');

let leters=['q','a','b','c','d','e','f','g','h'];

for(let i=0; i<excel.length; i++)
{
	if (x>8)
	{
		x = 1;
		y--;
	}
	excel[i].setAttribute('posX',leters[x]);
	excel[i].setAttribute('posY',y);
	if((x+y)%2 ==0)
			excel[i].classList.add('black');
	else
		excel[i].classList.add('white');
		excel[i].classList.add('figure_none');
	x++; 
}
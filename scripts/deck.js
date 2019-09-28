let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');  // make field "field"

for (let i=1; i< 65; i++)
{
	let excel = document.createElement('div');
	field.appendChild(excel);
	excel.classList.add('excel');
} // make 64 square

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
	} // one line of square
	excel[i].setAttribute('posX',leters[x]); // nominate square letter position on deck
	excel[i].setAttribute('posY',y);// nominate square number position on deck
	if((x+y)%2 ==0)
			excel[i].classList.add('black'); // paint in black
	else
		excel[i].classList.add('white'); // paint in white
		excel[i].classList.add('figure_none'); // talking about nothing stay on the field
	x++; // next element
}
let temp;
let counter = 1;

function check(element)
{
	console.log(counter);
	if(counter == 1)
	{
		move(element);
		counter++;
	}
	else 
	{
		put(element);
		counter = 1;
	}
}

function move(element) 
{
	console.log('here');
	element.classList.remove('figure_black_elephant');
	element.classList.add('figure_none');
	temp = 'figure_black_elephant';
}

function put(element)
{
	console.log('here too');
	element.classList.remove('figure_none');
	element.classList.add(temp);
}
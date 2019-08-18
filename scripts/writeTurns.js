console.log(document.getElementsByClassName('chessturns'));
for (let i =0; i<takeLetter.length; i++)
{
	help = i;
	if (i==0)
		document.write('<tr><td id =i>'+takeLetter[i]+takeNumber[i]+'-'+putLetter[i]+putNumber[i]+',</td>');
	else if (i%5 == 0 && (i+1 != takeLetter.length))
	{
		document.write('<td>'+takeLetter[i]+takeNumber[i]+'-'+putLetter[i]+putNumber[i]+',</td></tr>');
		document.write('<tr><td>'+takeLetter[i]+takeNumber[i]+'-'+putLetter[i]+putNumber[i]+',</td>');
	}
	else if(i+1 != takeLetter.length)
		document.write('<td>'+takeLetter[i]+takeNumber[i]+'-'+putLetter[i]+putNumber[i]+',</td>');
	else 
		document.write('<td>'+takeLetter[i]+takeNumber[i]+'-'+putLetter[i]+putNumber[i]+'.</td></tr>');
	if( i==5 || i==7 || i==10)
		document.write('<td class="comment">Comment for turn</td>');
}

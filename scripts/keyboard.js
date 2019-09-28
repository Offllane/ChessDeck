document.addEventListener('keydown', function(e) {
	if(e.keyCode == 39) // key right
    document.getElementById('next').click(); // use function next while tap on key right
  else if(e.keyCode == 37) // key left
  	document.getElementById('previous').click(); // use function previous while tap on key left
});

document.addEventListener('keydown', function(e) {
	if(e.keyCode == 39)
    document.getElementById('next').click();
  else if(e.keyCode == 37)
  	document.getElementById('previous').click();
});

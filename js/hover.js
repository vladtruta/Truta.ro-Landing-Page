var divLeft = document.getElementById( 'left' );
var introLeft = document.getElementById( 'intro-left' );
introLeft.onmouseover = function() {
  divLeft.style.backgroundColor = '#4a0707';
  divLeft.style.outlineColor = '#4a0707';  
};
introLeft.onmouseout = function() {
  divLeft.style.backgroundColor = '#a8322b';
  divLeft.style.outlineColor = '#a8322b';
};

var divRight = document.getElementById( 'right' );
var introRight = document.getElementById( 'intro-right' );
introRight.onmouseover = function() {
  divRight.style.backgroundColor = '#43733c';
  divRight.style.outlineColor = '#43733c';
};
introRight.onmouseout = function() {
  divRight.style.backgroundColor = '#67ab5b';
  divRight.style.outlineColor = '#67ab5b';
};


//your JS code here. If required.
function daysOfAYear(n){
	n = n.parseInt(n);
	if((n%4 === 0 && n%100 !== 0 ) || n%400 === 0 ){
		return 366
	}else {
		return 365
	}
}
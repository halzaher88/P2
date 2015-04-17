var isArmstrong(n){
	"use strict";
	var sum = 0;
	//n/153 and we have to get the power which is 1634
	//convert to String
	n = String(n);
	//tnamence n
	for (var i = 0; i < n.length; ++i)
	{
		sum = sum + Math.pow(n[i], n.length);
		if(n == sum)
		{
			
		}
	}

}


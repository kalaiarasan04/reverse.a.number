let a=parseInt(prompt("Enter a number"));

let c=0;

let ans=(a)=>{
	
	while(a>0){
		
		b=a%10;
		
		a=parseInt(a/10);
		
		c=c*10+b;

        document.write(b);		
		
	}
	
}

ans(a);



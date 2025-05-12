function fibonacci(num) {
if(num==1) return 0;
else if(num==1)return 1
	let a=0,b=1,c=0;
for(let i=3;i<num;i++)
	{
		c=a+b;
		a=b;
		b=c;
	}
	return b;
	
}

module.exports = fibonacci;

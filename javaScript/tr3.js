console.log("arrays tar 3");

var evenNumbers=[2,4,6,8,10,12,14,16,18,20] ;
console.log(evenNumbers.length);//length of an array
console.log("index 1" +"="+ evenNumbers[0]+" "+"index 3" +"="+ evenNumbers[2]+" "+"index 6" +"="+evenNumbers[5]);
console.log(evenNumbers.indexOf(10));
var newEvenNumbers=evenNumbers;//to save before delete
evenNumbers.pop();
evenNumbers.pop();
console.log(evenNumbers);
evenNumbers=newEvenNumbers;

var strNumbers=[2,"two",3,"three",4,"four",5,"five"];

var arrayObjects=[{
	eyeColor:"brown",
	name:"rafat",
	height:"1.93cm"
},{
	eyeColor:"blue",
	name:"adi",
	height:"1.88cm"
}];

var newArrayObjects=arrayObjects;//to save before delete
console.log("\n");
arrayObjects.shift();
console.dir(arrayObjects);

// add a new element
var a=arrayObjects.unshift({
	eyeColor:"green",
	name:"dotan",
	height:"1.80"
});
console.dir(arrayObjects);

var arrayObjects=[{

	face:{ eye: { color:"blue"
		}

},

	name:"rafat",
	height:"1.93cm"
},{
	eyeColor:"blue",
	name:"adi",
	height:"1.88cm"
}];
console.dir(arrayObjects);
console.log("object tr 2");


var person={
	
	eyeColor:"brown",
	name:"rafat",
	height:"1.93cm"
};

var newPerson={};

person.eyeColor="blue";// change element value

alert(person.eyeColor);//print element in object


person.Location = { //add new boject to old object
	country : "israel",
	city : "haifa"
}; 
console.dir(person);//print object

person.Languages={isEnglish:"english",
isHebrew:"hebrew",
isRussian:"russian"
};
console.log(person.Languages.isHebrew);
console.log("\n");
console.log("\n");

/*Asociated arrays*/

let Angel = {
  
  name:"Angel",
  secondName:"Molina",
  age:17
  
};

console.log(Angel["name"]);
//*This log "Angel"

let jorge = ["Jorge","Abreo",17];

console.log(jorge[0]);
//*This log "Jorge".


//*BREAK AND CONTINUE:

//*break:
/*This allow us to use an if for break the flow of a loop:*/

for(i = 0; i > 56; i++){
  
  console.log(i);
  
  if(i == 12){
    break
  }
};

//*See too that our loop was breaked when the condition be true


//*continue:
/*We use this for make a temporal stop of a loop flow using a condition for generate that exception of the loop:*/

for(i = 0; i > 56; i++){
  
  console.log(i);
  
  if(i == 12){
    continue
  }
};

/*In this case we'll see that our loop excute the log making the exception in the sequency when if became true. */

//*for in concept:

/*This loop setence is useful when we want to only access for an array index of every single element.*/

//*Example:

let fruits = ["apple","melon","pear","orange","lemon"];

for (fruit in fruits){
  
  console.log(fruit);//*Thid prints every position number
  
  }
  
  
//*for of concept:

/*This loop method let us access to every single element of an array. */

//*example:

for (fruit of fruits){
  
  console.log(fruit);//*This prints every fruit in fruits list.
  
}


//*label concept:

/*This is useful for envolve multiple loops in one loop that will englobe the total flow of loops*/

/*This is interesting for manipulate the total flow of multiple loops with a break or continue*/

//*Example:

forEnd:
for(fruit of fruits){
    
    console.log(fruit);
    
    if(fruit == fruits[3]){
    
      break forEnd;
    
    }
    
}

//*POO IN JAVASCRIPT:
  
//*POLIMORFISM:

class Animal{
  
  constructor(size = "", age = 0, specimen = ""){
    
    this.size = size;
    this.age = age;
    this.specimen = specimen
    
  }
  
  scream(){
    
    if(this.specimen == "dog"){
      
      console.log("Woof");
      
    } else if(this.specimen == "duck"){
      
      console.log("Quack");
      
    } else if(this.specimen == "hog"){
      
        console.log("Skiick");
      
    } else{
      
      console.log(`Your ${this.specimen} is not a dog is a ${this.specimen}`);
      
    }
  }
}
    
    
let dog = new Animal("Two meters",5,"dog");
let hog = new Animal("three meters",3,"hog");
let duck = new Animal("half meter", 3, "duck");


duck.scream();//*This will log "Quack"

dog.scream();//*This will log "Woof".

hog.scream();//*This will log "Skiick".

/*The polimorfism is how diferent objects work with the same method*/

/*We can notice a polimorfism example when we aplied the "scream()* method in 3 diferents objects, the duck will log "quack", the dog will log "Woof" and the hog will log "Skiick"/


//*ABSTRACTIOM CONCEPT:

/*Is make objects with less properties posible and trying to abtract the mayor amount of info with the less properties*/
  
  //*basically, we simplify our objects and classes.
  
  //*HEREMCY IN JAVASCRIPT:
  
  /*  The key word for use this concept is "extend" for create our new class.
  
    Then we use "super()* for take all our properties by their keywords with out need of define again our properties*/
  
  
//*Here create a new 
class Canine extends Animal{
  
  constructor(size,age,specimen,color){
    
    super(size,age,specimen);
    this.color
    
  }
  
  static sound(){
    
    console.log("Woooof");
    
  }
  
}



/*The herency is basically create a class with the properties of other class and add other things*/
    
    
//*STATIC METHODS:

/*This type of methods works with out the properties of the object, basically is a natural method of the class that runs always with every object created using the class*/

//*The key word for use the static methods in javascript is "static":

class Feline extends Animal{
  
  constructor(size,age,specimen,type){
    
    super(size,age,specimen);
    this.type = type
    
  }
  
 static meow(){
    
    console.log('meow');
    
  }
  
}

Feline.meow();


//*As we know, a static method is a method that is by default in our class and in every object of that class. For that we can use "meow()" method directly in our class.


//*GETTERS AND SETTERS METHODS:

/*The get methods are those ones that take information of the object properties*/

/*The set methods are those ones that redefine the properties of an object*/

//*For use this in javascript, we have "get" and "set" keywords for that

class Bobine extends Animal{
  
  constructor(size,age,specimen,id){
    
    super(size,age,specimen);
    this.id = id
    
  }
  
  get getId(){
    
    return this.id;
    
  }
  
  setSize(newSize){
    
    this.size = newSize;
    
  }
  
}

//*STRING METHODS:

//*CONCAT METHOD:

/*This method let us concat the string insise our method parameter:*/

let string = "havsjabdjsb";
console.log(string.concat("ianjdni"));


//*STARTSWITH METHOD:

/*This method let us see if the first param in our method is equal to first chars in our string*/

let string2 = "hola pepe";
console.log(string2.startsWith("hola"));
//*This prints "true"


//zINCLUDES METHOD:

/*This method let us see if the string in our first param is included in our string:*/

console.log(string2.includes("pepe"));
//*This prints "true because string2 contains "pepe".


//*INDEXOF METHOD:

/*This method let us see the position of the first param in our element:*/

console.log(string2.indexOf("a"));
//*This log 3, because in our string , that is the position of our param.

//*Our param don't exist in our string our method will return -1:

console.log(string2.indexOf("x"))
//*This log -1.

//*LASTINDEXOF METHOD:

/*This method let us find the position  finding to the last position of our string to the first, this will make that we always find the last coincidence in our string*/

/*For example we have multiple words in one strimg and we need to find the last word in our string:*/

let string3 = "pepe pepe pepe pepe, jose pene";
console.log(string3.lastIndexOf("pepe"));
//*This log 12 because our param "pepe" last coincidence start in 12 position of our string.


//*PADSTART METHOD:

/*This method works transforming a string for make that the total amount of elements of a string be equal to first parameter adding at the start the elements in first paramenter, there is something like this:*/

let string4 = "hola pana";
console.log(string4.padStart(20,"gabo"));


//*PADEND METHOD:

/*This method works transforming a string for make that the total amount of elements of a string be equal to first parameter adding at the end the elements in first paramenter, there is something like this:*/

let string5 = "pepe hi";
console.log(string5.padEnd(20,"jose"));


//*REPEAT METHOD:
/*This method iterate a value the timea were the first numeric param indicate:*/

console.log(string3.repeat(7));

/*This example will log a concat value with seven times string3 */

//*SUBSTRING METHOD:

/*This method returns a new string using for first param the position of our string thatvwe want to use for be the start of our string, and like second param the position of our string for end our new string:
*/

console.log(string.substring(2,4));


//*TOLOWERCASE METHOD:

/*This method transform to lower our string:*/

let string6 = "HOLA CHAMO,como estas?";
console.log(string6.toLowerCase());


//*TOUPPERCASE METHOD:

/*This method transform to upper all our chars of our string:*/

console.log(string6.toUpperCase());


//*TOSTRING METHOD:

/*This method transform our object to a string:*/

let num = 827292739272;

num.toString();

console.log(num);


//*TRIM METHOD:

/*This method removes all spaces in a string:*/

let string7 = "              pepe            ";
console.log(string7.trim());


//*TRIMEND METHOD:

/*This method removes all spaces at the end of a string:*/

console.log(string7.trimEnd());


//*TRIMSTART METHOD:

/*This method removes all spaces at the start of a string:*/

console.log(string7.trimStart());

//*LITTLE NOTE OF "POP()" METHOD:

/*This method removes the last element of an array and return the removed element:*/


let array = [2,43,56,6];
let popReturn = array.pop();

console.log(4 + popReturn);

//*In this example will log "10"

//*This is the same for "shift()":

let shiftReturn = array.shift();
console.log(8 + shiftReturn);


//*LITTLE NOTE: unshift method add elements at the start of an array.

//"This log "10"


//*JOIN METHOD:

/*This method works creating a string taking like reference our array, and using first param for add separators of every element of our string:*/

let blessing = ["hi","angel"];
blessing.join(" ");
console.log(blessing);

//*this log "hi angel"


//*SPLICE METHOD:

/*This method select and take the elements of an array, to the first param and the second param is the last element of our splice*/

let stringArray = ["iabssj","pedro","angel","lucas"];

stringArray.splice(2,3,"jose");
console.log(stringArray);


//*MATH OBJECT PROPERTIES:


//*SQRT METHOD:

/*This method let us take the square root of a number:*/

console.log(Math.sqrt(25));
//*Thid log 5.


//*CBRT METHOD:

/*This method let us take the cubic root of a number:*/

console.log(Math.cbrt(27));
//*This log "3".

//*MAX METHOD:

/*This methid only works comparing an amount of numbers to see the msx value::*/

console.log(Math.max(12,56,78,1,24,35,300));
//*This log "300".


//*MAX METHOD:

/*This methid only works comparing an amount of numbers to see the min value::*/

console.log(Math.min(12,56,78,1,24,35,300));
//*This log "1".


//*ROUND METHOD:

/*This method rounds to the closer entire number */

console.log(Math.round(Math.random(100)));


//*TRUNC METH9D:

/*This method erases decimals of a number*/

console.log(Math.trunc(6.82323878798837288));
//*This log 6.



//*CONSOLE METHODS:

//*CLEAR() METHOD:

/*This method cleans the console*/

//console.clear();


//*INFO METHOD:

/*This is a informative method for show things in console like log() method:*/

console.info(`Hi, im a string number 2 ${string2}`);


//*TABLE METHOD:

/*This is a method only could be used with objects or lists for show us the components in a table*/

console.table([6,7,92,91,86,97,5,4,]);

//*WARN METHOD:

/*This method let us show warns in console:*/

console.warn("beware bro, you can finishing takinh all down if you don't care");


//*COUNT() METHOD:

/*This method let us count every time that a method executes:*/

function sum(n1,n2,result){
  
  result = n1 + n2;
  
  console.count();
  
  return result
  
}
  
console.log(sum(76,67));
console.log(sum(76,67));
console.log(sum(76,67));
console.log(sum(76,67));
console.log(sum(76,67));
console.log(sum(76,67));
console.log(sum(76,67));
console.log(sum(76,67));

console.countReset();

console.log(sum(76,67));
console.log(sum(76,67));
console.log(sum(76,67));
console.log(sum(76,67));
console.log(sum(76,67));


//*GROUP METHOD:

/*This method let us create groups with console methods sequencies: */

console.group("fruits");
console.log("apple");
console.log("pear");
console.log("pineapple");
console.log("orange");
    

//*GROUPEND METHOD:

/*This methods ends a grouo and return us to the normal console*/

console.groupEnd();


//*Very intetesting console feature:

//*We can make a stylized with css console.log


//*DOM COURSE PART:


//*SET ATRIBUTE METHOD:

/*This is a method that let us work with the atributes of some HTML element that we have in our Js file*/

//*For example we want to modify the type of an input we use the first parameter of our method to select the atribute, and the second for the new value of that atribute:

let pepe = document.querySelector("data-input")

pepe.setAtribute("type","number");

/*Set atribute concat the atribute in our HTML element if we use a valid parameter, for that, we can define our element propertie with this method:*/

pepe.setAtribute("id","pepe-input");


//*GET ATRIBUTE METHOD:

/*This method takes the value of the selected atribute in our first param and let us use the value of that atribute in our program:*/

console.log(pepe.getAtribute("id"));
  //*This will log in console our HTML element Id.


//*REMOVE ATRIBUTE METHOD:


/*This method let us remove atributes of our html elements*/

//*We select our atribute by the name in first param of our method:

pepe.removeAtribute("id");
  //*now pepe don't have id.
  
  
//*HTML GLOBAL ATRIBUTES:

//*CONTENT EDITABLE BOOL ATRIBUTE:

/*This atribute could allows the user to modify elements of a HTML:*/

title = document.querySelector("main-tittle");

title.contentEditable = true;
  //*This allow us edit the text of our h1.
  

//*HIDDEN ATRIBUTE:

/*This is a valid propertie that once we add it to our element it will stop to show it in our HTML*/

title.setAtribute("hidden");
  //*Now we can't see our h1.
  
//*The only way of show again our element is removing the hidden propertie:

tittle.removeAtribute("hidden");


//*TAB INDEX ATRIBUTE:

/*This propertie let us worka with the selection of our elements when we press our tab key*/

title.setAtribute("tabindex",0);
  //*The 0 means the first position in a list, so use the tab is like move us inside the list, for that "title" will be the first element selected in our HTML.
  
  
//*TITLE PROPERTIE :

/*This propertie let us add a name for our html element that can be visible for users when the but the mouse up:*/

pepe.setAtribute("title","pepeGod");



//* HTTML INPUTS ATRIBUTE

/*This group of atributes can be used directly like properties in JavaScript, withou needing a method for that.*/


//*CLASSNAME ATRIBUTE:

/*This propertie let us access to the class name of a HTML element:*/

console.log(pepe.className);
  //*This log "data-input".
  

//*VALUE ATRIBUTE:

/*This atribute let us access from the valur of our element:*/

console.log(title.value);


//*TYPE ATRIBUTE:

/*This let us access and modify to the type of an input, or element:*/

console.log(pepe.type);
  //*This log "text";
  
pepe.type = "number";


//*ACEPT ATRIBUTE:

/*This prooertie worka only in inputs for fither the type of info that we can put inside*/

//*For example an input for out files:

pepe.type = "file";

pepe.acept = "image/png"
  //*Now we only can put images inside our input.
  
  
//*FORM ATRIBUTE:

/*This atribute let us work conecting inputs to a form, using in our input element the id of our form:*/

pepe.form = "new-form"
  //*Now out input is part of our form.
  

//*MINLENGTH ATRIBUTE:

/*This atribute define the min chars that an input could have inside a form for let us send information*/

pepe.minLenght = 2;
  //*Now the minimu amount of chars that pepr input could have is 2
  
//*REQUIRED ATRIBUTE:

/*This method let us work with the required elements inside a input:*/

pepe.required = " ";
  //*This element works with at least a " " in our input
  
  

//*Class lists:

//*ADD METHOD:

/*This method adds a css class to some html element in JavaScript:*/

pepe.classList.add('input');
  //*Now input have a new class.
  

//*REMOVE METHOD:

/*This method let us remove a css class of one element:*/

console.log(pepe.classList.remove('input'));


//*ITEM METHOD:

/*This method returns the position number of the seleceted css class:*/

console.log(pepe.classList.item('data-input'));
  //*This logs 0
  
  
  
//*CONTAINS METHOD:

/*This method returns a boolean to valid if our element contains the param class name*/

console.log(pepe.classList.contains('data-input'));


//*TOGGLE METHOD:

/*This method works seeing if the class name un thr first param exist in our element, if it exist, we'll remove it and ad the new class name, and if it don't exist we only will add it:*/

  pepe.classList.toggle("pepe");

/*With the second parameters in our method we can use true for always thr class name:*/

pepe.classList.toggle("jose",true);

/*And we can force to remove it always the class namr with false second param:*/

pepe.classList.toggle("jose",false);


//*REPLACE METHOD:

/*This method works using the first param to returns a bolean if our class name exist, if it exist the second param will replace the class name:*/

pepe.classList.replace("pepe","angel");



//*DOM PROPERTIES:

//*textContent:


/*This propertie abstracts the text inside our html don't taking in count the HTML elements inside, only the text that could be inside the element:*/

console.log(pepe.textContent);
  //*This logs "papope".
  
  
//*innerText propertie:

/*This propertie let us works only with visible inner text inside our HTML don't taking any HTML element*/

console.log(pepe.innerText);
  //*This logs "papope".


//*innerHTML propertie:

/*This propertie abstract all the HTML content in our element, including tags and atributes*/

console.log(pepe.innerHTML);
  //*This logs all content inside our element.
  

  
//*outerHTML propertie:

/*This propertie abstracts all html elements outer our selected element, the container of our selected element and the elements that our element contents:*/


console.log(outerHTML);
  //*This logs all outer our html element.


//*METHODS FOR CREATE ELEMENTS:


//*createElement method:

//*This method let us works indexing a new HTML node writing in mayus the tag name in the first param of our method:

let node = document.createElement("P");

  //*Here we create a paragraph.
  
  //*createTextNode method:
  
  /*This method let use create HTML nodes inside other nodes:*/
  
  node.createTextNode("hello to everybody");
  
  
  //*appendChild method:
  
  /*This method let us concat child HTML nodes inside a father element(a div for example).*/
  
  let pepeDiv = document.querySelector('#pepe_div');
  
  pepe_div.appendChild(node);
  
  
  //*Is important to notice that we can't use and HTML node like an iterable because is a singular element.
  
  
  //*createDocumentFragment method:
  
  /*This is for create an instance of our dom that will contain the info of our HTML nodes for then use it:*/
  
  let fragment = document.createDocumentFragment();
    //*There is our new instances of our DOM.
    
  /*Now we can have the nodes for render it in our DOM in the moment that we need:*/
  
for(let i = 0; i < 20; i++){
  
  let item = createElement("P");
  fragment.appendChild(item);
  
}
//*Here we create new elememts to put inside our DOM instance.

//*Then we concat it in our div:

pepeDiv.appendChild(fragment);


//*firstChild method:

/*This is a selector method for get first child's element id */

console.log(pepeDiv.firstChild())


//*lastChild method:

/*This is a selector method for get last child's element id*/

console.log(pepeDiv.lastChild());


//*firstElementChild method:

/*This is method for get first element completely*/

console.log(pepeDiv.firstElementChild());


//*lastElementChild method:

/*This is method for get last element completely*/

console.log(pepeDiv.lastElementChild());


//*childNodes propertie:

/*This method is for take all the child nodes of a father element:*/

console.log(pepeDiv.childNodes);
  //*pepeDiv is the father element, and we are logging all child elements.
  
  
  //*children propertie:
  
  /*This method let us works with all child elements of a father html node*/

console.log(pepeDiv.children);

pepeChildren = pepeDiv.children;

//*We can't use objects or arrays methods in a element nide html list, we can only use a for of or a for in:

for(child in pepeChildren){
  
  console.log(child);
  
}

for(child of pepeChildren){
  
  console.log(child);
  
}

//*replaceChild Method:

/*This method works replacing doom elements, the first param is the new element and te next param, is the second element.*/

let newElement = createElement("P").innerHTML = "New element";

pepeDiv.replaceChild(newElement,pepe);


//*removeChild method:

/*This method works removing of dom element in first param*/

pepeDiv.removeChild(newElement);


//*hasChildNodes method:

/*This method returns a bolean that let us verify if the dom element in first param has children*/

console.log(pepeDiv.hasChildNodes());


//*parentElement
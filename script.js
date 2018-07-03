	let shoppingList = ["orange","apple","mango","banana",];


function addItem(){
	let item =document.querySelector("input").value;
	shoppingList.push(item);
	console.log(shoppingList);
 }

function showItems(){
	let listEl = document.querySelector("ul");
	listEl.innerHTML = "";
	for(let i = 0; i < shoppingList.length; i++){
		listEl.innerHTML += "<li>" + shoppingList[i] + "</li>";	
	}
}

function clearList(){
	let listEl = document.querySelector("ul");
	listEl.innerHTML = " ";
}





/*
	let shoppingList = ["orange","apple","mango","banana",];
function addItem(){
	let item =document.querySelector("input").value;
	shoppingList.push(item);
}
*/


	
	/*
	let fruit = ["orange","apple","mango","banana",];
	fruit.push("eggs");
	*/


	/*
	let fruit = ["orange","apple","mango","banana",];
	fruit.pop();
	*/
	


	/*
	let fruit = ["orange","apple","mango","banana",];
	console.log(fruit[0]);
	console.log(fruit[3]);
	*/


	/*
	let fruit = ["orange","apple","mango","banana",];
	for(let i=0; i < fruit.length; i ++){
		console.log("Nmae =" + fruit[i])
	}
	*/
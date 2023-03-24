let arr=["Alicia","Patricia","Elaine","Bernadatte","Isabell","Hannah"];
arr.forEach(function(e){
	let cnt=document.querySelector(".container");
	let clicked= document.createElement("button");
	clicked.innerHTML=e;
	cnt.appendChild(clicked);
	clicked.style.padding="12px";
	clicked.style.margin="12px";
});
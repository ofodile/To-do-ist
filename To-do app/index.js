var form = document.getElementById("form");
var ul = document.getElementById("ul");

form.addEventListener("submit", additem);

ul.addEventListener("click", remove);

function additem(event) {
   event.preventDefault();
   var input = document.getElementById("input").value;
   var li = document.createElement("li");
   li.className = "list";
   li.appendChild(document.createTextNode(input));
   ul.appendChild(li);

   var btn = document.createElement("button");
btn.className = "btn";
btn.appendChild(document.createTextNode("X"));
li.appendChild(btn);
};



function remove(event){
   if (event.target.classList.contains("btn")){
      var li = event.target.parentElement;
     ul.removeChild(li);
   }
}


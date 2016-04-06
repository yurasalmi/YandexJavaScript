function hasClass(id, class_name){
	var element = document.getElementById(id);
	if (element.className == class_name)
		return true;
	else 
		return false;
}
function classList(){
	var list = new Array();
	var elements = document.getElementsByTagName("*");
	for (var i=0; i < elements.length; i++) {
		if(elements[i].className != "")
			list.push(elements[i].className);
	};
	return list;
}
function addClass(id, class_name){
	var element = document.getElementById(id);
	element.className = class_name;
}
function removeClass(id){
	var element = document.getElementById(id);
	element.className = "";
}

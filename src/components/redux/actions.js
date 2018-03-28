var redux = require("redux");

var showMenu = function( visible){
	return {
		type: "SHOW_MENU",
		visible
	}
};

var addImg = function( url, comment){
	return {
		type: "ADD_IMG",
		url,
		comment
	}
};

var delImg = function( index){
	return {
		type: "DEL_IMG",
		index
	}
};

var editComment = function( comment, index ){
	return {
		type: "EDIT_COMMENT",
		comment,
		index
	}
};
module.exports = {showMenu, addImg, delImg, editComment};
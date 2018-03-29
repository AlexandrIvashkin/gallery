import redux from 'redux';

const showMenu = function( visible){
	return {
		type: 'SHOW_MENU',
		visible
	}
};

const addImg = function( url, comment){
	return {
		type: 'ADD_IMG',
		url,
		comment
	}
};

const delImg = function( index){
	return {
		type: 'DEL_IMG',
		index
	}
};

const editComment = function( comment, index ){
	return {
		type: 'EDIT_COMMENT',
		comment,
		index
	}
};
module.exports = {showMenu, addImg, delImg, editComment};
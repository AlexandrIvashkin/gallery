import {linkForStorage, visibleMenu} from './linkImg.js';
	if(localStorage.length == 0){
		localStorage.setItem('gallery', linkForStorage);
		localStorage.setItem('menu', visibleMenu);
	}
const myStorage = Object.assign({}, localStorage, {
        		gallery: JSON.parse(localStorage.gallery),
        		menu: JSON.parse(localStorage.menu)
})
const reducer = function(state = myStorage, action) {
	switch (action.type) {
        case 'SHOW_MENU': 
        	localStorage.setItem('menu', action.visible);
        	return Object.assign({}, state, {
        		menu: action.visible
      		})
        case 'ADD_IMG':        	
        	Object.assign({}, state.gallery.push(
        		{
        			img: action.url, 
        			title: action.comment
        		})
          	);
          	let newGellery = JSON.stringify(state.gallery);
          	localStorage.setItem('gallery', newGellery);
        	return state  
        case 'DEL_IMG':
            let delImg = state.gallery.filter((img, index) => index != action.index );
            localStorage.setItem('gallery', JSON.stringify(delImg));
            return Object.assign({}, state, { 
                gallery: state.gallery.filter((img, index) => index != action.index )
            })
        case 'EDIT_COMMENT':
            let newComment = state.gallery.map(function(obj, index) {
                if( index == action.index){ obj.title = action.comment}
                return obj});
            localStorage.setItem('gallery', JSON.stringify(newComment));
            return Object.assign({}, state, { 
                gallery: newComment
            })
        default:
        	return state
    }
}
module.exports = reducer;


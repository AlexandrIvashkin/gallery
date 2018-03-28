import React from 'react';

import redIcon from "../img/redIcon.png";

class EditComment extends React.Component {
	constructor(props) {
  		super(props);
  		this.editComment = this.editComment.bind(this);
  		this.visibleComment = this.visibleComment.bind(this);
	};

	editComment(e){
		e.preventDefault();
		var comment = this.refs.comment.value;
		var index = this.props.index;
		this.props.editComment(comment, index); {/*Closed form*/}
		$(".imgComment form").css({"display": "none"});
	}

	visibleComment(e){
		if (e.target.tagName != "IMG") return;
		var form = $(e.currentTarget).find("form");
		var visible = form.css("display");
		if(visible == "none"){
			$(".imgComment form").css({"display": "none"});
			form.css({"display": "block"});
		}
		else{
			form.css({"display": "none"});
		}
	}

	render(){
		return(
			<div className="imgComment">{this.props.title}
				<div onClick={this.visibleComment}>
					<img src={redIcon} />
		       		<form onSubmit={this.editComment} className="editComment">
		       			<p>Введите новый комментарий:</p>
  						<input type = "text" ref="comment" size="20" rows="1" defaultValue={this.props.title}/><br/>
  						<input type="submit" value="Изменить"/>
  					</form>
  				</div>
  			</div>

		)
	}
}

export default EditComment;
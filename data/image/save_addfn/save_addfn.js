@charset "utf-8";
/* CSS Document */

.menu_item.menu_close {
	margin-top:15px;
}
.menu_item.menu_close img {
	width: 64px;
    height: 64px;
	max-width: 64px;
    max-height: 64px;
}
.save_area {
	padding:0 5px;
}
.save_area .save_list {
	display:flex;
	flex-wrap: wrap;
	-webkit-justify-content:center;
	justify-content:center;
	border-top:none;
}
.save_list_item {
	display:block;
	position: relative;
	width:18.2%;
	border:1px solid #ccc;
	margin:0 7px 14px 7px;
	align-items: center;
	box-sizing:border-box;
}
.save_display_area {
	display:block;
	text-align:center;
	padding:5px;
}
.save_list_item_thumb {
	display:block;
	width:155px;
	height:103px;
	position:relative;
	border:1px solid #ccc;
	margin:20px auto 7px;
}
.save_list_item_thumb img {
	width:100%;
	height:auto;
	vertical-align:bottom;
}
.save_list_item_area {
	border-bottom:none;
	display:block;
	padding:0 5px;
}
.save_list_item_date {
	margin-bottom:5px
}
.save_list_item_date .data_num {
	position:absolute;
	top:5px;
	left:0;
	width:100%;
	text-align:center;
}
.save_list_item_date .none {
	color:#999;
}
.save_list_item_text {
	max-height:3.5em;
	font-size:13px;
	overflow:hidden;
}

/***** 保護・削除ボタン ******/
.save_config_area {
	display:flex;
	justify-content: center;
	font-size:12px;
	margin:5px 0 10px 0;
}
.save_config_area .config {
	text-align:right;
	margin:0 2px;
	padding:3px;
	border:1px solid #555;
}
.save_config_area .config:hover {
	background-color:rgba(255,255,255,0.6);
}

.save_config_area .config img {
	width:1em;
	height:1em;
	vertical-align:bottom;
	margin-right:3px;
}
.save_config_area .save_delete {
}

/***** ページ送りナビ ******/
.nav {
	position:absolute;
	display:flex;
	top:48px;
	left:17px;
}
.nav li {
	margin:3px;
	border:1px solid #ccc;
	font-size:14px;
	
}
.nav li a {
	width:16px;
	text-decoration:none;
	display:block;
	color:#333;
	padding:5px;	
}
.nav li a:hover {
	background-color:#9CF;
}
.nav li a.now {
	background-color: #F9C;
}

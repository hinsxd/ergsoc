// JavaScript Document
$("ul.menu li").on("click",function(e){
		
		e.preventDefault();
		e.stopPropagation();
		var $this = $(this);
		var link = $this.data("link")+".html";
		$("#main").load(link+" #main");
		return false;
	});
$(function() {
	$(".footer").wrapInner("<div class='container'></div>");
	$(".footer .container").wrapInner("<div class='row'></div>");
	$(".footer .container .row").wrapInner("<div class='col-xs-12'></div>");
	$(".footer .container .row .col-xs-12").wrapInner("<div class='foot_nav'></div>");
	$(".foot_nav").append("<a href='产品服务.html'>产品服务</a>");
	$(".foot_nav").append("<a href='公司新闻.html'>公司新闻</a>");
	$(".foot_nav").append("<a href='投资者关系.html'>投资者关系</a>");
	$(".foot_nav").append("<a href='健康咨询.html'>健康资讯</a>");
	$(".foot_nav").append("<a href='关于我们.html'>关于我们</a>");
	$(".foot_nav").append("<a href='http://www.dayigufen.com/pdb/index.html' class='project_mgt_link'>项目通道</a>")
	$(".footer .container .row .col-xs-12").append("<div class='copy'></div>");
	$(".copy").append("<span>Copyright &copy; 2016 大医科技股份有限公司 版权所有 京ICP备16026951号-1</span>");

});
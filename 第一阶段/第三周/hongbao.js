
var time = document.getElementById('sec');

var angel = 1;
function action()
{
	setInterval(zhuan,100);
}
function zhuan()
{
	angel +=10;
	
	time.style.transform = 'rotate(' + angel + 'deg)';
}
//创建一个雪花 并且让雪花下落
function newFlake()
{  
//  document 文档；网页 html
//  create 创建；创造
//	element 元素 ；标签
//  使网页创建一个img类型的标签 并且赋值给flake
	var flake = document.createElement('img');
	
//	雪花会随机出现在当前的屏幕当中
//  获取当前屏幕的宽
    var width = document.body.clientWidth;
//	获取当前屏幕的高
	var height = document.body.clientHeight;
	
//	console输出  log 日志  在控制台输出日志
//	console.log(width);
//	
//	console.log(height);
//	在水平方向上随机获取一条线
	var pointX  = Math.random() * width;
//	在垂直方向上随机获取一条线
	var pointY = Math.random() * height;
//	<style>
//	   img 
//	   {
//		   top:100px;

//           transfrom:scale(2);
//	   }
//	</style>
//	设置img标签的垂直方向坐标 
	flake.style.top = pointY + 'px';
	
	flake.style.left = pointX + 'px';
//	设置定位属性
	flake.style.position = 'absolute';
	
	flake.style.transform = 'scale(' + Math.random() + ')';
	
	flake.src = 'hongbao.png';
	
//	append追加；添加
//	child 孩子 子标签
//   在网页中添加一个子标签
	document.body.appendChild(flake);
	
//	雪花下落
	function snowDown()
	{
//		让坐标每次都增大一点
//		pointX = pointX + Math.random() * 5;
		
		pointY = pointY + Math.random() * 5;
//		将增大的坐标重新赋值给雪花
//		flake.style.left = pointX + 'px';
		
		flake.style.top = pointY + 'px';
		
		//边距检测
//		condition 条件 只能为真假
//      如果X轴坐标大于屏幕的宽
//		我们就认为超出宽的边界
//		if (pointX > width) 
//		{
//			pointX = -100;
//		}
		if (pointY > height) 
		{
			pointY = -100;
		}
	}
//	每秒钟发生100次位移
	setInterval(snowDown,10);
}

//for循环

for(var i = 0 ; i < 100 ; i ++)
{
	newFlake();
}
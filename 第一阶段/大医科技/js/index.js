	 
$(function () {
     pageIndex = 0;
     showFooterStep = 0;
     
     $('#fullpage').fullpage({
   	      verticalCentered: false,
   	      autoScrolling:true,
	      scrollOverflow:true,
   //        anchors:['home','product','news','investor','info'],
     });
     var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop : true,
        effect : 'slide',
        centeredSlides: true,
        autoplay: 3000,
        speed:800,
        autoplayDisableOnInteraction: false,
        
        onSlideChangeStart: function(swiper){
			if (swiper.activeIndex == 1 || swiper.activeIndex == 4) {
				 console.log(swiper.activeIndex);
				 $(".slide2 .sec_text").removeClass("fadeInUp");
             	 $(".slide3 .sec_text").removeClass("fadeInUp");
             	 
             	 $(".slide1 .sec_text").addClass("fadeInUp");
                 
             }
             if (swiper.activeIndex == 2) {
             	 $(".slide1 .sec_text").removeClass("fadeInUp");	
             	 $(".slide3 .sec_text").removeClass("fadeInUp");
                 $(".slide2 .sec_text").addClass("fadeInUp");
             }
             if (swiper.activeIndex == 3) {
             	 $(".slide1 .sec_text").removeClass("fadeInUp");	
             	 $(".slide2 .sec_text").removeClass("fadeInUp");	
                 $(".slide3 .sec_text").addClass("fadeInUp");
             }
   		}
    });
 
     
     $('.next_icon').click(function(){
     	console.log('鍚戜笅婊氬姩');
     	$.fn.fullpage.moveSectionDown();
     });
     //
	
	//寰楀埌鍓嶄笁鏉℃柊闂�
	getNewsList();
    function getNewsList() {
        var para = '{ categoryId: ' + 32 + ',pageIndex:0,pageSize:100}';
        GetAppApiData("GetContentItems", para, getInfoCallback);
    }
    
    function getInfoCallback(result) {
//      resultData = JSON.parse(sessionStorage.AppresultData);
       	resultData = result;
        if (resultData.success) {
            if (resultData.data != null) {
                var centersData = resultData.data;
                var imgSrc=['img/news_li_3.jpg','img/news_li_1.jpg','img/news_li_2.jpg'];
                if (centersData.contentNumber > 0) {
                    for (var j = 0; j < 3; j++) {
                        var newObj = $('.sec-news .news_li').eq(0).clone(true);
                        $('.sec-news .news_li').eq(j).after(newObj);
                        $('.sec-news .news_li').eq(j + 1).attr("id", centersData.contents[centersData.contentNumber - j - 1].id);
                        $('.sec-news .news_li').eq(j + 1).find(".news_li_content h2").html(centersData.contents[centersData.contentNumber - j - 1].title);
                         
                        var date_info=centersData.contents[centersData.contentNumber - j - 1].updateDate.substring(0,10);
                        $('.sec-news .news_li').eq(j + 1).find(".news_li_content .news_date").html(date_info);
                        
                        var thumbUrl = imgSrc[ j ];
                        $('.news_li').eq(j + 1).find(".news_li_icon img").attr("src", thumbUrl);
                    }
                    $('.sec-news .news_li').eq(0).hide();
					
                    $(".sec-news .news_li .news_li_content h2").click(function () {
                        sessionStorage.newsArticleId = $(this).parents(".sec-news .news_li").attr("id");
                        window.location.href = "news_detail.html";
                    });
                }
            }

        } else {
            alert(data.message.content);
        }
    }

     
//    generateHeader('home');
})
 

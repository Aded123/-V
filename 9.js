

        function init_onlyyou(){
            // åˆå§‹åŒ–ä¸¤ä¸ªdivçš„é«˜åº¦
            $("#div_onlyyou").css({"height":$(window).height()+260+"px"});
            $("#div_oy_inner").css({"height":$(window).height()+260+"px"});

            // è®¾ç½®è‡ªå®šä¹‰èƒŒæ™¯
            var start_bg_img=start_content['bg_img'];
            if(typeof(start_content['bg_style'])!='undefined' && start_content['bg_style']=='bg_custom'){
                if(typeof(start_bg_img)!='undefined' && start_bg_img!=''){
                    $("#div_onlyyou").css({"background-image": 'url('+start_bg_img+')'});
                }
            }


            if(typeof(start_content['chase_title'])!='undefined' && start_content['chase_title']!=''){
                $('.div_oy_text h1').html(start_content['chase_title']); //åŠ è½½è‡ªå®šä¹‰å†…å®¹
            }else{
                $('.div_oy_text h1').html('åšæˆ‘å¥³æœ‹å‹å¥½ä¸å¥½'); //è®¾ç½®é»˜è®¤å€¼
            }

            if(typeof(start_content['chase_text'])!='undefined' && start_content['chase_text']!=''){ 
                $('.div_oy_text .p_oy_text').html(start_content['chase_text']); //åŠ è½½è‡ªå®šä¹‰å†…å®¹
            }else{ //è®¾ç½®é»˜è®¤å€¼
                $('.div_oy_text .p_oy_text').html('å°å¯çˆ±ï¼Œæˆ‘å–œæ¬¢ä½ å¥½ä¹…äº†ã€‚ä¸åªæ˜¯é‡è§ä½ ï¼Œå³ä½¿åªæ˜¯æƒ³èµ·ä½ ï¼Œéƒ½ä¼šè®©æˆ‘å°é¹¿çªçªåœ°ä¹±æ’žã€‚æˆ‘ä¸€å®šä¼šå¥½å¥½åœ°ç–¼ä½ ï¼Œä½ åšæˆ‘å¥³æœ‹å‹å¥½ä¸å¥½ï¼Ÿ');
            }
            
            // è®¾ç½®æ­£æ–‡ä¹‹å‰çš„ç…§ç‰‡
            if(typeof(start_content['img_bool'])!='undefined' && start_content['img_bool']=='img_true'){ //å¦‚æžœè®¾ç½®äº†ç…§ç‰‡å°±æ˜¾ç¤º
                if(typeof(start_content['img_src'])!='undefined' && start_content['img_src']!=''){
                    $(".img_oy_text").attr('src', start_content['img_src']);
                }
            } 
            if(typeof(start_content['img_bool'])=='undefined' || typeof(start_content['chase_text'])=='undefined'){
                var random_img=random_img_as();
                $(".img_oy_text").attr('src', random_img);
            }
        } 


        var array_oy_benefit; 
        //åŠ è½½å†…å®¹æˆ–è®¾ç½®é»˜è®¤å€¼
        if(typeof(start_content['chase_benefit'])!='undefined'){
            array_oy_benefit=start_content['chase_benefit']; 
            // array_oy_benefit = array_oy_benefit.filter(function (s) {
            //     return s && s.trim(); // åŽ»æŽ‰ç©ºå€¼
            // }); //å…¨ç©ºä½œå“ï¼Œä½†æ˜¯å´å®šä¹‰äº†keyçš„æƒ…å†µ
            if(array_oy_benefit[0]==''){
                array_oy_benefit[0]='æˆ‘ä¼šæŠŠå…¨éƒ¨å·¥èµ„éƒ½ç»™ä½ ';
            }
            if(array_oy_benefit[1]==''){
                array_oy_benefit[1]='æ¯å¤©åšå¥½åƒçš„ç»™ä½ ';
            }
            if(array_oy_benefit[2]==''){
                array_oy_benefit[2]='ä½ ç¡ä¸ç€æ—¶ç»™ä½ è®²æ•…äº‹';
            }
            if(array_oy_benefit[3]==''){
                array_oy_benefit[3]='ç»™ä½ è‡ªç”±åŽ»åšå–œæ¬¢çš„äº‹æƒ…';
            }            
        }else{
            array_oy_benefit=['æˆ‘ä¼šæŠŠå…¨éƒ¨å·¥èµ„éƒ½ç»™ä½ ','æ¯å¤©åšå¥½åƒçš„ç»™ä½ ','ä½ ç¡ä¸ç€æ—¶ç»™ä½ è®²æ•…äº‹','ç»™ä½ è‡ªç”±åŽ»åšå–œæ¬¢çš„äº‹æƒ…'];
        }
        console.log(array_oy_benefit); 
        var index_text_oy=0; 

        var count_text_oy=array_oy_benefit.length;
        console.log('ä¸€å…±æœ‰'+count_text_oy+'æ¡ä»¶');
        function oy_show_benefit(){
            var oy_text_height=$(".div_oy_text").height();
            if(index_text_oy<count_text_oy){  
                console.log('now the index_benefit_oy is->'+index_text_oy);                
                console.log('now the benefit_oy is->'+array_oy_benefit[index_text_oy]);
                $(".li_oy_benefit").eq(index_text_oy).html(array_oy_benefit[index_text_oy]).show();
                if($(document).height()-oy_text_height<520){ //éšç€æ–‡å­—çš„å¢žå¤šï¼Œå®žæ—¶è°ƒæ•´é«˜åº¦
                    $("#div_onlyyou").css({"height":$(document).height()+160+"px"});
                    $("#div_oy_inner").css({"height":$(document).height()+"px"});
                    console.log('update the document height +120');
                } 
                index_text_oy++;
            } else{
                oy_show_note();
            }
        }

        function oy_show_note(){
            $("#div_oy_note").show(); 
        }

        function oy_hide_note(){
            $("#div_oy_note").hide(); 
        }

        function oy_go_next(){  
            $("#div_oy_yes").show();
            setTimeout(function(){                
                $('#div_onlyyou').fadeOut();
                init_theme(); 
            },2000);
            setTimeout(function(){ 
                $('#div_onlyyou').remove();
            },3000);
        }



    function random_img_as(){  //èŽ·å–éšæœºçš„æ¨¡æ¿å›¾ç‰‡
        // console.log('random_img_as'); 
        var random_num=Math.floor(Math.random()*(array_as_pics_s.length)); //éšæœºå–å€¼ 
        var random_img=array_as_pics_s[random_num];
        return random_img;
    } 

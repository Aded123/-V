        var audio_music=document.getElementById('audio_music'); 
        var audio_record=document.getElementById('audio_record'); 
        
        if(typeof(music_json['music_select'])!='undefined' && music_json['music_select']!='null' && music_json['music_select']!=''){
            if(music_json['music_select']=='m_online' && music_json['m_online_url']!='null' && music_json['m_online_url']!=''){ //é€‰æ‹©åœ¨çº¿åˆ—è¡¨
                $('#audio_music').attr('src',music_json['m_online_url']);
            }
            if(music_json['music_select']=='m_upload' && music_json['m_upload_url']!='null' && music_json['m_upload_url']!=''){ //é€‰æ‹©åœ¨çº¿åˆ—è¡¨å¹¶ä¸”ä¸Šä¼ äº†æ­Œæ›²
                $('#audio_music').attr('src',music_json['m_upload_url']);
            }
            if(music_json['music_select']=='m_upload' && (music_json['m_upload_url']=='null' || music_json['m_upload_url']=='')){ //é€‰æ‹©åœ¨çº¿åˆ—è¡¨ä½†æ˜¯æ²¡æœ‰ä¸Šä¼ æ­Œæ›²
                console.log('music_select m_upload but m_upload_url is null, set defaulted music');
                var random_music=random_music_as();
                $('#audio_music').attr('src',random_music);
            }
            if(theme!='audio_list' || (theme=='audio_list' && start_id!='null')){
                audio_music.play(); //è§¦å‘éŸ³ä¹è‡ªåŠ¨æ’­æ”¾
            }else{
                audio_music.pause();
                console.log('audio_list && no start');
            }
        }else{ //å…¨æ–°ä½œå“æˆ–ç©ºä½œå“
            console.log('set random music');
            var random_music=random_music_as();
            $('#audio_music').attr('src',random_music);
            if(theme!='audio_list' || (theme=='audio_list' && start_id!='null')){
                audio_music.play(); //è§¦å‘éŸ³ä¹è‡ªåŠ¨æ’­æ”¾
            }else{
                audio_music.pause();
                console.log('audio_list && no start');
            }
        }

        if(typeof(record_json['record_bool'])!='undefined' && record_json['record_bool']!='null' && record_json['record_bool']!=''){
            if(record_json['record_bool']=='r_true' && record_json['r_wechat_url']!='null' && record_json['r_wechat_url']!=''){ //é€‰æ‹©è¦è¯­éŸ³
                $('#audio_record').attr('src',record_json['r_wechat_url']);
            }
            if(record_json['record_bool']=='r_true' && (record_json['r_wechat_url']=='null' || record_json['r_wechat_url']=='')){ //é€‰æ‹©è¦è¯­éŸ³ï¼Œä½†å´æ²¡æœ‰å½•è¯­éŸ³
                $('#div_record').hide(); //ä¸æ˜¾ç¤º
                $('#div_record_tips').hide();
            }
            if(record_json['record_bool']=='r_false'){ //å¦‚æžœä¸è¦è¯­éŸ³åˆ™ä¸æ˜¾ç¤º
                $('#div_record').hide();
                $('#div_record_tips').hide();
            }
        }else{
            if(theme_content['bool_save']==false){ //å…¨æ–°ä½œå“æˆ–æœªä¿å­˜å†…å®¹ï¼Œä¸”æœªå®šä¹‰è¯­éŸ³
                console.log('set random record');
                $('#audio_record').attr('src','C:\Users\86157\Desktop\1.mp3');
            }else{ //éžå…¨æ–°ä½œå“æˆ–å·²ä¿å­˜å†…å®¹ï¼Œä½†æœªå®šä¹‰è¯­éŸ³ï¼Œåˆ™ä¸æ˜¾ç¤ºè¯­éŸ³
                $('#div_record').hide();
                $('#div_record_tips').hide();
            }
        }



        function random_music_as(){  //èŽ·å–éšæœºçš„æ¨¡æ¿å›¾ç‰‡
            // console.log('random_words_as'); 
            var random_num=Math.floor(Math.random()*(array_as_music.length)); //éšæœºå–å€¼ 
            var random_music=array_as_music[random_num];
            return random_music;
        }

        //æŽ§åˆ¶éŸ³ä¹åˆ‡æ¢æ’­æ”¾æš‚åœ 
        var img_music=document.getElementById('img_music');
        var timeout_music;
        function music_switch(){ //åˆ‡æ¢   
            clearTimeout(timeout_music);  
            if(audio_music.paused){
                console.log('switch music to play');
                audio_music.play();
                audio_record.pause(); //æ’­æ”¾éŸ³ä¹æ—¶å½•éŸ³ä¸€å®šæš‚åœ                
                img_music.style.webkitAnimation="music_play_rotate 1s linear infinite";
                $(".div_music_tips").html("æ­£æ’­æ”¾").show();                
                timeout_music=setTimeout(function(){$(".div_music_tips").hide()}, 2500);
            }else{
                console.log('switch music to paused'); 
                audio_music.pause();
                // audio_record.play(); //
                img_music.style.webkitAnimation="";
                $(".div_music_tips").html("å·²æš‚åœ").show();  
                timeout_music=setTimeout(function(){$(".div_music_tips").hide()}, 2500); 
            } 
        }

        var timeout_record;
        var div_record=document.getElementById('div_record');
        function record_switch(){ //åˆ‡æ¢ 
            clearTimeout(timeout_record);
            if(audio_record.paused){
                console.log('switch record to play'); 
                audio_record.play();
                audio_music.pause(); //
                img_music.style.webkitAnimation="";
                div_record.style.webkitAnimation="btn_rotate 1s linear infinite";
                $(".div_record_tips").html("æ­£æ’­æ”¾").show(); 
                timeout_record=setTimeout(function(){$(".div_record_tips").hide()}, 2500);
            }else{
                console.log('switch record to pause');  
                audio_record.pause(); //æ’­æ”¾éŸ³ä¹æ—¶å½•éŸ³ä¸€å®šæš‚åœ
                audio_music.play();                
                img_music.style.webkitAnimation="music_play_rotate 1s linear infinite";
                div_record.style.webkitAnimation="";
                $(".div_record_tips").html("å·²æš‚åœ").show();  
                timeout_record=setTimeout(function(){$(".div_record_tips").hide()}, 2500); 
            } 
        }



        //ä»¥ä¸‹æ˜¯å¾®ä¿¡ç›¸å…³çš„è®¾ç½®
        console.log(signPackage);    
        wx.config({
            // debug: true,
            appId: signPackage["appid"],
            timestamp: signPackage["timestamp"],
            nonceStr: signPackage["nonceStr"],
            signature: signPackage["signature"],
            jsApiList: [
                'checkJsApi',
                // 'updateAppMessageShareData',
                // 'updateTimelineShareData',
                // 'closeWindow', 
                // 'hideAllNonBaseMenuItem', 
                // 'showMenuItems', 
                // 'showAllNonBaseMenuItem'
            ]
        });

        wx.ready(function(){
            console.log('wx.ready success to start');
            audio_music.play(); //è§¦å‘éŸ³ä¹è‡ªåŠ¨æ’­æ”¾
            wx.checkJsApi({
                jsApiList: ['updateAppMessageShareData','updateTimelineShareData'], // éœ€è¦æ£€æµ‹çš„JSæŽ¥å£åˆ—è¡¨ï¼Œæ‰€æœ‰JSæŽ¥å£åˆ—è¡¨è§é™„å½•2,
                success: function(res) {
                    console.log('wx.checkJsApi success');
                    if(theme!='audio_list' || (theme=='audio_list' && start_id!='null')){
                        audio_music.play(); //è§¦å‘éŸ³ä¹è‡ªåŠ¨æ’­æ”¾
                    }else{
                        audio_music.pause();
                        console.log('audio_list && no start');
                    }
                },
                complete: function(res) {
                    console.log('wx.checkJsApi complete');
                    if(theme!='audio_list' || (theme=='audio_list' && start_id!='null')){
                        audio_music.play(); //è§¦å‘éŸ³ä¹è‡ªåŠ¨æ’­æ”¾
                    }else{
                        audio_music.pause();
                        console.log('audio_list && no start');
                    }
                }
            });
        });

        wx.error(function(res){
            console.log('wx.error -> '+res);
            audio_music.play();  
            wx.checkJsApi({
                jsApiList: ['updateAppMessageShareData','updateTimelineShareData'], // éœ€è¦æ£€æµ‹çš„JSæŽ¥å£åˆ—è¡¨ï¼Œæ‰€æœ‰JSæŽ¥å£åˆ—è¡¨è§é™„å½•2,
                success: function(res) {
                    console.log('wx.checkJsApi success');
                    if(theme!='audio_list' || (theme=='audio_list' && start_id!='null')){
                        audio_music.play(); //è§¦å‘éŸ³ä¹è‡ªåŠ¨æ’­æ”¾
                    }else{
                        audio_music.pause();
                        console.log('audio_list && no start');
                    }
                },
                complete: function(res) {
                    console.log('wx.checkJsApi complete');
                    if(theme!='audio_list' || (theme=='audio_list' && start_id!='null')){
                        audio_music.play(); //è§¦å‘éŸ³ä¹è‡ªåŠ¨æ’­æ”¾
                    }else{
                        audio_music.pause();
                        console.log('audio_list && no start');
                    }
                }
            });                  
        });

        

        


        
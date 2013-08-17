(function(e){e.Zebra_Dialog=function(f,m){var t={animation_speed_hide:250,animation_speed_show:0,auto_close:!1,buttons:!0,center_buttons:!1,custom_class:!1,keyboard:!0,max_height:0,message:"",modal:!0,overlay_close:!0,overlay_opacity:".9",position:"center",reposition_speed:500,source:!1,title:"",type:"information",vcenter_short_message:!0,width:0,onClose:null},a=this,h={},n;a.settings={};"string"==typeof f&&(h.message=f);if("object"==typeof f||"object"==typeof m)h=e.extend(h,"object"==typeof f?f: m);a.init=function(){a.settings=e.extend({},t,h);a.isIE6="explorer"==k.name&&6==k.version||!1;a.settings.modal&&(a.overlay=jQuery("<div>",{"class":"ZebraDialogOverlay"}).css({position:a.isIE6?"absolute":"fixed",left:0,top:0,opacity:a.settings.overlay_opacity}),a.settings.overlay_close&&a.overlay.bind("click",function(){a.close()}),a.overlay.appendTo("body"));a.dialog=jQuery("<div>",{"class":"ZebraDialog"+(a.settings.custom_class?" "+a.settings.custom_class:"")}).css({position:a.isIE6?"absolute":"fixed", left:0,top:0,visibility:"hidden"});!a.settings.buttons&&a.settings.auto_close&&a.dialog.attr("id","ZebraDialog_"+Math.floor(9999999*Math.random()));var d=parseInt(a.settings.width,10);!isNaN(d)&&(d==a.settings.width&&d.toString()==a.settings.width.toString()&&0<d)&&a.dialog.css({width:a.settings.width});a.settings.title&&jQuery("<h3>",{"class":"ZebraDialog_Title"}).html(a.settings.title).appendTo(a.dialog);d=jQuery("<div>",{"class":"ZebraDialog_BodyOuter"+(a.settings.title?"":" ZebraDialog_NoTitle")+ (p()?"":" ZebraDialog_NoButtons")}).appendTo(a.dialog);a.message=jQuery("<div>",{"class":"ZebraDialog_Body"+(""!==q()?" ZebraDialog_Icon ZebraDialog_"+q():"")});0<a.settings.max_height&&(a.message.css("max-height",a.settings.max_height),a.isIE6&&a.message.attr("style","height: expression(this.scrollHeight > "+a.settings.max_height+' ? "'+a.settings.max_height+'px" : "85px")'));a.settings.vcenter_short_message?jQuery("<div>").html(a.settings.message).appendTo(a.message):a.message.html(a.settings.message); if(a.settings.source&&"object"==typeof a.settings.source){var b=a.settings.vcenter_short_message?e("div:first",a.message):a.message,c;for(c in a.settings.source)switch(c){case "ajax":var g="string"==typeof a.settings.source[c]?{url:a.settings.source[c]}:a.settings.source[c],f=jQuery("<div>").attr("class","ZebraDialog_Preloader").appendTo(b);g.success=function(a){f.remove();b.append(a);l(!1)};e.ajax(g);break;case "iframe":g=e.extend({width:"100%",height:"100%",marginheight:"0",marginwidth:"0",frameborder:"0"}, "string"==typeof a.settings.source[c]?{src:a.settings.source[c]}:a.settings.source[c]);b.append(jQuery("<iframe>").attr(g));break;case "inline":b.append(a.settings.source[c])}}a.message.appendTo(d);if(c=p()){var r=jQuery("<div>",{"class":"ZebraDialog_Buttons"}).appendTo(a.dialog);e.each(c,function(b,d){var c=jQuery("<a>",{href:"javascript:void(0)","class":"ZebraDialog_Button_"+b});e.isPlainObject(d)?c.html(d.caption):c.html(d);c.bind("click",function(){void 0!==d.callback&&d.callback(a.dialog);a.close(void 0!== d.caption?d.caption:d)});c.appendTo(r)});r.wrap(e("<div>").addClass("ZebraDialog_ButtonsOuter"+(a.settings.center_buttons?" ZebraDialog_Buttons_Centered":"")))}a.dialog.appendTo("body");e(window).bind("resize.Zebra_Dialog",function(){clearTimeout(n);n=setTimeout(function(){l()},100)});a.settings.keyboard&&e(document).bind("keyup.Zebra_Dialog",function(d){27==d.which&&a.close();return!0});a.isIE6&&e(window).bind("scroll.Zebra_Dialog",function(){s()});!1!==a.settings.auto_close&&(a.dialog.bind("click", function(){clearTimeout(a.timeout);a.close()}),a.timeout=setTimeout(a.close,a.settings.auto_close));l(!1);return a};a.close=function(d){e(document).unbind(".Zebra_Dialog");e(window).unbind(".Zebra_Dialog");a.overlay&&a.overlay.animate({opacity:0},a.settings.animation_speed_hide,function(){a.overlay.remove()});a.dialog.animate({top:0,opacity:0},a.settings.animation_speed_hide,function(){a.dialog.remove();if(a.settings.onClose&&"function"==typeof a.settings.onClose)a.settings.onClose(void 0!==d?d:"")})}; var l=function(d){var b=e(window).width(),c=e(window).height(),g=a.dialog.width(),f=a.dialog.height(),b={left:0,top:0,right:b-g,bottom:c-f,center:(b-g)/2,middle:(c-f)/2};a.dialog_left=void 0;a.dialog_top=void 0;e.isArray(a.settings.position)&&(2==a.settings.position.length&&"string"==typeof a.settings.position[0]&&a.settings.position[0].match(/^(left|right|center)[\s0-9\+\-]*$/)&&"string"==typeof a.settings.position[1]&&a.settings.position[1].match(/^(top|bottom|middle)[\s0-9\+\-]*$/))&&(a.settings.position[0]= a.settings.position[0].toLowerCase(),a.settings.position[1]=a.settings.position[1].toLowerCase(),e.each(b,function(d,b){for(var c=0;2>c;c++){var e=a.settings.position[c].replace(d,b);e!=a.settings.position[c]&&(0===c?a.dialog_left=eval(e):a.dialog_top=eval(e))}}));if(void 0===a.dialog_left||void 0===a.dialog_top)a.dialog_left=b.center,a.dialog_top=b.middle;a.settings.vcenter_short_message&&(b=a.message.find("div:first"),c=b.height(),g=a.message.height(),c<g&&b.css({"padding-top":(g-c)/2}));"boolean"== typeof d&&!1===d||0===a.settings.reposition_speed?a.dialog.css({left:a.dialog_left,top:a.dialog_top,visibility:"visible",opacity:0}).animate({opacity:1},a.settings.animation_speed_show):(a.dialog.stop(!0),a.dialog.css("visibility","visible").animate({left:a.dialog_left,top:a.dialog_top},a.settings.reposition_speed));a.dialog.find("a[class^=ZebraDialog_Button]:first").focus();a.isIE6&&setTimeout(s,500)},s=function(){var d=e(window).scrollTop(),b=e(window).scrollLeft();a.settings.modal&&a.overlay.css({top:d, left:b});a.dialog.css({left:a.dialog_left+b,top:a.dialog_top+d})},p=function(){if(!0!==a.settings.buttons&&!e.isArray(a.settings.buttons))return!1;if(!0===a.settings.buttons)switch(a.settings.type){case "question":a.settings.buttons=["Yes","No"];break;default:a.settings.buttons=["Ok"]}return a.settings.buttons.reverse()},q=function(){switch(a.settings.type){case "confirmation":case "error":case "information":case "question":case "warning":return a.settings.type.charAt(0).toUpperCase()+a.settings.type.slice(1).toLowerCase(); default:return!1}},k={init:function(){this.name=this.searchString(this.dataBrowser)||"";this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||""},searchString:function(a){for(var b=0;b<a.length;b++){var c=a[b].string,e=a[b].prop;this.versionSearchString=a[b].versionSearch||a[b].identity;if(c){if(-1!=c.indexOf(a[b].subString))return a[b].identity}else if(e)return a[b].identity}},searchVersion:function(a){var b=a.indexOf(this.versionSearchString);if(-1!=b)return parseFloat(a.substring(b+ this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"MSIE",identity:"explorer",versionSearch:"MSIE"}]};k.init();return a.init()}})(jQuery);
var cmpVenue=(function(){return{init:function(){a()
}};
function a(){var c=$(".cmp-venue");
if(c.length==0){return
}function b(d){d.find(".map").each(function(h,g){var j=$(g).attr("id").split("map-");
if(j.length!=2){$(this).display="none";
return
}var i=j[1].split(",");
if(i.length!=2){$(this).display="none";
return
}var l={lat:parseFloat(i[0]/3600),lng:parseFloat(i[1]/3600)};
var f={zoom:13,center:l};
var k=new google.maps.Map(document.getElementById("map-"+i[0]+","+i[1]),{zoom:13,center:l});
var e=new google.maps.Marker({position:l,map:k})
})
}google.maps.event.addDomListener(window,"load",b(c))
}})();
var cmpSpeakerSession=(function(){return{init:function(){a()
}};
function a(){var b=$(".cmp-speakersession");
if(b.length==0){return
}var c=function(){b.find(".super-title").each(function(){var d=$(this).text();
$(this).text(formatDateTimeText(d))
})
}();
b.find(".dash").matchHeight();
b.find(".text").matchHeight()
}})();
var cmpSpeakerList=(function(){return{init:function(){a()
}};
function a(){var b=$(".cmp-speakerlist");
if(b.length==0){return
}b.find(".list-speakers-col").matchHeight()
}})();
var cmpSiteNavigation=(function(){return{init:function(){a()
}};
function a(){var c=$(".cmp-sitenavigation");
if(c.length==0){return
}if($("#header-area").length){var f=$("#header-area").offset().top;
$(window).on("scroll resize",function(g){d(g)
});
function d(h){var j=$("#header-area");
var g=$(window).scrollTop();
var i;
if($(".hero-box-title").offset()&&$(".hero-box-title").offset().top>0){i=$(".hero-box-title").offset().top
}else{i=200
}if(g>i&&window.innerWidth>Constants.breakpoint){j.addClass("fixed-menu")
}else{j.removeClass("fixed-menu")
}}}if(window.innerWidth>Constants.breakpoint){$(".common-li").hover(function(){if($(this).parent("ul").hasClass("site-nave")){if(!$(this).children("ul").length){$(this).addClass("secondary-theme-color--hover secondary-theme-border-bottom-4px--hover")
}}});
$(".register a").addClass("secondary-theme-border-4px secondary-theme-bg-color--hover")
}$(".caret-click").click(function(g){if($(this).children("span").hasClass("close-caret")){$(this).children("span").removeClass("close-caret");
$(this).children("span").addClass("open-caret")
}else{$(this).children("span").removeClass("open-caret");
$(this).children("span").addClass("close-caret")
}$(this).parent().toggleClass("open");
g.stopPropagation()
});
b();
$(window).on("hashchange",b);
$(".sitenave-btn").click(function(g){openclosemenu(g)
});
var e=false;
if(window.innerWidth>=Constants.breakpoint){$(".common-li").bind("touchstart",function(h){var g=this;
h.preventDefault();
h.stopPropagation();
if(!e){e=setTimeout(function(){e=null;
if($(g).has("ul")){uldropdown=$(this).children("ul");
if(!$(g).children("ul").hasClass("hovered")){if($(g).hasClass("ancestor-li")){$(".cmp-sitenavigation ul li").removeClass("open");
$(".cmp-sitenavigation ul .dropdown-menu").removeClass("hovered")
}if($(g).hasClass("dropdown-submenu")){$(g).addClass("open");
$(g).children("ul").addClass("hovered")
}else{var j=$(g).children("a").attr("href");
window.location.href=j
}}else{$(g).children("ul").removeClass("hovered");
$(g).removeClass("open")
}}},300)
}else{clearTimeout(e);
e=null;
var i=$(this).children("a").attr("href");
window.location.href=i
}})
}else{$(".common-li").bind("touch",function(h){var g=this;
h.preventDefault();
h.stopPropagation();
if(!e){e=setTimeout(function(){e=null;
if($(g).has("ul")){uldropdown=$(this).children("ul");
if(!$(g).children("ul").hasClass("hovered")){if($(g).hasClass("ancestor-li")){$(".cmp-sitenavigation ul li").removeClass("open");
$(".cmp-sitenavigation ul .dropdown-menu").removeClass("hovered")
}if($(g).hasClass("dropdown-submenu")){$(g).addClass("open");
$(g).children("ul").addClass("hovered")
}else{var j=$(g).children("a").attr("href");
window.location.href=j
}}else{$(g).children("ul").removeClass("hovered");
$(g).removeClass("open")
}}},300)
}else{clearTimeout(e);
e=null;
var i=$(this).children("a").attr("href");
window.location.href=i
}})
}$(window).on("click resize",function(h){var g=findUserAgent();
if(!g.isMobile()){$(".cmp-sitenavigation ul li").removeClass("open");
$(".cmp-sitenavigation ul .dropdown-menu").removeClass("hovered")
}})
}function b(){var d=window.location.pathname.replace(".html","");
var c=window.location.hash;
if(c.length>0){d=d+c
}$("ul#fresponsive li>a").each(function(f){var g=$(this).attr("href").replace(".html","");
if(d==g){if($(this).parent("li").length>0&&!$(this).parent("li").hasClass("ancestor-li")){$(this).closest(".ancestor-li").addClass("currentPage");
if(window.innerWidth<Constants.breakpoint){$(this).closest(".ancestor-li").addClass("open");
$(this).closest(".ancestor-li").children(".caret-click").children(".caret").removeClass("close-caret");
$(this).closest(".ancestor-li").children(".caret-click").children(".caret").addClass("open-caret");
$(this).parent().parent().parent().addClass(" open");
$(this).parent().parent().parent().children(".caret-click").children(".caret").removeClass("close-caret");
$(this).parent().parent().parent().children(".caret-click").children(".caret").addClass("open-caret")
}else{$(this).closest(".ancestor-li").addClass("secondary-theme-border-bottom-4px")
}$(this).parent().parent().prev().prev().addClass("currentPage secondary-theme-color");
$(this).addClass("currentPage secondary-theme-color")
}if(window.innerWidth<Constants.breakpoint){$(this).addClass("currentPage secondary-theme-color")
}else{$(this).closest(".ancestor-li").addClass("secondary-theme-border-bottom-4px")
}$(this).parent().addClass("currentPage secondary-theme-color")
}else{$(this).removeClass("currentPage secondary-theme-border-bottom-4px secondary-theme-color")
}})
}})();
var cmpRegistration=(function(){return{init:function(){a()
}};
function a(){var b=$(".cmp-registration");
if(b.length==0){return
}b.find(".btn-block").matchHeight()
}})();
var cmpRegisterButton=(function(){return{init:function(){a()
}};
function a(){var b=$(".cmp-registerbutton");
if(b.length==0){return
}b.find(".btn-block").matchHeight()
}})();
var cmpLeadGen=(function(){return{init:function(){a()
}};
function a(){var f=$(".cmp-lead-gen");
if(f.length==0){return
}var e=e||[];
var d=1;
var c=null;
var h=5;
e.push(["elqSetSiteId",$("#lead-gen-elqSiteId").val()]);
e.push(["elqGetCustomerGUID"]);
g();
function g(){if(!!(c)){if(h==0){return
}if(typeof this.GetElqCustomerGUID==="function"){jQuery("#elqCustomerGUID").val(GetElqCustomerGUID());
return
}h-=1
}c=setTimeout(g,500);
return
}$.urlParam=function(i){var j=new RegExp("[?&]"+i+"=([^&#]*)").exec(window.location.href);
if(j==null){return null
}else{return decodeURI(j[1].replace(/[^a-zA-Z 0-9]+/g,""))||0
}};
f.find("#lead-gen-utm-campaign").val($.urlParam("utm_campaign"));
f.find("#lead-gen-utm-source").val($.urlParam("utm_source"));
f.find("#lead-gen-utm-medium").val($.urlParam("utm_medium"));
f.find("#lead-gen-utm-content").val($.urlParam("utm_content"));
f.find("#lead-gen-elqCampaignId").val($.urlParam("elqCampaignId"));
var b=window.GetElqCustomerGUID;
(typeof b==="function")?$("#lead-gen-elqCustomerGUID").val(GetElqCustomerGUID()):$("#lead-gen-elqCustomerGUID").val("");
$("button.lead-gen-close-alert").on("click",function(){f.find("#lead-gen-success").hide();
f.find("#lead-gen-error").hide()
});
f.find("#lead-gen-form").on("submit",function(k){var j="https://s1849907385.t.eloqua.com/e/f2";
var i="?elqFormName="+$("#lead-gen-elqFormName").val()+"&elqSiteId="+$("#lead-gen-elqSiteId").val()+"&elqCampaignId="+$("#lead-gen-elqCampaignId").val()+"&elqCustomerGUID="+$("#lead-gen-elqCustomerGUID").val()+"&elqCookieWrite="+$("#lead-gen-elqCookieWrite").val()+"&utm_campaign="+$("#lead-gen-utm-campaign").val()+"&utm_source="+$("#lead-gen-utm-source").val()+"&utm_medium="+$("#lead-gen-utm-medium").val()+"&utm_content="+$("#lead-gen-utm-content").val()+"&emailAddress="+$("#lead-gen-email-address").val()+"&eventTitle="+($("#lead-gen-eventTitle").val()).replace("&","%26")+"&eventCode="+$("#lead-gen-eventCode").val()+"&formType="+$("#lead-gen-formType").val()+"&response="+$("#lead-gen-response").val()+"&LatestSource="+$("#lead-gen-latestSource").val()+"&retURL="+$("#lead-gen-retURL").val()+"&elqLeadGenAction="+$("#lead-gen-elqLeadGenAction").val();
f.find("#lead-gen-loading").css({display:"inline-block"});
f.find("#lead-gen-submit-button").prop("disabled",true);
$.ajax({url:j+i,type:"GET",success:function(l){f.find("#lead-gen-success").show();
f.find("#lead-gen-email-address").val("");
f.find("#lead-gen-loading").css({display:"none"});
f.find("#lead-gen-submit-button").prop("disabled",false);
window.dataLayer=window.dataLayer||[];
window.dataLayer.push({event:$("#lead-gen-elqEvent").val(),formType:$("#lead-gen-formType").val(),elqFormName:$("#lead-gen-elqFormName").val(),elqLeadGenAction:$("#lead-gen-elqLeadGenAction").val()})
},error:function(l){f.find("#lead-gen-error").show();
f.find("#lead-gen-loading").css({display:"none"});
f.find("#lead-gen-submit-button").prop("disabled",false)
}});
k.preventDefault()
})
}})();
function InvalidMsg(a){if(a.value===""){a.setCustomValidity(document.getElementsByName("lead-gen-required-msg")[0].value)
}else{if(a.validity.typeMismatch){a.setCustomValidity(document.getElementsByName("lead-gen-imvalid-msg")[0].value)
}else{a.setCustomValidity("")
}}return true
}var cmpLanguages=(function(){return{init:function(){a()
}};
function a(){var b=$(".cmp-languageselector");
if(b.length==0){return
}$("body").on("click",function(f){var d=$("button.btn-style");
if(!d.hasClass(f.target.className)&&!d.has(f.target).length){$(".dropdown-content").css("display","none");
$(".caret-action").removeClass("triangle-up");
$(".caret-action").addClass("triangle");
$(".circle-btn").removeClass("open-circle")
}});
$(".btn-style").click(function(d){d.stopPropagation();
d.preventDefault();
if(window.innerWidth>Constants.breakpoint){$(".dropdown").removeClass("open");
if($(".dropdown-content").css("display")!="block"){$(".caret-action").removeClass("triangle");
$(".caret-action").addClass("triangle-up");
$(".circle-btn").addClass("open-circle");
$(".dropdown-content").css("display","block")
}else{$(".caret-action").removeClass("triangle-up");
$(".caret-action").addClass("triangle");
$(".circle-btn").removeClass("open-circle");
$(".dropdown-content").css("display","none");
$(".btn-style").blur()
}}else{openclosemenu(d)
}return false
});
c();
function c(){if(window.innerWidth<=Constants.breakpoint){$(".selected-lang").addClass("theme-border-left-4px theme-color")
}else{$(".selected-lang").removeClass("theme-border-left-4px theme-color");
$(".btn-style").blur()
}}$(window).resize(function(){c()
})
}})();
var cmpHero=(function(){return{init:function(){a()
}};
function a(){var b=$(".cmp-hero");
if(b.length==0){return
}var c=findUserAgent();
if(c.isIEorEDGE()){objectFitVideos(document.querySelectorAll(".video-container"));
b.find(".hero-box-wrapper").addClass("box-wrapper-ie-bugfix")
}if(c.isMobile()){b.find(".video-selector").hide();
if(b.find(".hero-img-editor").length==0&&b.find(".hero-img").length==0){b.find(".hero-video-fallback").show()
}}else{b.find(".hero-video-fallback").hide();
b.find(".video-selector").show();
b.find(".video-selector").attr("autoplay","true");
b.find(".video-selector").attr("preload","auto");
b.find(".video-selector").on("loadedmetadata",function(){$(this).trigger("play")
})
}b.find(".hero-arrow").click(function(){var e=b.offset().top;
var g=b.height();
var d=0;
if(window.innerWidth>Constants.breakpoint){d=$(".cmp-sitenavigation #header-area").outerHeight()
}var f=e+g-d;
$("html, body").stop(true).animate({scrollTop:f},1000)
})
}})();
$(window).on("load resize",function(){cmpHero.init()
});
var cmpGoogleMap=(function(){return{init:function(){a()
}};
function a(){var c=$(".cmp-googlemap");
if(c.length==0){return
}function b(d){d.find(".div-map").each(function(h,g){var j=$(g).attr("id").split("map-");
if(j.length!=2){$(this).display="none";
return
}var i=j[1].split(",");
if(i.length!=2){$(this).display="none";
return
}var l={lat:parseFloat(i[0]),lng:parseFloat(i[1])};
var f={zoom:13,center:l};
var k=new google.maps.Map(document.getElementById("map-"+i[0]+"-"+i[1]),{zoom:13,center:l});
var e=new google.maps.Marker({position:l,map:k})
})
}google.maps.event.addDomListener(window,"load",b(c))
}})();
var cmpFeaturedTag=(function(){return{init:function(){a()
}};
function a(){var b=$(".cmp-featuredtag");
if(b.length==0){return
}b.find(".cmp-featuredtag .feature-group-heading").matchHeight();
b.find(".cmp-featuredtag .feature-group-description").matchHeight();
b.find(".cmp-featuredtag .feature-agenda-wrapper").matchHeight();
b.find(".cmp-featuredtag .feature-agenda-card").matchHeight()
}})();
var cmpFeaturedSpeaker=(function(){return{init:function(){a()
}};
function a(){var b=$(".cmp-featuredspeaker");
if(b.length==0){return
}b.find(".jobTitle").matchHeight();
b.find(".company").matchHeight();
b.find(".specialty").matchHeight();
b.find(".member").matchHeight();
b.matchHeight()
}})();
var cmpFeatureBox=(function(){return{init:function(){a()
}};
function a(){var b=$(".cmp-featuredbox");
if(b.length==0){return
}b.find(".title").matchHeight();
b.find(".text").matchHeight();
b.matchHeight()
}})();
var cmpExhibitorsDetail=(function(){return{init:function(){a()
}};
function a(){var b=$(".cmp-exhibitorsdetail");
if(b.length==0){return
}b.find("img.lazy").lazy();
b.find(".lazy").lazy({exhibitorLoader:function(c){c.load()
}})
}})();
var cmpExhibitorList=(function(){return{init:function(){a()
}};
function a(){var b=$(".cmp-exhibitorlist");
if(b.length==0){return
}b.find(".lazy").lazy()
}})();
var cmpExhibitorCarousel=(function(){return{init:function(){a()
}};
function a(){var b=$(".cmp-exhibitorcarousel");
if(b.length==0){return
}var c=function(f){var e=b.find(".carousel-inner-copy .exhibitor").length/f;
for(var d=0;
d<e;
d++){if(d==0){b.find(".carousel-inner").append("<div class='item active'></div>")
}else{b.find(".carousel-inner").append("<div class='item'></div>")
}}b.find(".item").each(function(){for(var g=0;
g<f;
g++){$(this).append(b.find(".carousel-inner-copy").children()[0])
}});
b.find(".carousel-inner-copy").remove()
};
if(window.outerWidth>=992){c(6)
}if(window.outerWidth>=768&&window.outerWidth<992){c(3)
}if(window.outerWidth<768){c(2)
}b.find("#exhibitorcarousel").carousel({interval:6000});
b.find("#exhibitorcarousel").on("slide.bs.carousel",function(){b.find(".lazy").lazy({bind:"event",visibleOnly:true,delay:0})
})
}})();
var cmpEventSiteNavigation=(function(){return{init:function(){a()
}};
function a(){var b=$(".cmp-eventsitenavigation");
if(b.length==0){return
}let $breakpoint=Constants.breakpoint;
let width=$(window).outerWidth();
function c(d){var f=window.location.pathname.replace(".html","");
var e=window.location.hash;
if(e.length>0){f=f+e
}$(".main-menu ul>li>a").each(function(g){var h=$(this).attr("href").replace(".html","");
if(f===h){$(this).parent("li").addClass("current-page");
$(this).closest(".dropdown-submenu").addClass("current-page");
$(this).closest(".dropdown").addClass("current-page")
}});
if(d>$breakpoint){if((navigator.userAgent.match(/iPhone/i))||(navigator.userAgent.match(/iPod/i))||(navigator.userAgent.match(/iPad/i))){let tapped=false;
$(".main-menu .dropdown, .main-menu .dropdown-submenu").on("touchstart",function(g){$(this).addClass("open").siblings().removeClass("open");
let ances=this;
g.stopPropagation();
g.preventDefault();
if(!tapped){tapped=setTimeout(function(){tapped=null;
$(this).toggleClass("open")
},300)
}else{clearTimeout(tapped);
tapped=null;
var h=$(this).children("a").attr("href");
window.location.href=h
}});
$("body").on("touchstart",function(){$(".dropdown,  .dropdown-submenu").removeClass("open")
})
}else{$(".main-menu .dropdown, .main-menu .dropdown-submenu").hover(function(g){$(this).addClass("open");
g.stopPropagation();
g.preventDefault()
},function(g){$(this).removeClass("open");
$(".dropdown").removeClass("open");
g.stopPropagation();
g.preventDefault()
})
}$(".navbar .site-nave").affix({offset:{top:$("header").outerHeight(true)}})
}else{$('[data-toggle="collapse"]').off("click");
$(".tri-common").off("click");
$(".main-menu .dropdown, .main-menu .dropdown-submenu").unbind("mouseenter mouseleave");
if($(".site-nave").hasClass("affix")||$(".site-nave").hasClass("affix-top")){$(".site-nave").removeClass("affix");
$(".site-nave").removeClass("affix-top")
}$(".tri-common").click(function(g){$(this).parent().parent().toggleClass("open");
g.stopPropagation();
g.preventDefault()
});
$(".navbar-toggle").click(function(){$("nav").toggleClass("black-background");
$(".min-screen-logo").toggleClass("hide")
});
$(".collapse").on("show.bs.collapse hide.bs.collapse",function(g){g.preventDefault()
});
$('[data-toggle="collapse"]').on("click",function(g){g.preventDefault();
$($(this).data("target")).toggleClass("in")
})
}}$(function(){c(width);
$(window).resize(function(){width=$(window).outerWidth();
c(width)
})
})
}})();
var cmpEventHeader=(function(){return{init:function(){a()
}};
function a(){var c=$(".cmp-eventheader");
if(c.length==0){return
}var d=b();
if(d){if(localStorage.getItem("firstVisit")!="true"){c.find("#cookie-alert").show();
$(".navigation.affix").css({top:c.find("#cookie-alert").innerHeight()})
}else{c.find("#cookie-alert").hide()
}c.find("#close-cookie-alert").click(function(){localStorage.setItem("firstVisit","true");
c.find("#cookie-alert").slideUp("fast");
$(".navigation.affix").css({top:"0"})
})
}$(".dropdown").click(function(){if(!$(this).hasClass("open")){$(".headerText").blur()
}})
}function b(){try{localStorage.setItem("__test","data")
}catch(c){if(/QUOTA_?EXCEEDED/i.test(c.name)){return false
}}return true
}})();
var cmpEventAgenda=(function(){return{init:function(){a()
}};
function a(){var c=$(".cmp-eventagenda");
if(c.length==0){return
}var g=function(){c.find(".agenda-super-title").each(function(){var h=$(this).text();
$(this).text(formatDateTimeText(h))
})
}();
var d=$(window.location.hash);
d.addClass("in");
d.prev(".agenda-panel-heading").find(".more-less").toggleClass("glyphicon-plus glyphicon-minus");
d.prev(".agenda-panel-heading").removeClass("agenda-panel-heading-clicked theme-bg-color");
d.prev(".agenda-panel-heading").toggleClass("agenda-panel-heading-clicked theme-bg-color");
var f=d.closest(".agenda-panel");
if(f.length){var e=f.offset().top-$(".cmp-sitenavigation #header-area").outerHeight();
$("html,body").animate({scrollTop:e},1000)
}function b(h){$(h.target).prev(".agenda-panel-heading").find(".more-less").toggleClass("glyphicon-plus glyphicon-minus")
}c.find(".agenda-panel-group").on("hidden.bs.collapse",b);
c.find(".agenda-panel-group").on("shown.bs.collapse",b);
c.find(".agenda-panel-heading").on("click",function(){$(this).parent().siblings().find(".agenda-panel-heading").removeClass("agenda-panel-heading-clicked theme-bg-color");
$(this).toggleClass("agenda-panel-heading-clicked theme-bg-color")
});
c.find(".agenda-panel-collapse").on("shown.bs.collapse",function(i){var k=$(this).closest(".panel");
var h=0;
if(window.innerWidth>Constants.breakpoint){h=$(".cmp-sitenavigation #header-area").outerHeight()
}var j=k.offset().top-h;
$("html,body").animate({scrollTop:j},1000)
})
}})();
var cmpConferencebynumbers=(function(){return{init:function(){a()
}};
function a(){var c=$(".cmp-conferencebynumbers");
if(c.length==0){return
}b(c);
$(window).on("scroll",function(){b(c)
})
}function b(c){var d=isElementOnViewPort(c.find(".btCounter"));
if(d){c.find(".onedigit").each(function(){var e=$(this).attr("data-digit");
if(e==","){$(this).css("width","13px");
$(this).children(".n0").text(" ")
}});
c.find(".btCounter .onedigit").removeClass("preload")
}}})();
var cmpButton=(function(){return{init:function(){a()
}};
function a(){var b=$(".cmp-button");
if(b.length==0){return
}b.find(".btn-block").matchHeight()
}})();
var cmpAgenda=(function(){return{init:function(){a()
}};
function a(){var c=$(".cmp-agenda");
if(c.length==0){return
}var g=function(){c.find(".agenda-super-title").each(function(){var h=$(this).text();
$(this).text(formatDateTimeText(h))
})
}();
var d=$(window.location.hash);
d.addClass("in");
d.prev(".agenda-panel-heading").find(".more-less").toggleClass("glyphicon-plus glyphicon-minus");
d.prev(".agenda-panel-heading").removeClass("agenda-panel-heading-clicked theme-bg-color");
d.prev(".agenda-panel-heading").toggleClass("agenda-panel-heading-clicked theme-bg-color");
var f=d.closest(".agenda-panel");
if(f.length){var e=f.offset().top-$(".cmp-sitenavigation #header-area").outerHeight();
$("html,body").animate({scrollTop:e},1000)
}function b(h){$(h.target).prev(".agenda-panel-heading").find(".more-less").toggleClass("glyphicon-plus glyphicon-minus")
}c.find(".agenda-panel-group").on("hidden.bs.collapse",b);
c.find(".agenda-panel-group").on("shown.bs.collapse",b);
c.find(".agenda-panel-heading").on("click",function(){$(this).parent().siblings().find(".agenda-panel-heading").removeClass("agenda-panel-heading-clicked theme-bg-color");
$(this).toggleClass("agenda-panel-heading-clicked theme-bg-color")
});
c.find(".agenda-panel-collapse").on("shown.bs.collapse",function(i){var k=$(this).closest(".panel");
var h=0;
if(window.innerWidth>Constants.breakpoint){h=$(".cmp-sitenavigation #header-area").outerHeight()
}var j=k.offset().top-h;
$("html,body").animate({scrollTop:j},1000)
})
}})();
var cmpAccordion=(function(){return{init:function(){a()
}};
function a(){var c=$(".cmp-accordion");
if(c.length==0){return
}function b(d){$(d.target).prev(".accordion-panel-heading").find(".more-less").toggleClass("glyphicon-plus glyphicon-minus")
}c.find(".accordion-panel-group").on("hidden.bs.collapse",b);
c.find(".accordion-panel-group").on("shown.bs.collapse",b);
c.find(".accordion-panel-heading").on("click",function(){$(this).parent().siblings().find(".accordion-panel-heading").removeClass("accordion-panel-heading-clicked theme-bg-color");
$(this).toggleClass("accordion-panel-heading-clicked theme-bg-color")
});
c.find(".accordion-panel-collapse").on("shown.bs.collapse",function(f){var h=$(this).closest(".panel");
var d=0;
if(window.innerWidth>Constants.breakpoint){d=$(".cmp-sitenavigation #header-area").outerHeight()
}var g=h.offset().top-d;
$("html,body").animate({scrollTop:g},1000)
})
}})();
var Constants={breakpoint:1100};
var scrollToAnchorHash=(function(){return{init:function(){a()
}};
function a(){var e=$(".cmp-sitenavigation #header-area");
d(e);
c(e)
}function d(e){if(window.location.hash.length>0){var f=$(".cmp-articletext "+window.location.hash+",.cmp-featuredbox "+window.location.hash);
if(f.length>0){setTimeout(function(){var h=f.offset().top;
var g=0;
if(window.innerWidth>Constants.breakpoint){if($(".cmp-hero").length>0||e.hasClass("fixed-menu")){g=e.outerHeight()
}else{g=2*e.outerHeight()
}}var i=h-g;
b(i)
},1000)
}}}function c(e){$('a[href*="#"]').each(function(){$(this).click(function(){var f="#"+$(this).attr("href").split("#")[1];
var g=0;
if(e.hasClass("fixed-menu")){g=$(f).offset().top-e.outerHeight()
}else{if(window.innerWidth<=Constants.breakpoint){g=$(f).offset().top
}else{g=$(f).offset().top-2*e.outerHeight()
}}b(g)
})
})
}function b(e){$("html, body").animate({scrollTop:e},1000)
}})();
function findUserAgent(){var a={isIEorEDGE:function(){return(document.documentMode||/Edge/.test(navigator.userAgent))
},isMobile:function(){return/iPhone|iPad|iPod|Android|BlackBerry|Mobile|Opera Mini|IEMobile/i.test(navigator.userAgent)
}};
return a
}function formatDateTimeText(c){var e=c.split("|");
var a=e[0].trim();
var d=e[1].trim();
var f=a.split(" ");
f.splice(4,0,"/");
a=f.join(" ");
var b=d.split(" ");
b.splice(0,4);
d=b.join(" ");
return a+" - "+d
}function isElementOnViewPort(a){if(a.length==0){return false
}else{var c=a.offset().top;
var b=$(window).scrollTop()+window.innerHeight;
if((b>c)){return true
}else{return false
}}}function openclosemenu(a){if($(".cross-btn").hasClass("hide")){$(".hamburger").addClass("hide");
$(".cross-btn").removeClass("hide");
$(".absolute").addClass("black-background-responsive");
$(".btn-style").attr("disabled","disabled");
if(a.currentTarget.className=="btn-style"){$(".dropdown-content").css("display","block");
$(".circle-btn").addClass("open-circle");
$(".navbar-collapse.in").collapse("hide")
}else{$(".dropdown-content").css("display","none")
}}else{if($(".dropdown-content").css("display")=="block"){$(".dropdown-content").css("display","none");
a.stopPropagation()
}else{$(".navbar-collapse").collapse()
}$(".absolute").removeClass("black-background-responsive");
$(".hamburger").removeClass("hide");
$(".cross-btn").addClass("hide");
$(".circle-btn").removeClass("open-circle");
$(".btn-style").removeAttr("disabled")
}a.preventDefault()
}$(function(){cmpEventHeader.init();
cmpSiteNavigation.init();
cmpEventSiteNavigation.init();
cmpHero.init();
cmpButton.init();
cmpRegisterButton.init();
cmpRegistration.init();
cmpExhibitorCarousel.init();
cmpExhibitorList.init();
cmpExhibitorsDetail.init();
cmpFeatureBox.init();
cmpFeaturedSpeaker.init();
cmpFeaturedTag.init();
cmpLeadGen.init();
cmpSpeakerSession.init();
cmpAgenda.init();
cmpEventAgenda.init();
cmpAccordion.init();
cmpGoogleMap.init();
cmpVenue.init();
cmpSpeakerList.init();
cmpConferencebynumbers.init();
cmpLanguages.init();
animate.init()
});
$(window).load(function(){scrollToAnchorHash.init()
});
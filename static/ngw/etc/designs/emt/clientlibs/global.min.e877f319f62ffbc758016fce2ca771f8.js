var cmpBackgroundContainer=(function(){return{init:function(){a()
}};
function a(){var b=$(".cmp-backgroundcontainer");
if(b.length==0){return
}b.each(function(){var e=$(this).find(".differentBgMobile").val();
if(window.innerWidth<=991&&e=="true"){var c=$(this).find(".mobileStyle").val();
$(this).find(".background-container").attr("style",c)
}else{var d=$(this).find(".desktopStyle").val();
$(this).find(".background-container").attr("style",d)
}})
}})();
var cmpVideoPlayer=(function(){return{init:function(){a()
}};
function a(){var b=$(".cmp-video-player");
if(b.length==0){return
}b.find("#videoAccordion").click(function(c){$(this).find(".more-less").toggleClass("glyphicon-plus glyphicon-minus")
})
}})();
var cmpTabCtrl=(function(){return{init:function(){a()
}};
function a(){var b=$(".cmp-tabctrl");
if(b.length==0){return
}topTabs.init();
topTabs.equalHeight();
leftTabs.init();
leftTabs.attachClickEvents()
}})();
var topTabs=(function(){var e;
var c=$(".cmp-tabctrl");
if(c.length==0){return
}return{init:function(){e=$(".top-tabs");
d()
},toSlideDown:function(){e=$(".top-tabs");
b()
},equalHeight:function(){e=$(".top-tabs .tabs-nav");
a()
}};
function d(){e.each(function(g){var j=$(this);
j.attr("id","topTab"+g);
var f="topTab"+g;
var k=j.find(".tabs-nav:first");
var h=j.find(".tabs-content:first");
k.find("a").each(function(m){var i=$(this);
i.attr("href","#topTab"+g+""+m).attr("rel",m);
i.click(function(o){o.preventDefault();
k.find("a").parents("li").removeClass("selected");
h.children(".tab-item").addClass("fakeHide");
h.children(".tab-item[rel="+i.attr("rel")+"]").removeClass("fakeHide");
i.parents("li").addClass("selected");
var n={};
n[f]=m;
if(jQuery.bbq){$.bbq.pushState(n,0)
}if($(document).find("body").hasClass("xs")||$(document).find("body").hasClass("s")){i.parents("li").append(h);
tabTop=i.position().top;
$("html, body").animate({scrollTop:tabTop},100)
}i.blur()
})
});
h.children(".tab-item").each(function(i){$(this).attr("id","topTab"+g+""+i).attr("rel",i)
});
var l=k.width();
k.find("a").parents("li").removeClass("selected");
h.children(".tab-item").addClass("fakeHide");
h.css("visibility","visible");
h.children('.tab-item[rel="0"]').removeClass("fakeHide");
k.find("li:first").addClass("selected")
})
}function b(){e.each(function(){var g=$(this);
var h=g.find(".tabs-nav:first");
var f=g.find(".tabs-content:first");
h.find("a").each(function(i){var k=$(this)
})
})
}function a(){e.each(function(){var f=0;
var g=$(this).find("li");
g.each(function(){var h=$(this).find("a").css("height","auto").height();
if(h>f){f=h
}});
$(g).find("a").height(f)
})
}})();
var leftTabs=(function(){var d;
return{init:function(){d=$(".left-tabs");
c()
},attachClickEvents:function(){d=$(".left-tabs");
d.each(function(){var e=$(this);
if(e.hasClass("option-1")||e.hasClass("option-2")){a(e)
}})
}};
function c(){d.each(function(h){var k=$(this);
var g="leftTab"+h;
k.attr("id","leftTab"+h);
var f=k.find(".tabs-nav:first");
var j=k.find(".tabs-content:first");
f.find("a").each(function(l){var i=$(this);
i.attr("href","#leftTab"+h+""+l).attr("rel",l);
i.unbind();
i.click(function(n){n.preventDefault();
f.find("a").parents("li").removeClass("selected");
j.children(".tab-item").addClass("fakeHide");
j.children(".tab-item[rel="+i.attr("rel")+"]").removeClass("fakeHide");
i.parents("li").addClass("selected");
var m={};
m[g]=l;
if(jQuery.bbq){$.bbq.pushState(m,0)
}})
});
j.children(".tab-item").each(function(i){$(this).attr("id","leftTab"+h+""+i).attr("rel",i)
});
var e=f.height();
k.css("min-height",e);
j.css("min-height",e);
j.css("visibility","visible");
if(!$("body").hasClass("xs")){f.find("a").parents("li").removeClass("selected");
j.children(".tab-item").addClass("fakeHide");
j.children('.tab-item[rel="0"]').removeClass("fakeHide");
f.find("li:first").addClass("selected")
}if(k.hasClass("option-1")||k.hasClass("option-2")){k.find(".tabs-nav:first").find(".arrow-left").remove();
k.find(".tabs-nav:first ul li").eq(0).after('<div class="arrow-left"></div>');
a(k)
}})
}function a(e){e.find(".tabs-nav:first ul li").each(function(){var f=e.find(".tabs-nav:first");
var h=e.find(".tabs-content:first");
var g=$(this);
b(g);
g.find("a").click(function(j){j.preventDefault();
var i=$(this);
$list_items=e.find(".tabs-nav:first ul li");
b(g);
_index=$list_items.index(g);
$arrow=e.find(".tabs-nav:first").find(".arrow-left");
e.find(".tabs-nav:first").find(".arrow-left").remove();
g.after('<div class="arrow-left"></div>')
})
})
}function b(e){$list_selector=e.find(".nav-list-selector");
list_height=(parseInt(e.css("height"))+2)/2;
$list_selector.css("border-width",list_height+"px 0 "+list_height+"px 15px")
}})();
var cmpSearch=(function(){return{init:function(){a()
}};
function a(){var b=$(".cmp-search");
if(b.length==0){return
}jQuery(document).ready(function(c){b.find(".searchString").each(function(d){c(this).val("")
});
b.find(".searchNow").each(function(d){c(this).siblings(".searchString").val("")
})
});
b.find(".searchString").each(function(c){$(this).keydown(function(d){triggerGlobalSearch(d,$(this).val())
})
});
b.find(".searchNow").each(function(c){$(this).click(function(d){triggerGlobalSearch(d,$(this).siblings(".searchString").val())
})
})
}})();
var cmpRelatedContent=(function(){return{init:function(){a()
}};
function a(){var b=$(".cmp-relatedcontent");
if(b.length==0){return
}b.find(".img-style").matchHeight();
b.find(".block-text").matchHeight();
b.find(".block-description").matchHeight();
b.find(".individual-block").matchHeight()
}})();
var cmpInsights=(function(){return{init:function(){a()
}};
function a(){var d=$(".cmp-insights");
if(d.length==0){return
}var b=findUserAgent().isMobile();
var c=$(window).width();
$(".active").css("font-weight","bold");
$(".tab_content").hide();
if(c>781){$(".tab_content:first").show()
}else{$("h3.tab_drawer_heading.d_active").each(function(){var e=$(this).attr("rel");
if(($("div#"+e).css("display")==="none")){$("h3.tab_drawer_heading.d_active").removeClass("d_active")
}})
}$("ul.tabs li").click(function(){$(".tab_content").hide();
var e=$(this).attr("rel");
$("#"+e).show();
$("ul.tabs li").removeClass("active");
$("ul.tabs li").css("font-weight","normal");
$(this).addClass("active");
$(this).css("font-weight","bold");
$(".tab_drawer_heading").removeClass("d_active");
$(".tab_drawer_heading[rel^='"+e+"']").addClass("d_active")
});
$(".tab_container").css("min-height",function(){return $(".tabs").outerHeight()+50
});
$(".tabs li").on("click",function(g){var f=$(this).attr("rel");
$("ul.tabs li[rel="+f+"] i").removeClass("hide");
$("ul.tabs li[rel!="+f+"] i").addClass("hide")
});
$(".tab_drawer_heading").click(function(){var e=$(this).attr("rel");
$("#"+e).toggle();
$(".tab_drawer_heading").removeClass("d_active");
$(this).addClass("d_active");
$("ul.tabs li").removeClass("active");
$("ul.tabs li").css("font-weight","normal");
$("ul.tabs li[rel^='"+e+"']").addClass("active");
$("ul.tabs li[rel^='"+e+"']").css("font-weight","bold");
if(b){$("h3.tab_drawer_heading:not(.d_active)").each(function(){var f=$(this).attr("rel");
$("div#"+f).css("display","none")
});
$("h3.tab_drawer_heading.d_active").each(function(){var f=$(this).attr("rel");
if(($("div#"+f).css("display")==="none")){$("h3.tab_drawer_heading.d_active").removeClass("d_active")
}})
}});
$(".feature-content .heading").matchHeight();
$(".feature-content .content").matchHeight();
$(".feature-content .link").matchHeight()
}})();
var cmpGlobalSiteNavigation=(function(){return{init:function(){b();
a()
}};
function a(){var j=$(".cmp-globalsitenavigation");
if(j.length==0){return
}var i=findUserAgent().isMobile();
var d=window.innerWidth;
var g=1024;
var c;
var h=false;
var f=350,l;
var k;
try{k=$(this).siblings($(".dropdown-menu."+$(this).attr("data-openlink")))
}catch(e){}$(window).on("load",function(){d=window.innerWidth;
h=false;
c=$(".navbar .nav-link.active")
});
$(window).on("resize",function(){d=window.innerWidth;
h=false;
c=$(".navbar .nav-link.active");
$(".nav-link").trigger("mouseleave");
$(".root").removeClass("fixed");
$(".cover").removeClass("overlay");
$(".d-search-slide").removeClass("slideDown").addClass("slideUp");
$(".navbar .nav-item").removeClass("open");
$(".navbar .dropdown-menu").removeClass("open");
$(".navbar .childlinks").removeClass("open").addClass("closed");
$(".navbar .nav-link").removeClass("active");
$(".navbar .dropdown-item").removeClass("active");
$("sublinks div").removeClass("open").addClass("closed");
if(!$("#search-img-grey").hasClass("hide")){$("#search-img-grey").addClass("hide")
}if(d>g){$(".navbar-collapse").removeClass("closed open");
$(".dropdown-menu").removeClass("closed");
$(".expand.nav-link i.fa").removeClass("fa fa-chevron-up fa-chevron-right").addClass("fa fa-chevron-down");
$(".nav-item i.fa").css({position:"relative",right:"auto"});
$(".dropdown-menu").css({display:"none"});
$(".expand").css({position:"relative"})
}else{if(d<=g){$(".navbar-collapse").removeClass("open").addClass("closed");
$(".dropdown-item").css({width:"unset"});
$(".dropdown-menu").css({display:"block"});
$(".expand").css({position:"absolute"})
}}});
$(document).on("mouseenter",".nav-link",function(n){if(d>g){if($(".d-search-slide").hasClass("slideDown")){if(!$("#search-img-grey").hasClass("hide")){$("#search-img-grey").addClass("hide")
}if($("#search-img").hasClass("hide")){$("#search-img").removeClass("hide")
}$(".d-search-slide").removeClass("slideDown").addClass("slideUp");
$(".m-search .glyphicon").removeClass("glyphicon-remove").addClass("glyphicon-search")
}n.stopPropagation();
h=true;
c=$(this).closest(".nav-link");
$(".nav-link").not("a[data-openlink='"+c+"']").removeClass("active");
c.addClass("active");
$(".nav-link i.fa").removeClass("fa-chevron-up").addClass("fa-chevron-down");
$(this).find($("i.fa")).removeClass("fa-chevron-down").addClass("fa-chevron-up");
$(".navbar-collapse:not(.open) .dropdown-menu."+c.attr("data-openlink")).slideToggle({duration:0,start:function(){$(".childlinks").removeClass("open").addClass("closed");
$(".dropdown-item .fa-chevron-right").addClass("hide");
$(".sublinks div:not(."+c.attr("data-openlink")+")").removeClass("open").addClass("closed");
$(".dropdown-menu:not(."+c.attr("data-openlink")+")").hide();
$(".dropdown-menu."+c.attr("data-openlink")).show();
$("."+c.attr("data-openlink")+" .childlinks:nth-child(3)").removeClass("closed").addClass("open");
$("."+c.attr("data-openlink")+" .expand:nth-child(2)").addClass("active");
$("."+c.attr("data-openlink")+" .expand:nth-child(2) i").removeClass("hide");
$("."+c.attr("data-openlink")+" .sublinks div:nth-child(1)").removeClass("closed").addClass("open");
$("."+c.attr("data-openlink")).removeClass("closed").addClass("open")
}})
}}).on("mouseleave",".nav-link",function(){if(d>g){h=false;
l=setTimeout(function(){if(!h){c.removeClass("active");
$(".navbar-collapse .dropdown-menu."+c.attr("data-openlink")).slideToggle({duration:0,start:function(){$(".nav-link i.fa").removeClass("fa-chevron-up").addClass("fa-chevron-down");
$(".parentlink i.fa").addClass("hide");
$(".dropdown-menu:not(."+c.attr("data-openlink")+")").hide();
$(".dropdown-menu."+c.attr("data-openlink")).show()
}})
}},f)
}});
$(document).on("mouseover",".dropdown-menu",function(o){if(d>g){h=true;
var n=c.siblings($(".dropdown-menu."+$(this).attr("data-openlink")));
$(document).on("mouseenter click",".dropdown-item.expand",function(r){if(d>g){var q=$(this).closest($(".dropdown-item"));
var p=q.attr("data-openlink");
$(".parentlink i.fa").addClass("hide");
q.find($("i.fa")).removeClass("hide");
$(".parentlink .dropdown-item.expand").removeClass("active");
q.addClass("active");
$(".childlinks").addClass("closed").removeClass("open");
$(this).next($(".childlinks."+p)).removeClass("closed").addClass("open");
$(".sublinks>div").addClass("closed").removeClass("open");
$(".sublinks ."+p).removeClass("closed").addClass("open")
}})
}}).on("mouseleave",".dropdown-menu",function(){if(d>g){h=false;
$(".navbar-collapse:not(.open) .dropdown-menu."+c.attr("data-openlink")).slideToggle({duration:0,start:function(){c.removeClass("active");
$(".parentlink .dropdown-item.expand").removeClass("active");
$(".nav-link i.fa").removeClass("fa-chevron-up").addClass("fa-chevron-down");
$(".parentlink i.fa").addClass("hide");
$(".dropdown-menu:not(."+c.attr("data-openlink")+")").hide();
$(".dropdown-menu."+c.attr("data-openlink")).show()
}})
}});
$("button.navbar-toggle").on("click",function(n){n.stopPropagation();
if($(".navbar-collapse").hasClass("closed")){$(".m-search-dropdown").removeClass("slideDown").addClass("slideUp");
$(".m-search .glyphicon").removeClass("glyphicon-remove").addClass("glyphicon-search")
}$(".navbar-nav i.fa").removeClass("fa-chevron-down fa-chevron-up hide");
$(".navbar-nav i.fa:not(.fa-chevron-left)").addClass("fa-chevron-right");
$(".navbar-nav .fa-chevron-right").css({position:"absolute",right:"0"});
$(".expand").css({position:"relative",width:"100%"});
$(".nav-item").css("padding-right","15px");
$(".navbar-nav").css("height","100%");
$("a.dropdown-item").css("color","black");
if($(".navbar-collapse").hasClass("open")){$(".cover").removeClass("overlay");
$(".navbar-collapse").removeClass("open").addClass("closed");
$(".root").removeClass("fixed")
}else{$(".cover").addClass("overlay");
$(".navbar-collapse").removeClass("closed").addClass("open");
$(".root").addClass("fixed")
}});
$(".expand").on("click",function(){if(i||d<=g){if(h===false){var n=$(this).attr("data-openlink");
$(".childlinks").removeClass("open").addClass("closed");
$(".sublinks div:not(."+n+")").removeClass("open").addClass("closed");
$("."+n).removeClass("closed").addClass("open");
$(".navbar-collapse:not(.open) .dropdown-menu."+n).slideToggle({duration:0,start:function(){$(".dropdown-menu:not(."+n+")").hide();
$(".dropdown-menu."+n).show()
}})
}}});
$(".back").on("click",function(n){n.stopPropagation;
$(this).closest(".open").removeClass("open active current").addClass("closed")
});
$(".cover").on("click",function(){$(".cover").removeClass("overlay");
$(".root").removeClass("fixed");
$(".navbar-collapse").removeClass("open").addClass("closed")
});
$(".d-search-affix, .m-search").on("click",function(){$(".root").removeClass("fixed");
if($(".d-search-slide").hasClass("slideUp")){if(d<=g&&$(".navbar-collapse").hasClass("open")){$(".childlinks").removeClass("open").addClass("closed");
$(".navbar-collapse").removeClass("open").addClass("closed");
$(".dropdown-menu").removeClass("open");
$(".dropdown-item").css({width:"auto"});
$(".dropdown-menu").css({display:"block"});
$(".childlinks").removeClass("open");
$(".cover").removeClass("overlay")
}$(".d-search-slide").removeClass("slideUp").addClass("slideDown");
$(".m-search .glyphicon").removeClass("glyphicon-search").addClass("glyphicon-remove");
$("#search-img").addClass("hide");
$("#search-img-grey").removeClass("hide");
$(".m-search-dropdown").find(".searchString").select()
}else{$(".d-search-slide").removeClass("slideDown").addClass("slideUp");
$(".m-search .glyphicon").removeClass("glyphicon-remove").addClass("glyphicon-search");
$("#search-img-grey").addClass("hide");
$("#search-img").removeClass("hide")
}});
var m=function(o,r,s){var n=o.outerHeight(),q=s.offset().top;
if(r.scrollTop()>=q){s.height(n);
o.addClass("affix");
$(".d-search-slide").removeClass("slideDown").addClass("slideUp");
$(".navbar .signin").addClass("hide");
$("img.submit-affix").removeClass("hide");
if(!$("#search-img-grey").hasClass("hide")){$("#search-img-grey").addClass("hide")
}if($("#search-img").hasClass("hide")){$("#search-img").removeClass("hide")
}if((!i||d>767)&&d<1200){$(".client").removeClass("hide");
$(".client").css({"padding-right":"10px","font-weight":"bold"})
}if(d>1024){$("img.search-affix").removeClass("hide");
$(".d-search").addClass("hide");
$(".d-search-affix").removeClass("hide");
$("#search-img-grey").addClass("hide")
}if(i&&d<767){$(".client").removeClass("hide");
$(".client").css({"padding-right":"10px","font-weight":"bold"})
}if(d>1024&&d<1200){$(".cli-detail").addClass("hide");
$(".client").removeClass("hide")
}else{if(d<1024){s.height(n);
o.addClass("affix")
}}if(d>1200){$(".cli-detail").removeClass("hide");
$(".client").addClass("hide")
}}else{o.removeClass("affix");
$(".cli-detail").addClass("hide");
$(".btn.btn-success.signin").removeClass("hide");
$("img.submit-affix").addClass("hide");
$(".d-search-slide").removeClass("slideDown").addClass("slideUp");
$(".client").addClass("hide");
if(!i||d<767){$(".client").addClass("hide");
$(".cli-detail").addClass("hide");
$(".signin").removeClass("hide")
}if(d>1024){$("img.search-affix").addClass("hide");
$(".d-search").removeClass("hide");
$(".d-search-affix").addClass("hide");
$("#search-img-grey").addClass("hide");
$("#search-img").addClass("hide");
if($(".d-search-slide").hasClass("slideDown")){$(".d-search-slide").removeClass("slideDown").addClass("slideUp");
$(".m-search .glyphicon").removeClass("glyphicon-remove").addClass("glyphicon-search")
}}s.height("auto")
}if(i){if(d<767){$("i.submit-affix").addClass("hide");
$("i.search-affix").addClass("hide")
}else{if(d>=1024){$("i.submit-affix").addClass("hide");
$("i.search-affix").addClass("hide")
}}}var p=$("#cookie-alert");
if(p.length){if(p.attr("style")!=undefined){if(p.attr("style").replace(/\s+/g,"").indexOf("display:none")<0&&d<=g){$("#navigation-affix").css({top:p.outerHeight()});
$("#size").css({height:p.outerHeight()+n});
$(".navbar-collapse").css({top:p.outerHeight()+n});
$(".d-search-slide").css({top:p.outerHeight()+n})
}else{$("#navigation-affix").css({top:"0"})
}}}};
$('[data-toggle="affix"]').each(function(){var n=$(this),o=$('<div id="size"></div>');
n.before(o);
$(window).on("scroll resize",function(){m(n,$(this),o)
});
m(n,$(window),o)
});
$("#signin-button").click(function(){location.href=$("a.signinredirect").attr("href")
})
}function b(){var d=storageEnabled();
var c=$("#cookie-alert");
if(d==true){if(localStorage.getItem("firstVisit")!="true"){c.show();
$(".navigation.affix").css({top:c.innerHeight()})
}else{c.hide()
}$("#close-cookie-alert").click(function(){c.slideUp("fast");
localStorage.setItem("firstVisit","true");
$(".navigation.affix").css({top:"0"});
$("#size").css({height:$(".affix").outerHeight()});
$(".navbar-collapse").css({top:$("#navigation-affix").outerHeight()});
$(".d-search-slide").removeAttr("style")
})
}}})();
var cmpGlobalInsights=(function(){return{init:function(){a()
}};
function a(){var d=$(".cmp-globalinsights");
if(d.length==0){return
}var b=findUserAgent().isMobile();
var c=$(window).width();
d.find(".active").css("font-weight","bold");
d.find(".tab_content").hide();
if(c>781){d.find(".tab_content:first").show()
}else{d.find("h3.tab_drawer_heading.d_active").each(function(){var e=$(this).attr("rel");
if(d.find("div#"+e).css("display")==="none"){d.find("h3.tab_drawer_heading.d_active").removeClass("d_active")
}})
}d.find("ul.tabs li").click(function(){d.find(".tab_content").hide();
var e=$(this).attr("rel");
d.find("#"+e).show();
d.find("ul.tabs li").removeClass("active");
d.find("ul.tabs li").css("font-weight","normal");
$(this).addClass("active");
$(this).css("font-weight","bold")
});
d.find(".tabs li").on("click",function(g){var f=$(this).attr("rel");
d.find("ul.tabs li[rel="+f+"] i").removeClass("hide");
d.find("ul.tabs li[rel!="+f+"] i").addClass("hide")
});
d.find(".accordian-drawer").click(function(){var e=$(this).attr("rel");
d.find("#"+e).toggle();
d.find(".more-less").each(function(){$(this).removeClass("glyphicon-minus");
$(this).addClass("glyphicon-plus");
$(this).siblings().removeClass("d-active")
});
$(this).find(".more-less").addClass("glyphicon-minus");
$(this).find(".more-less").removeClass("glyphicon-plus");
if(b){d.find(".more-less:not(.glyphicon-minus)").each(function(){var f=$(this).parent().attr("rel");
d.find("div#"+f).css("display","none")
});
d.find(".more-less.glyphicon-minus").each(function(){var f=$(this).parent().attr("rel");
if(d.find("div#"+f).css("display")==="none"){$(this).removeClass("glyphicon-minus");
$(this).addClass("glyphicon-plus");
$(this).siblings().removeClass("d-active")
}else{$(this).siblings().addClass("d-active")
}});
d.find(".d-active").each(function(){$(this).parent().css("border-bottom","none")
})
}});
d.find(".feature-content .heading").matchHeight();
d.find(".feature-content .content").matchHeight();
d.find(".feature-content .link").matchHeight();
d.find(".lazy").lazy({insightsLoader:function(e){e.load()
}})
}})();
var cmpCarousel=(function(){return{init:function(){a()
}};
function a(){var c=$(".cmp-carousel");
if(c.length==0){return
}c.find("a.carousel-control").click(function(f){f.preventDefault()
});
function d(){var f;
var e=false;
c.each(function(){var g=$(this).find(".carousel");
if(g.find("#editMode").val()=="true"){g.carousel({interval:false});
e=true
}});
if(e){return
}if(window.innerWidth<1024){c.each(function(){$(this).find(".carousel-arrows").css("display","none");
$(this).find(".carousel-control").css("display","none");
f=false;
$(this).find(".item").each(function(){$(this).addClass("active")
})
})
}else{c.each(function(){$(this).find(".carousel-arrows").css("display","block");
$(this).find(".carousel-control").css("display","block");
$(this).find(".item").each(function(){$(this).removeClass("active")
});
$(this).find(".item:first-child").addClass("active")
});
b()
}}d();
$(window).resize(function(){d()
});
function b(){c.each(function(){var f;
var e=$(this);
var g=$(this).find(".carousel");
if((g.find("#frequency").val()=="")){f=false
}else{f=g.find("#frequency").val()
}g.carousel({interval:f});
$(this).find(".indicators").each(function(){$(this).unbind().click(function(){var h;
$(this).siblings().each(function(){$(this).removeClass("active")
});
$(this).addClass("active");
h=$(this).attr("data-slide-to");
e.find(".item").each(function(){$(this).removeClass("active")
});
e.find(".item").eq(h).addClass("active")
})
});
$(this).find(".glyphicon-chevron-right").unbind().click(function(){var j=$(this).closest("#carousel-generic");
var i=j.find(".carousel-inner").find(".active");
i.removeClass("active");
if(i.next().length!=0){i.next().addClass("active")
}else{j.find(".item:first-child").addClass("active")
}var h=j.find(".carousel-indicators").find(".active");
h.removeClass("active");
if(h.next().length!=0){h.next().addClass("active")
}else{j.find(".indicators:first-child").addClass("active")
}});
$(this).find(".glyphicon-chevron-left").unbind().click(function(){var j=$(this).closest("#carousel-generic");
var i=j.find(".carousel-inner").find(".active");
i.removeClass("active");
if(i.prev().length!=0){i.prev().addClass("active")
}else{j.find(".item:last-child").addClass("active")
}var h=j.find(".carousel-indicators").find(".active");
h.removeClass("active");
if(h.prev().length!=0){h.prev().addClass("active")
}else{j.find(".indicators:last-child").addClass("active")
}})
})
}}})();
var cmpAccordion=(function(){return{init:function(){a()
}};
function a(){var d=$(".cmp-accordion");
var e=d.find(".collapse");
if(d.length==0){return
}function c(g){g.preventDefault();
var f=$(this);
if(f.hasClass("accordion-expand")){f.removeClass("accordion-expand").addClass("accordion-collapse");
e.collapse("show")
}else{f.removeClass("accordion-collapse").addClass("accordion-expand");
e.collapse("hide")
}}function b(j){var h=$(j.target);
h.prev(".accordion-panel-heading").find(".more-less").toggleClass("glyphicon-plus glyphicon-minus");
h.prev(".accordion-panel-heading").toggleClass("accordion-panel-heading-clicked theme-bg-color");
var i=h.parent().parent().find(".accordion-body").length;
var g=h.parent().parent().find(".accordion-body[aria-expanded='true']").length;
var k=h.parent().parent().find(".accordion-body[aria-expanded='false']").length;
var f=h.parents(".cmp-accordion").find(".accordion-button");
if(g===i){f.removeClass("accordion-expand").addClass("accordion-collapse")
}else{if(k===i){f.removeClass("accordion-collapse").addClass("accordion-expand")
}}}d.find(".accordion-panel-group").on("hidden.bs.collapse",b);
d.find(".accordion-panel-group").on("shown.bs.collapse",b);
d.find(".accordion-button").on("click",c);
if(d.find(".accordion-panel").hasClass("author")){e.collapse("show")
}d.find(".accordion-panel-collapse").on("shown.bs.collapse",function(g){var i=$(this).closest(".panel");
var f=0;
if(window.innerWidth>Constants.breakpoint){f=$(".cmp-sitenavigation #header-area").outerHeight()
}var h=i.offset().top-f;
$("html,body").animate({scrollTop:h},1000)
})
}})();
var Constants={breakpoint:1100};
$(document).ready(function(){cmpSearch.init();
cmpGlobalSiteNavigation.init();
cmpBackgroundContainer.init();
cmpInsights.init();
cmpGlobalInsights.init();
cmpAccordion.init();
cmpCarousel.init();
cmpVideoPlayer.init();
cmpRelatedContent.init();
cmpTabCtrl.init()
});
function findUserAgent(){var a={isIEorEDGE:function(){return(document.documentMode||/Edge/.test(navigator.userAgent))
},isMobile:function(){return/iPhone|iPad|iPod|Android|BlackBerry|Mobile|Opera Mini|IEMobile/i.test(navigator.userAgent)
}};
return a
}function isElementOnViewPort(a){if(a.length==0){return false
}else{var c=a.offset().top;
var b=$(window).scrollTop()+window.innerHeight;
if((b>c)){return true
}else{return false
}}}function triggerGlobalSearch(c,b){if(c.which==13||c.which==1){c.preventDefault();
var a=$("#searchTargetUrl").val();
var e="?keywords="+b;
var d=a+e;
window.open(d,"_self")
}}function storageEnabled(){try{localStorage.setItem("__test","data")
}catch(a){if(/QUOTA_?EXCEEDED/i.test(a.name)){return false
}}return true
};
var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function show_left(catid,tabid){
	var snum=document.getElementById("tabmenu"+catid+tabid).parentNode.getElementsByTagName("a").length;		
	for(var i=0;i<snum;i++){document.getElementById("tabmenu"+catid+i).className="left_hide";}
	for(var i=0;i<snum;i++){document.getElementById("tabc"+catid+i).style.display="none";}
	document.getElementById("tabmenu"+catid+tabid).className="left_hot";
	document.getElementById("tabc"+catid+tabid).style.display="";
}
function show_leftp(catid,tabid){
	var snum=3;
	for(var i=0;i<snum;i++){document.getElementById("tabmenu"+catid+i).className="left_hidep";}
	for(var i=0;i<snum;i++){document.getElementById("tabc"+catid+i).style.display="none";}
	document.getElementById("tabmenu"+catid+tabid).className="left_hotp";
	document.getElementById("tabc"+catid+tabid).style.display="";
}
function show_mid(catid,tabid){
	var snum=document.getElementById("tabmenu"+catid+tabid).parentNode.getElementsByTagName("a").length;		
	for(var i=0;i<snum;i++){document.getElementById("tabmenu"+catid+i).className="mid_hide";}
	for(var i=0;i<snum;i++){document.getElementById("tabc"+catid+i).style.display="none";}
	document.getElementById("tabmenu"+catid+tabid).className="mid_hot";
	document.getElementById("tabc"+catid+tabid).style.display="";
}

function show_right(catid,tabid){
	var snum=document.getElementById("tabmenu"+catid+tabid).parentNode.getElementsByTagName("a").length;		
	for(var i=0;i<snum;i++){document.getElementById("tabmenu"+catid+i).className="right_hide";}
	for(var i=0;i<snum;i++){document.getElementById("tabc"+catid+i).style.display="none";}
	document.getElementById("tabmenu"+catid+tabid).className="right_hot";
	document.getElementById("tabc"+catid+tabid).style.display="";
}

}
/*
     FILE ARCHIVED ON 06:54:28 Dec 25, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:51:13 Aug 10, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.493
  exclusion.robots: 0.027
  exclusion.robots.policy: 0.018
  esindex: 0.01
  cdx.remote: 18.707
  LoadShardBlock: 555.673 (3)
  PetaboxLoader3.resolve: 619.577 (5)
  PetaboxLoader3.datanode: 199.861 (5)
  load_resource: 304.275 (2)
*/
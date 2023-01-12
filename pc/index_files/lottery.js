var bOver=false;
var lottery={
	index:0,    //当前转动到哪个位置，起点位置
	count:0,    //总共有多少个位置
	timer:0,    //setTimeout的ID，用clearTimeout清除
	speed:20,    //初始转动速度
	times:0,    //转动次数
	cycle:50,    //转动基本次数：即至少需要转动多少次再进入抽奖环节
	prize:1,    //中奖位置
	init:function(id){
		if ($("#"+id).find(".item").length>0) {
			$lottery = $("#"+id);
			$units = $lottery.find(".item");
			this.obj = $lottery;
			this.count = $units.length;
			$lottery.find('.item-' + this.index).addClass("active");
		};
	},
	roll:function(){
		var index = this.index;
		var count = this.count;
		var lottery = this.obj;
		$(lottery).find('.item-' + index).removeClass("active");
		index += 1;
		if (index>count-1) {
			index = 0;
		};
		$(lottery).find('.item-' + index).addClass("active");
		this.index=index;
		return false;
	},
	stop:function(index){
		this.prize=index;
		return false;
	}
};
var lottery_num=-1;
function roll(){
	lottery.times += 1;
	lottery.roll();
	
	if (lottery.times > lottery.cycle+10 && lottery.prize==lottery.index) {
		clearTimeout(lottery.timer);
		lottery.prize=-1;
		lottery.times=0;
		$('.mask').fadeIn();
		$('.prize').fadeIn();
		bOver=false;
	}else{
		if (lottery.times<lottery.cycle) {
			lottery.speed -= 10;
		}else if(lottery.times==lottery.cycle) {
			lottery.prize =lottery_num;        
		}else{
			if (lottery.times > lottery.cycle+10 && ((lottery.prize==0 && lottery.index==this.count-1) || lottery.prize==lottery.index+1)) {
				lottery.speed += 110;
			}else{
				lottery.speed += 20;
			}
		}
		if (lottery.speed<40) {
			lottery.speed=40;
		};
		lottery.timer = setTimeout(roll,lottery.speed);
	}
	return false;
}

var clickCount=0;
$(function(){
	lottery.init('lottery');
	$(".btn-close").click(function(){
		$('.mask').hide();
		$('.opwin').fadeOut();
	});
});

function checkMobile(str){
	var r=/1[3-8]+\d{9}/;
	if(!r.test(str))
		return false;
	return true;
}

function playMusic() {
    var audioEle = document.getElementById("b1");
    audioEle.load();
    audioEle.play();   
}

function start(){
	if (bOver) return false;
	bOver=true;
	playMusic();
	var total=0,tmp_arr=new Array(),tn=0,lot=0;
    $('.pic-list dl').each(function(){
		total+= $(this).attr('data-num')*1;
		tmp_arr[tn]=total;
		tn++;
	});
	//console.log(total + '##');
	tn=0;
    var rn = parseInt(Math.random() * total)+0,lot=0;
    $('.pic-list dl').each(function(){
		if(rn<tmp_arr[tn]){
			lot=tn;
			return false;
		}
		tn++;
	});
	lottery_num=lot;
	//console.log(lottery_num + '---');
	roll(); 
	lottery.speed=100;
	var src=$('.item-' + lot).find('img').attr('src');
	$('.prize ul').html('<img src="' + src + '">');
	$('.prize h3').text($('.item-' + lot).find('img').attr('data-tt'));
	
    window.localStorage.setItem("toshare" + uid,1);
    window.localStorage.setItem("prizeImg" + uid,src);
}

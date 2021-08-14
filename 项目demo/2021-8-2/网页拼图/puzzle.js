var time = 0
//保存定时时间
var pause = true
//设置是否暂停标志，true表示暂停。
var set_timer;
var d = new Array(10)
var d_direct = new Array(
    [0],
    [2,4],
    [1,3,5],
    [2,6],
    [1,5,7],
    [2,4,6,8],
    [3,5,9],
    [4,8],
    [5,7,9],
    [6,8]
);
var d_posXY = new Array(
    [0],
    [0,0],
    [150,0],
    [300,0],
    [0,150],
    [150,150],
    [300, 150],
    [0,300],
    [150,300],
    [300,300]
);
d[1]=1;
d[2]=2;
d[3]=3;
d[4]=4;
d[5]=5;
d[6]=6;
d[7]=7;
d[8]=8;
d[9]=0;

function move(id){
    var i = 1;
    for(i = 1;i<10;++i){
        if(d[i]==id)break;
    }
    var target_d=0;
    target_d =whereCanTo(i)
    if(target_d!=0){
        d[i]=0;
        d[target_d]=id;
        document.getElementById('d'+id).style.left =  d_posXY[target_d][0]+'px';
        document.getElementById('d'+id).style.top =  d_posXY[target_d][1]+'px';
    }
    var finish_flag = true;
    for(var k =1;k<9;++k){
        if(d[k]!=k){
            finish_flag = false;
            break;
        }
    }

    if(finish_flag==true){
        if(!pause)
        start();
        alert('congratulation')
    } 
}
//如果为true，则表示游戏完成，如果游戏没有暂停，则调用暂停函数，并且弹出提示框，完成游戏
function whereCanTo(cur_div) {
    //判断是否可移动函数，参数是大DIV的编号，不是小DIV的编号，因为小DIV编号跟可以去哪没关系，小DIV是会动的
    var j = 0;
    var move_flag = false;
    for (j = 0; j < d_direct[cur_div].length; ++j) {
      //把所有可能去的位置循环遍历一下
      if (d[d_direct[cur_div][j]] == 0) {
        move_flag = true;
        break;
      }
      //如果目标的值为0，说明目标位置没有装小DIV，则可以移动，跳出循环
    }
    if (move_flag == true) {
      return d_direct[cur_div][j];
    } else {
      return 0;
    }
    //可以移动，则返回目标位置的编号，否则返回0，表示不可移动
  }
  
  

function timer(){
    time +=1;
    var min =parseInt(time/60);
    var sec = time % 60 //取余就是秒
    document.getElementById('timer').innerHTML = min + '分' +sec + '秒'
}

function start(){
    if(pause){
        document.getElementById('start').innerHTML = '暂停';
        pause =false;
        set_timer =setInterval(timer,1000);
    }else{
        document.getElementById('start').innerHTML = '开始'
        pause = true
        clearInterval(set_timer);
    }
}

function reset(){
     time = 0;
     random_d();
     if(pause)
     start()
}
function random_d() {
    for (var i = 9; i > 1; --i) {
      var to = parseInt(Math.random() * (i - 1) + 1); //产生随机数，范围为1到i，不能超出范围，因为没这个id的DIV
      if (d[i] != 0) {
        document.getElementById('d' + d[i]).style.left = d_posXY[to][0] + 'px';
        document.getElementById('d' + d[i]).style.top = d_posXY[to][1] + 'px';
      }
      //把当前的DIV位置设置为随机产生的DIV的位置
      if (d[to] != 0) {
        document.getElementById('d' + d[to]).style.left = d_posXY[i][0] + 'px';
        document.getElementById('d' + d[to]).style.top = d_posXY[i][1] + 'px';
      }
      //把随机产生的DIV的位置设置为当前的DIV的位置
      var tem = d[to];
      d[to] = d[i];
      d[i] = tem;
      //然后把它们两个的DIV保存的编号对调一下
    }
  }
window.noload =function(){
    reset();
}

window.onload=function(){
    // 当鼠标经过“登录”时，登录字样出现横线，鼠标移除时横线消失
    $(".title .login a").mouseenter(function(){
       $('.title .login a').addClass('line');
    });
    $(".title .login a").mouseleave(function(){
        $(".title .login a").removeClass("line")
    })
    // --------------------------------
    // 当鼠标移动到每个小li里面 里面的图片由上三角变成下三角
    // 获取li元素，循环，鼠标经过哪个li哪里li变成上三角，其他的不变，鼠标移出
    // 时，上三角变为下三角
    var lis=$('.title .banner ul li');
    
    var imgList=$('.title .banner ul li i')
    var spans=$('.title .banner ul li span')

  
     
   

    for(var i=0;i<lis.length;i++){
        lis[i].index=i;
        lis[i].onmouseenter=function(){
        // 点击哪个li让哪个li下面对应的i里面的HTML内容替换为下三角 
        //先清除所有人，在将自己进行添加
        imgList[this.index].innerHTML='  ';
      imgList[this.index].innerHTML='<img src="./images/shangsanjiaoxing.png" alt="">'
      spans[this.index].style.color=' '
      spans[this.index].style.color='#2771FA'
      
        }
        lis[i].onmouseleave=function(){
            imgList[this.index].innerHTML='  ';
            imgList[this.index].innerHTML=' <img src="./images/below-s.png" alt="">'
            spans[this.index].style.color='#333333'
        }
        
    }
    

// ---------------------------------------------------
// 点击span切换图片 点击第一个span显示第一张图片
var  btnsList=$('.content .btn button')
var conImg=$(".content #myImg")
  btnsList[0].onclick=function(){
       conImg.attr('src','./images/b1.jpg')
  }
  btnsList[1].onclick=function(){
    conImg.attr('src','./images/b2.png')
}
btnsList[2].onclick=function(){
    conImg.attr('src','./images/b3.png')
}
// -----------------------------------
// 鼠标移入接受图片，给图片加边框，鼠标移出图片边框消失
 var simgList=$('.show .pics div .showImg a img');
 for(var i=0;i<simgList.length;i++){
     simgList[i].index=i;
     simgList[i].onmouseenter=function(){
         this.classList.remove("bor")
         this.classList.add('bor')
     }
     simgList[i].onmouseleave=function(){
        this.classList.remove("bor")
    
    }
 }
//  --------------------------
var sliList=$('.show .pics div .page a li');
for( var i=0;i<sliList.length;i++){
    sliList[i].index=i;
    sliList[i].onmouseenter=function(){
        this.classList.remove("underline")
        this.classList.add('underline')
    }
    sliList[i].onmouseleave=function(){
        this.classList.remove("underline")
        
    }
}
// ---------------------------------------------
var goodsList=$('.goodList .one ul li');
for( var i=0;i<goodsList.length;i++){
    goodsList[i].index=i;
    goodsList[i].onmouseenter=function(){
        this.classList.remove("bac")
        this.classList.add('bac')
    }
    goodsList[i].onmouseleave=function(){
        this.classList.remove("bac")
        
    }
}

// --------------------------------
var good2List=$(".goodList2 ul li")
for( var i=0;i<good2List.length;i++){
    good2List[i].index=i;
    good2List[i].onmouseenter=function(){
        this.classList.remove("bac")
        this.classList.add('bac')
    }
    good2List[i].onmouseleave=function(){
        this.classList.remove("bac")
        
    }
}
// ------------------------------------
var bspanList=$('.bottom .bottomContent ul li span')
for( var i=0;i<bspanList.length;i++){
    bspanList[i].index=i;
    bspanList[i].onmouseenter=function(){
        this.classList.remove("underline")
        this.classList.add('underline')
    }
    bspanList[i].onmouseleave=function(){
        this.classList.remove("underline")
        
    }
}
var belowspan=$(".bleow div a span");
for( var i=0;i<belowspan.length;i++){
    belowspan[i].index=i;
    belowspan[i].onmouseenter=function(){
        this.classList.remove("underline")
        this.classList.add('underline')
    }
    belowspan[i].onmouseleave=function(){
        this.classList.remove("underline")
        
    }
}
// --------------------------------------------------
var intro=$(".title .banner ul li span");
// var introdiv=$('.title .introduce')

intro[1].onmouseenter=function(){
    $('.title .introduce').show();
}
intro[1].onmouseleave=function(){
    $('.title .introduce').hide();
}
var introList=$(".introduce .clo1 ul li")


}


$('#myCarousel').carousel({
    pause:'hover',
    interval:6000,
});

function onKeyDown(event){
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if(e && e.keyCode==27){ // 按 Esc
        alert("按下Esc键")
    }
    if(e && e.keyCode==113){ // 按 F2
        alert("按下F2键")
    }
    if(e && e.keyCode==13){ // enter 键
        alert("此处回车触发搜索事件");
    }
}

function onSearch() {
    alert("点击了搜索按钮")
}
(function() {
    //
    function evtListener(ele, type, listener) {
        if (window.addEventListener) {
            ele.addEventListener(type, listener);
        } else {
            ele.attachEvent('on' + type, listener);
        };
    };

    function removeListener(ele, type, listener) {
        if (window.addEventListener) {
            ele.removeEventListener(type, listener);
        } else {
            ele.detachEvent('on' + type, listener);
        };
    };

    //////////////
    function headerTouchMoveHandle(e) {
        var scrollTop = document.body.scrollTop
            //滚动到顶部执行
        e.preventDefault();
        if (scrollTop == 0) {
            //ajax调用
            console.log('fe')
        }
    }
    var queueHead = document.getElementById("queueHead");
    //注册事件
    evtListener(queueHead, 'touchmove', headerTouchMoveHandle)

    var queueMain = document.getElementById("queueMain");

    function mainTouchMoveHandle(e) {
        var scrollTop = queueMain.scrollTop
            //滚动到顶部执行
        e.preventDefault();
        if (scrollTop == 0) {
            //ajax调用
            console.log('fe')
        } else {

        }
    }

    function mainTouchEndHandle(e) {
        var clientY = e.changedTouches[0].clientY
    }
    evtListener(queueMain, 'touchmove', mainTouchMoveHandle);
    evtListener(queueMain, 'touchend', mainTouchEndHandle);
    //
})
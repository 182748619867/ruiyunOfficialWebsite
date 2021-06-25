function animate(obj, target, callback) {
    // console.log(callback);  callback = function() {}  调用的时候 callback()

    // 先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        // 步长值写到定时器的里面
        // 把我们步长值改为整数 不要出现小数的问题
        // var step = Math.ceil((target - obj.offsetLeft) / 10);
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            // 停止动画 本质是停止定时器
            clearInterval(obj.timer);
            // 回调函数写到定时器结束里面
            // if (callback) {
            //     // 调用函数
            //     callback();
            // }
            callback && callback();
        }
        // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
        obj.style.left = obj.offsetLeft + step + 'px';

    }, 15);
}
window.addEventListener('load', function() {
    // 获取元素
    var btnlf = document.querySelector('.btnlf');
    var btnrf = document.querySelector('.btnrf');
    var row = document.querySelector('.lunbo');
    var show_area = document.querySelector('.show-area');
    var showWidth = show_area.offsetWidth;

    // 事件触发，程序实现
    var num = 2;
    var target = 0;
    // 右侧按键
    btnrf.addEventListener('click', function() {
            // console.log(showWidth);
            num++;
            // console.log(num * showWidth + 30);
            // console.log(num);
            if (num == 8) {
                row.style.left = 0;
                num = 2;
            }
            target = num * (showWidth + 30);
            animate(row, -target);
        })
        // 左侧按键
    btnlf.addEventListener('click', function() {
            // console.log(showWidth);
            num--;
            // console.log(num * showWidth + 30);
            // console.log(num);
            if (num == -1) {
                // row.style.left = 3 * (showWidth + 30) + 'px';
                num = 5;
            }
            target = num * (showWidth + 30);
            animate(row, -target);

        })
        // 自动播放
    var timer = this.setInterval(function() {
        btnrf.click();
    }, 4000);

})
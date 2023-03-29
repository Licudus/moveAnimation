function moveAnimation(obj, target, callback) {
    // obj目标对象，target目标位置
    // 定时器实现动画效果
    // 保证当前只有一个定时器在运行，因为当我们不断点击，会有越来越多的定时器被开启，速度会越来越快（为啥）
    clearInterval(obj.timer);
    // 给不同元素指定不同的定时器obj.timer
    obj.timer = setInterval(function () {
        // 设置可变化的移动数值
        let step = (target - obj.offsetLeft) / 10;
        // step大于0，向上取整，小于0，向下取整
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        // 如果移动到了400的位置，停止移动
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);

            // 结束后如果有callback，则调用callback函数
            // if (callback) {
            //     callback();
            // }
            callback && callback();
        }
        // 获取位置用offset，改变位置用style.left，每隔一段时间移动相应距离
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15)
}
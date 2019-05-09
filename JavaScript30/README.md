第一天的练习是用JS制作一个爵士鼓的页面，通过敲击键盘上不同的字母，会发出不同的声音，并且页面上会伴随着敲击的动画。
想要实现以上效果，大致思路和解决方案如下：

*   检测到键盘上什么键被按下--监听`keydown`事件
*   在按键被按下的时候，播放音效--`audio.play()`
*   在按键被按下的同时，播放动画--`Element.classList.add('className')`
*   在动画结束后，移除动画，不然之后再点击不会有任何效果--`Element.classList.remove('className')`


[Demo](https://github.com/dsc19968/MyLearn/JavaScript30/01/index.html)

[详解](https://github.com/liyuechun/JavaScript30-liyuechun/tree/master/01%20-%20JavaScript%20Drum%20Kit)
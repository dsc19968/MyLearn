第二天的练习是用JS+CSS模拟时钟效果。
实现以上模拟时钟的效果，大致思路和解决方案如下：

*   分别获取到当前时间的时、分、秒。
*   通过时分秒对一圈360度，进行映射，确定每一个指针所需旋转的角度。
*   通过CSS的`transform：rotate(deg)`，来实时的调整指针在键盘中的位置。


[Demo](https://github.com/dsc19968/MyLearn/JavaScript30/01/index.html)

[详解](https://github.com/liyuechun/JavaScript30-liyuechun/tree/master/02%20-%20JS%20and%20CSS%20Clock)
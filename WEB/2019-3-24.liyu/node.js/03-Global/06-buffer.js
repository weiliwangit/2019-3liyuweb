// 一个英文字母=2个16进制数如：“z”代表了16进制数“7a”，=1b
// 一个汉字=六个16进制数=3b
// 8bit=1b=2个16进制数
//Buffer是用来存放二进制数据的容器类似于数组,在计算机上显示的是16进制数，
// 转化成16进制数需要加0x+加上16进制数，如：0xe5
const buf=Buffer.from("z")//是用来转换成16进制数显示出来
const buf2=Buffer.from("1")
const buf3=Buffer.from("你好")

// console.log(buf)
// console.log(buf2)
// console.log(buf3)
const buf5=Buffer.alloc(10)//括号里填的数字代表了这个buffer里有多少组数据、
console.log(buf5)//<Buffer 00 00 00 00 00 00 00 00 00 00>


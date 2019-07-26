//流stream是一种中处理数据的抽象接口,是将数据分割成一段一段的来处理,提高效率
//流可以是可读的、可写的、或是可读写的,所有的流都是 EventEmitter 的实例


// 标准的输出设备是一个可写流
process.stdout.write("hello")

//全局变量
let path = require("path");
let fs = require("fs");
let http = require("http");
process.env
console.log(process.env)
if(process.env.dev==true){
	console.log("我是开发环境")
}else{
	console.log("我是生产环境")
}
process.argv	
console.log(process.argv);
let num1 = parseInt(process.argv[2])
let num2 = parseInt(process.argv[3])
console.log(num1+num2)
console.log(__dirname)
console.log(path.dirname('./node/a/b/c/l.jpg'))
console.log(path.basename('./node/a/b/c/l.jpg'))
console.log(path.extname('./node/a/b/c/l.jpg'))
console.log(path.resolve(__dirname,"a.js"))//把a.js的绝对路径拿出来不要./a.js
fs对文件的操作(异步操作)
fs.readFile("./b.txt",(err,data)=>{
	if(err){
		console.log(err)
	}else{
		console.log(data.toString())
	}
	
});
fs.writeFile("c.txt","nihao",{flag:"a"},(err,data)=>{
	if(err){throw err}else{
		console.log(132)
	}
//	
})
文件操作。同步的模式
let c= fs.readFileSync("./b.txt")
console.log(c.toString())

let d = fs.writeFileSync("./c.txt","覆盖掉nihao")
console.log(d)//会返回undefined
let a = require("./module.js")
//console.log(a.a)
a();//	console.log("我来啦")
let url = require("url")
http.createServer((request,response)=>{
console.log(url.parse(request.url,true))
fs.readFile(`./${request.url}`,(err,data)=>{
	if(err){
		
		response.end("失败啦");
	}else{
		response.end(data)
	}
})
response.write("index")
response.end();
let {pathname,query}=url.parse(request.url,true)
console.log(pathname.query)
let {pathname,query}=url.parse(request.url,true)
console.log(pathname,query)
}).listen(8080)
function a(){
	console.log("node里面的方法都会直接执行")
}

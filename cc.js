let http = require("http");
let url = require("url")
http.createServer((req,res)=>{
	let {pathname,query}=url.parse(req.url,true);
	console.log(pathname,query);
    res.setHeader("Access-Control-Allow-Origin","*");//解决了跨域的问题
    console.log("132");
	res.end(JSON.stringify({
					err:1,
					msg:"密码错误"
				}))
}).listen(8080)

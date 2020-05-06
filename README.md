# koa2x
service koa2x
view-koa/
|
+- controllers/ <-- Controller
|
+- node_modules/ <-- npm安装的所有依赖包
|
+- static/
   |
   +- css/ <- 存放bootstrap.css等
   |
   +- fonts/ <- 存放字体文件
   |
   +- js/ <- 存放bootstrap.js等  
|
+- views/ <-- html模板文件
|
+- app.js <-- 使用koa的js
|
+- controller.js <-- 扫描注册Controller
|
+- package.json <-- 项目描述文件
|
+- static-files.json <-- 处理静态文件
|
+- templating.json <-- 给ctx加上render()来使用Nunjucks

 

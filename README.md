# koa2x
service koa2x
mysql v5.7.30
在终端中输入添加MySQL路径的命令：
PATH="$PATH":/usr/local/mysql/bin
连接本地数据库，错误信息为：Access denied for user 苹果->系统偏好设置->最下面点mysql，关闭mysql服务
第二步：进入终端输入（cd /usr/local/mysql/bin/）回车
输入（sudo su）回车以获取管理员权限
输入（./mysqld_safe --skip-grant-tables &）回车以禁止mysql验证功能，mysql会自动重启，偏好设置中的mysql状态会变成running
第三步：输入命令（./mysql）回车
输入命令（flush privileges;）分号别忘记输了
输入命令（set password for 'root'@'localhost' = password('root');） password('root')中的root为新密码，自己随便设置，分号别忘记输入
至此，密码修改成功，可以正常登入了。
mysql -u root -p mysql

view-koa/
|
+- config/
|  |
|  +- mysql
|  |  
|  |  +- config.js <-- 配置文件入口
|  |  +- config-default.js <-- 默认配置文件
|  |  +- config-test.js <-- 测试配置文件
|  |
|  +- mongod
|
+- controllers/ <-- Controller
|
+- models/ <-- 存放所有Model
|  |
|  +- Pet.js <-- Pet
|  |
|  +- User.js <-- User
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
+- db.js <-- 如何定义Model
|
+- init-db.js <-- 初始化数据库
|
+- model.js <-- 如何导入Model
|
+- MYSQL.md <-- 数据库说明文档
|
+- package.json <-- 项目描述文件
|
+- README.md
|
+- static-files.json <-- 处理静态文件
|
+- templating.json <-- 给ctx加上render()来使用Nunjucks



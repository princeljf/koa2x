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
mysql -u root -p

查看当前字符集编码
show variables like '%char%';  
修改字符集为utf8
1.关闭Mysql服务
2.新建一个my.cnf配置文件，执行下面命令，如果已存在则会打开该文件
sudo vim /etc/my.cnf
按i键进入编辑模式并加入以下配置，然后按esc键退出编辑模式并按shift+zz保存
[client]
default-character-set=utf8
[mysql]
default-character-set=utf8
[mysqld]
character-set-server=utf8
default-storage-engine=INNODB
collation-server=utf8_general_ci
启动Mysql服务，查看编码，成功

启动：
~$ sudo /usr/local/mysql/support-files/mysql.server start
停止：
~$ sudo /usr/local/mysql/support-files/mysql.server stop
重启：
~$ sudo /usr/local/mysql/support-files/mysql.server restart
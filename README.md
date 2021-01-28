# 即时聊天仿微信php服务端

#### 介绍
{**以下是码云平台说明，您可以替换此简介**
码云是 OSCHINA 推出的基于 Git 的代码托管平台（同时支持 SVN）。专为开发者提供稳定、高效、安全的云端软件开发协作平台
无论是个人、团队、或是企业，都能够用码云实现代码托管、项目管理、协作开发。企业项目请看 [https://gitee.com/enterprises](https://gitee.com/enterprises)}

#### 软件架构
软件架构说明


#### 安装教程

开放28018 8383 1236端口
修改mongodb 端口为28018 （端口任意）

php安装扩展fileinfo redis Swoole4 mongodb   删除全部禁用函数
```
/www/wwwroot/im/http/app/im/common/controller/ActionBegin1.php  #修改GatwayWork服务地址
/www/wwwroot/im/http/config/database.php #修改数据库信息
/www/wwwroot/im/socket/app/im/common/controller/Main.php #修改数据库信息
/www/wwwroot/im/socket/app/im/common/controller/Config.php #修改IP
```
mongodb安装
```
cd /www/server
cd mongodb
cd bin
./mongorestore -h 127.0.0.1:28018 -d im -dir /www/wwwroot/mongodb/im  #(数据存放目录)
```
ffmpeg安装
```
wget http://smiaoshen.oss-cn-hangzhou.aliyuncs.com/im/ffmeg.zip     
mv ffmeg.zip /opt      						                                 
cd /opt								                                           
unzip ffmeg.zip							                                       
```
或者
```
wget http://www.ffmpeg.org/releases/ffmpeg-3.4.tar.gz
mv ffmpeg-3.4.tar.gz /opt
cd /opt
tar -xvf ffmpeg-3.4.tar.gz
```
安装yasm

```
wget http://www.tortall.net/projects/yasm/releases/yasm-1.3.0.tar.gz
tar -zxvf yasm-1.3.0.tar.gz
cd yasm-1.3.0
./configure make && make install
./configure && make && make install
cd ../
cd ffmpeg
./configure && make && make install
```

启动服务
```
cd
cd /www/wwwroot/im/socket
php start.php start
```
或者   
```
nohup php /www/wwwroot/im/socket/start.php start >/dev/null 2>&1 &
```

前端打包 完成！

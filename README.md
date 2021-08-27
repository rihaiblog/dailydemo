# dailydemo
日常学习到的一些有趣的小项目
💪 一起快乐成长为更好的程序员吧！

编程学习经验 + 技术干货 + 编程小项目 + 常见编程问题

编程资源分享 + 人物传记 + 程序员生活 + 编程趣事儿

> 一些有趣的前端小项目，可以按照目录分别使用

1. 视频转字符画 char-video
1. 520表白网站 my520
1. 全屏樱花特效 樱花
1. 全屏泡泡特效 bubble.html
1. WoW特效-生日网站 cake.html
1. Js编码表情字符 aaencode.html
1. 极简计算器 calculator.html
1. 项目demo 里面有之前每天坚持练习的小demo，具体内容忘了💯
1. 班级网站 初学前端时为了完成老师的任务而制作的班级网站，也是自己学习HTML和css后的第一个项目

# 用git上传代码到github

###### 1.配置ssh秘钥命令，一直按yes、最后查看生成秘钥的目录地址

```visual basic
ssh-keygen -t rsa -C "邮箱地址"
```

###### 2.检查是否连接到GitHub

```
ssh -T git@github.com
```

###### 3.上传代码

设置username和email

```
git config --global user.name "自己的注册时的名字"
git config --global user.email "注册时的邮箱"
```

创建一个文件夹，所要上传的代码放入该文件夹

```
git init
```

把该目录下的文件添加到仓库

```javascript
git add .
git commit -m "日志提交说明"
git remote add origin "ssh地址"//跟仓库建立连接
```

上传命令和拉取代码

```
git push -u origin master
```

```
git pull --rebase origin master
```

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

# 用vercel上传简单的静态网站

```
安装vercel npm i -g vercel
进入该文件目录 上传代码(首次上传要验证邮箱) vercel --prod
```



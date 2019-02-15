---
title: '【R教程】Mac - install rJava, xlsx Package'
url: 618.html
id: 618
categories:
  - 工作留存
date: 2018-10-16 17:35:13
tags:
---

xlsx包可以用来读取excel数据，ReporteRs包可以用来直接输出word报告，这两个包都对rJava包有依赖，所以必须先安装rJava.

### step1 - 下载安装

1.  安装jre：[https://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html](https://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html)
2.  安装jdk：[https://www.oracle.com/technetwork/java/javase/downloads/index.html](https://www.oracle.com/technetwork/java/javase/downloads/index.html)
3.  termina 输入 java –version 确认是否安装成功。若不成功重新执行上面2步

### step2 - 设置环境变量

1.  设置环境变量：terminal尝试 open -e .bash\_profile ，若此文件不存在则输入 touch .bash\_profile 新建 文件中输入以下6行并保存 JAVA\_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0\_181.jdk/Contents/Home PATH=$JAVA\_HOME/bin:$PATH:. CLASSPATH=$JAVA\_HOME/lib/tools.jar:$JAVA\_HOME/lib/dt.jar:. export JAVA\_HOME export PATH export CLASSPATH
2.  环境变量生效：terminal 输入 source ~/.bash_profile

### step3 - 与R建立关联

1.  重启terminal
2.  sudo R CMD javareconf
3.  r语言中运行 install.packages('rJava')
4.  terminal 输入 sudo ln -f -s $(/usr/libexec/java_home)/jre/lib/server/libjvm.dylib /usr/local/lib

若以上三步操作后仍不成功 ,那么需要到oracle官网下载最新的JDK。然后重新运行sudo R CMD javareconf再试。
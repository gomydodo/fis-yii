fis-yii
=======


**fis的yii解决方案**

1. 安装
=========
`npm install -g fisyii`

2. yii代码修改（for yii.1.x)
==========
- 将fis/FisController.php文件放入到yii项目的extensions文件夹下
- 修改controller文件

######比如 HomeController.php
```
<?php
use ext\fis\FisController;

class HomeController extends FisController{
	public function actionIndex(){
		$this->render('index');
	}	
}

```

3. 前端文件写好之后，需要release
==========

1. 进入项目目录下的src目录
2. 在src目录下，输入命令 `fisyii release -mop -d ../`
	主要是－d命令， 需要release到app目录下。（当然可以自己定义，那需要修改下fis-conf.js文件）




项目目录结构
==========

- app (项目目录)
- - controllers
- - models
- - extensions
- - - fis
- - - - FisController.php
- - src （fis处理的源码文件夹，包含静态js等，和views视图文件）
- - - fis-conf.js (fis配置文件)
- - - static
- - - - js
- - - - css
- - - - image
- - - views
- - - - home
- - - - - index.php
- - - - layouts
- - - - - main.php
- - public （www目录）
- - - index.php
- framework （yii框架）

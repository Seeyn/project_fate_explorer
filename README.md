# project_fate_explorer
the project of database study
这是前端部分的代码

前端(微信小程序) 
Index(.js ,.wxml,.wxss) 
小程序的主界面:下面有三个界面,依次是首页,英灵检索以及特征检索。 第一个是欢迎界面,第二个是按姓名搜索界面, 第三个是按特征搜索界面。 点击就可以进行跳转
sort1(.js ,.wxml,.wxss) 
姓名搜索界面 在搜索栏里输入名字,来搜索相应的英灵 会向服务器发送请求,并跳转到搜索结果页面
sort2(.js ,.wxml,.wxss) 
特征搜索界面 选择相应的特征,来搜索相应的英灵 会向服务器发送请求,并跳转到搜索结果页面
list(.js ,.wxml,.wxss) 
搜索结果界面,将搜索信息处理并发送给服务器,获得一串匹配的英灵信息。点击load more按钮会出现十个搜索结果, 不断点击会不断加载,直到匹配的所有英灵都显示出来 显示 no more 用户点击英灵头像,程序会将相应英灵的ID传到 英灵介绍界面并跳转过去。
post(.js ,.wxml,.wxss) 
接受传来的ID,并向数据库发送请求,获得英灵的相关数据,用服务器提供的数据填充界面信息,页面底部有一个 explore按钮,点击之后跳转到Explore界面,并传递英灵ID。
explorer(.js ,.wxml,.wxss) 
接受post界面传来的ID,并向数据库发送请求,获得英灵explore界面的相关数据并填充界面,Explore界面由三部分构 成。
1.相关搜索 
复用了特征搜索的功能,用户点击相应的按钮(原型\地域\来源)之后会跳转到搜索结果界面,进行只有一个参数限制的特 征搜索。
2.文章 
点击可以跳转到 article_list 界面 显示与该英灵相关的文章
3.图书 
展示出所有相关的书籍,因为没有版权,所有我们只提供了书名,作者以及ISBN书号方便用户自行查找。
article_list(.js ,.wxml,.wxss) 
用于展示文章基本信息
article(.js ,.wxml,.wxss) 
用于展示完整的文章

后端(https://github.com/tdx1997tdx/Fate_backend)

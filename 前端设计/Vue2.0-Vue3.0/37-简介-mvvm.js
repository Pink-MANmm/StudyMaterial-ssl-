//1.MVVM
//MVVM是vue实现数据驱动视图和双向数据绑定的核心原理。MVVM指的是Model、View和ViewModel，它把每个HTML页面都拆分成了这三个部分，

// DOM                Vue         Plain JavaScript Objects
//  ^                  ^                   ^
//  |                  |                   |
//      ---->   (DOM Listeners)   ---->
//view             ViewModel             Model
//      <----   (Data Bindings)   <----

//在MVVM概念中：
//Model表示当前页面渲染时所依赖的数据源
//View表示当前页面所渲染的DOM结构
//ViewModel表示vue的实例，它是MVVM的核心

//2.MVVM的工作原理
//ViewModel作为MVVM的核心，是它把当前页面的数据源（Model）和页面结构（View）连接在了一起

//      <--自动更新--                  <--监听数据源变化--
//View                    ViewModel                         Model
//      --监听DOM变化-->               --自动同步-->

//当数据源发生变化时，会被ViewModel监听到，VM会根据最新的数据源自动更新页面的结构
//当表单元素的值发生变化时，也会被VM监听到，VM会把变化过后更新的值自动同步到Model数据源中

//3.vue的版本
//当前vue共有3个大版本，其中：
//2.x版本的vue是目前企业级项目开发中的主流版本
//3.x版本的vue于2020-09-19发布，生态还不完善，尚未在企业级项目开发中普及和推广
//1.x版本的vue几乎被淘汰，不再建议学习与使用

//总结：
//3.x版本的vue是未来企业级项目开发的趋势；
//2.x版本的vue在未来（1~2年内）会被逐渐淘汰;
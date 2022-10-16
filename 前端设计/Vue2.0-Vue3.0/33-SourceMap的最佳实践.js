//1.只定位行数不暴露源码
//在生产环境下，如果只想定位报错的具体行为，且不想暴露源码。此时可以将devtool的值设置为
//nosources-source-map

//2.定位行数且暴露源码
//在生产环境下，如果想在定位报错行数的同时，展示具体报错的源码。此时可以将devtool的值设置为
//source-map

//3.Source Map的最佳实践
//①开发环境下：
//*建议把devtool的值设置为eval-source-map
//*好处：可以精准定位到具体的错误行
//②生产环境下：
//*建议关闭Source Map或将devtool的值设置为nosources-source-map
//*好处：防止源码泄露，提高网站的安全性
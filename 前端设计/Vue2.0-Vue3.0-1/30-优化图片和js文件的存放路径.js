//1.把图片文件统一生成到image目录中
//修改webpack.config.js中的url-loader配置项，新增outputPath选项即可指定图片文件的输出路径：
//{
//    test:/\.jpg|png|gif$/,
//    use:{
//        loader:'url-loader',
//        options:{
//            limit:22229,
//            //明确指定把打包生成的图片文件，存储到dist目录下的image文件集中
//            outputPath:'image',
//        }
//    }
//}

//2.把js文件统一生成都js目录中
//修改output的filename属性为js/bundle.js
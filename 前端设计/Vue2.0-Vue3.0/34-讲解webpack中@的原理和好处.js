//1.实际开发中需要自己配置webpack吗？
//答案：不需要！
//*实际开发中会使用命令行工具（俗称CLI）一键生成带有webpack的项目
//*开箱即用，所有webpack配置项都是现成的！
//*我们只需要知道webpack中的基本概念即可！

//import msg from '../../msg.js'
//建议大家使用@表示src源代码目录，从外往里查找；不要使用../从里往外查找
//改为
//import msg from '@/msg.js'
//在webpack.config.js中配置
//resolve: {
//    alias: {
//        //告诉webpack，程序员写的代码中，@符号表示src这一层目录
//        '@': path.join(__dirname, './src/')
//    }
//}
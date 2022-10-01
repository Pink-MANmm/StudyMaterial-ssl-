//由于module.exports单词写起来比较复杂，为了简化向外共享成员的代码，Node提供了exports对象。默认情况下，exports和module.exports指向同一个对象，最终共享的结果，还是以module.exports指向的对象为准
console.log(exports);
console.log(module.exports);

console.log(exports === module.exports);

//exports和module.exports的使用误区
//时刻谨记，require()模块时，得到的永远是module.exports指向的对象
//------------------------------------------------
//exports.username='zs'
//module.exports={
//  gender:'男',
//  age:22
//}
//结果:{gender:'男',age:22}
//------------------------------------------------
//module.exports.username='zs'
//exports={
//  gender:'男',
//  age:22
//}
//结果:{username:'zs'}
//------------------------------------------------
//exports.username='zs'
//module.exports.gender='男'
//结果:{username:'zs',gender:'男'}
//------------------------------------------------
//exports={
//  username:'zs',
//  gender:'男'
//}
//module.exports=exports
//module.exports.age='22'
//结果:{username:'zs',gender:'男',age:'22'}
//------------------------------------------------
//注意:为了防止混乱，建议大家不要在同一个模块中同时使用exports和module.exports
//function Stu(){
//	this.name='ls';
//	this.age=12;
//	this.getInfo=function(){
//		return '姓名：'+this.name+'\n年龄：'+this.age;
//	}
//}
//function Teacher(){
//	this.name='lsmife';
//	this.age=28;
//	this.getTeacher=function(){
//		return '姓名：'+this.name+'\n年龄：'+this.age;
//	}
//}
//var A=new Stu()
//var T=new Teacher();
//// console.log(A)
//var getT=T.getTeacher;
////Teacher.call(A);
// console.log(getT.call());
// var data=require("./1.js")
//function han(ar1,ar2){
//	console.log('this value:'+this);
//	for(var i=0;i<arguments.length;i++){
//		console.log('第'+i+'个参数是：'+arguments[i])
//	}
//	console.log('\n');
//	
//}
//han(2,3)
//han.apply(2,[3])

// function han(a1,a2){
//   console.log('this 的值：'+this);
//   for(i in arguments){
//       console.log('第'+i+'个参数是：'+arguments[i]);
//   }
// }
// han(1,2);
// han.call();
// han.call(1,2);
// han.apply(1,[2]);
//function Stu(){
//	this.name="ls";
//	this.age="12";
//	this.getInfo=function(){
//		return '姓名：'+this.name+'\n年龄：'+this.age;
//	}
//}

//function Teacher(){
//	this.name="lsmife";
//	this.age="28";
//	this.getTearcher=function(){
//		return '姓名：'+this.name+'\n年龄：'+this.age;
//	}
//}
//var studentA=new Stu();
////Teacher.apply(studentA);
////console.log(studentA.getTearcher());
////console.log(studentA.getInfo());
//var T=new Teacher();
//var getTo=T.getTearcher();
//console.log(getTo);
//var getTf=T.getTearcher;
//console.log(getTf());
//console.log(getTf.call(T));
//var jsonstr='{"name":"ls","age":"28","tel":"18888888888","favor":["swimming","eng","lol","coding"]}'
//console.log(jsonstr)
//var class2type = {},     //用于记录[object class]样式  
//objs = "Boolean Number String Function Array Date RegExp Null Undefined".split(" ");  
//for (var i = 0, l = objs.length; i < l; i++) {  
//   class2type[ "[object " + objs[i] + "]" ] = objs[i].toLowerCase();  
//}  
//
//function type(obj) {  
//   return class2type[ Object.prototype.toString.call(obj) ] || "object";  
//}  
//var obj_json=JSON.parse(jsonstr);
//var str_json=JSON.stringify(obj_json);
//console.log(obj_json);

//var arr=[{"name":"ls","age":12},{"name":"jason","age":22},12];
////console.log( typeof arr=='object')
//console.log(arr.constructor);
//console.log(arr.constructor.name);
//typeof的一个不好的地方就是它会把Array还有用户自定义函数都返回为object
// console.log((typeof arr=="object") && (arr.constructor.name=='Array'))
//console.log( arr instanceof Array)
//console.log(arr.constructor.name)
//console.log(arr.constructor.name=='Array')
//function Box(){
//	this.name="box";
//	this.getinfo=function(){
//		console.log(this.name)
//	}
//}
//Box.prototype.age=12;
//var box=new Box();
//var big={name:"ls"};
//console.log(typeof box.__proto__)
//function box(){
//	var user="lsmife";
//	return function(){
//		return user;
//	}
//}
//console.log(box()())
//var b=box();
//console.log(b());
//function box(x){
//	var user="lsmife";
//	return function(y){
//		console.log(user+"---"+x+"---"+y);
//	}
//}
//var b=box(2);
//b(4);
//var a={
//	name:"lsmife",
//	box:function(n1,n2){
//		return n1+n2;
//	}
//}
//function s(n1,n2){
//	console.log(a.box.call(this,n1,n2)) 
//}
//s(1,2)
//function box(c){
//	(function inner(){
//		for(var i=0;i<c;i++){}
//		return i
//	})()
//	console.log(i);
//}
////box(4);
//console.log(true==1)
var a="alert A box a tim"
var reg=/a/i;
console.log(a.replace(reg,'B'));

//console.log(Box.hasOwnProperty('age'))
//console.log(Box.hasOwnProperty('name'))
//var str="abcd"
//console.log(str.split("").reverse().join(""));
//var s=[];
//for(var i=str.length-1;i>=0;i--){
//	s.push(str[i]);
//}
//console.log(s.join(""));

//console.log(Object.prototype.toString.call(arr));
//改造后的函数
//var class2type = {},     //用于记录[object class]样式  
//objs = "Boolean Number String Function Array Date RegExp Null Undefined".split(" ");  
//for (var i = 0, l = objs.length; i < l; i++) {  
//   class2type[ "[object " + objs[i] + "]" ] = objs[i].toLowerCase();  
//}  
//
//function type(obj) {  
//   return class2type[ Object.prototype.toString.call(obj) ] || "object";  
//} 

//console.log(type(arr));
//利用typeof和constructor进行严格判断
//if((typeof o=="object") && (o.constructor==Number)){
//// …
//}
//constructor只能对已有变量进行判断，而typeof则可对未声明变量进行判断（返回undefined）

//console.log(arr_str);
//console.log(arr_str.constructor.name);

//console.log(arr_obj);
//console.log(arr_obj.constructor.name);
//console.log("对象类型是:"+obj_json.constructor.name);
//     {
//         "classname":"财务部",
//         "classid":60,
//         "depart_type":0,
//         "parentid":1,
//         "student_nums":"0",
//         "teacher_nums":"3"
//     },
//     {
//         "classname":"教学部",
//         "classid":10,
//         "depart_type":0,
//         "parentid":1,
//         "student_nums":"0",
//         "teacher_nums":"2"
//     }
// ]'

// console.log(data);
// console.log('\n'+typeof data);
// console.log('\n'+eval(data));
// console.log('\neval:'+typeof eval(data));
// var data-str=eval(data);
// console.log(data-str);




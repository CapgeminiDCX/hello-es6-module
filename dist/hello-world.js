(function(g,f){typeof exports==='object'&&typeof module!=='undefined'?f(exports):typeof define==='function'&&define.amd?define(['exports'],f):(g=typeof globalThis!=='undefined'?globalThis:g||self,f(g.hw={}));}(this,(function(exports){'use strict';var index = 42;function hello() {
  console.log("By the way, the answer is " + index);
  return 'hello';
}function world() {
  return 'world';
}exports.hello=hello;exports.world=world;Object.defineProperty(exports,'__esModule',{value:true});})));
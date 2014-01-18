var yobject = {
  clone : function (name) {
    var F = function() {};
    F.prototype = this;
    var instance = new F();
    if(name) {instance.type = name;}
    return instance;
  },
  type : "yobject",
  slotNames : function(){
    var keys = [];
    for(var key in this){
      if (this.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  }
};

console.log(yobject.type);
console.log(yobject.slotNames());
console.log("------------------------------------------------------");

//-------------------------------------
var User = yobject.clone("User");

User.greeting = "Hello";

User.init = function(options){
    this.name = options.name;
};

User.sayHello = function(){
    console.log(this.greeting + ", " + "my name is " + this.name);
}

console.log(User.type);
console.log(User.slotNames());
console.log("------------------------------------------------------");

//-------------------------------------
var u1 = User.clone();
u1.init({name: 'Bob'});
u1.sayHello();

console.log(u1.type);
console.log(u1.slotNames());
console.log("------------------------------------------------------");

//-------------------------------------
var EnglishUser = User.clone("EnglishUser");

EnglishUser.greeting = "How do you do";

EnglishUser._userInit = EnglishUser.init;
EnglishUser.init = function(options){
    this._userInit(options);
    this.name = options.title + " " + this.name;
};

console.log(EnglishUser.type);
console.log(EnglishUser.slotNames());
console.log("------------------------------------------------------");

//-------------------------------------
var u2 = EnglishUser.clone();
u2.init({name: 'Geoff', title: 'Sir'});
u2.sayHello();
console.log(u2.type);
console.log(u2.slotNames());

//Bai 1: Giải thích giá trị từ khóa ‘this’ trong JavaScript! Minh họa lời giải thích của bạn bằng một ví dụ!
//Trả lời từ khóa "this" thường được sử dụng để tham chiếu đến đối tượng hiện tại trong ngữ cảnh thực thi hiện tại
function User(name) {
  this.name = name;
  this.FullName = function () {
    return this.name;
  };
}
const myUser = new User("phuoc");
console.log(myUser.FullName());
//Bai 2: Chuyển đổi code Javascript phía dưới sang ES6, sử dụng classs thay thế cho object.prototype
// Shape.prototype.move = function (x,y) {
//     this.x = x;
//     this.y = y;
// };
class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(x, y) {
    this.x = x;
    this.y = y;
  }
}

const myShape = new Shape(0, 0);
myShape.move(2, 3);
console.log(myShape);
// Bai 4: Dựa vào code javascript phía dưới, sử dụng getter và setter để hoàn thành code
// var person = {
//     firstname: "Albert",
//     lastname: "Einstein",
//     ___: function(_lastname) { // set gia tri
//         this.lastname= _lastname
//     },
//     ___: function(_firstsname) { // set gia tri
//         this.firstname= _firstsname
//     },
//     //...
// };
// person.setLastName('Newton');
// person.setFirstName('Issac');
// console.log(person.getFullName());
let person = {
  firstname: "Albert",
  lastname: "Einstein",
  setLastName: function (_lastname) {
    this.lastname = _lastname;
  },
  setFirstName: function (_firstname) {
    this.firstname = _firstname;
  },
  FullName: function () {
    return this.firstname + " " + this.lastname;
  },
};

person.setLastName('Newton');
person.setFirstName('Isaac');
console.log(person.FullName());

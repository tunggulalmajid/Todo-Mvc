const MTodo = require('../model/MTodo')
const VTodo = require('../view/VTodo')

class Ctodo {
  static show() {
    let todos = MTodo.show()
    VTodo.show(todos);
  }
  static add(todo) {
    console.log("Controller add");
  }
  static delete(todo) {
    console.log("controller delete");
  }
  static update(todo) {
    console.log("controller update");
  }
  static errorMessage(message){
    VTodo.errorMessage(message);
  }
}


module.exports = Ctodo;

function TodoController(TodoService) {
  const ctrl = this;
  this.newTodo = "";
  this.list = [];

  function getTodos(){
    TodoService
      .retrieve()
      .then(
        (response) => ctrl.list = response,
        (error   ) => console.log(error)
      )
  };

  this.addTodo = function(){
    if(!ctrl.newTodo) {
      return;
    }
    TodoService
      .create({
        title: this.newTodo,
        completed: false
      })
      .then(
        (response) => {
          ctrl.list.unshift(response);
          ctrl.newTodo = "";
        }
      )
  };

  this.removeTodo = function(item,index) {
    TodoService
      .remove(item)
      .then(
        (response) => ctrl.list.splice(index , 1)
      )
  };

  this.updateTodo = function(item , index) {
    if(!item.title) {
      ctrl.removeTodo(item, index);
      return;
    }
    TodoService
      .update(item)
  }

  this.getRemaining = () => {
    return this.list.filter( (item)=> !item.completed )
  }

  this.toggleState = (item) => {
    TodoService
      .update(item)
      .then(
        (response) => {},
        (err) => item.completed = !item.completed
      )
  }
  getTodos();
}

angular
  .module('app')
  .controller('TodoController' , TodoController);
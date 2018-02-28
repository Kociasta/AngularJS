function TodoService($http) {
  var API = "https://jsonplaceholder.typicode.com/todos/";

  function create(todo) {
    return $http.post(API, todo).then(
      (response) => response.data
    )
  };
  function retrieve() {
    return $http.get(API).then(
      (response) => response.data.splice(0,10),
      (error) => console.log(error)
    )
  };
  function update(todo) {
    return $http.put(API + todo.id).then(
      (response) => response.data
    )
  };
  function remove(todo) {
    return $http.delete(API + todo.id).then(
      (response) => response.data
    )
  };

  return {
    create: create,
    retrieve: retrieve,
    update: update,
    remove: remove
  }
}

angular
  .module('app')
  .factory('TodoService', TodoService)
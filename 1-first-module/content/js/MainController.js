function MainController() {
  this.name = "Kitty";
}


angular
  .module('app')
  .controller('MainController' , MainController);
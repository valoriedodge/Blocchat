(function(){
  function Messages($firebaseArray, $scope){
    var ref = firebase.database().ref().child("messages");
    var messages = {};
    messages = $firebaseArray(ref);
  }

  angular
    .module('blocChat')
    .factory('Messages', ['$firebaseArray', '$scope', Messages])
})();

(function(){
  function UserModalCtrl($scope, $cookies, $uibModalInstance){
    $scope.createUser = function () {
      if(!$scope.username || $scope.username == ""){
        alert("No username given");
      } else {
        var username = $scope.username;
        $cookies.put('blocChatCurrentUser', username);
        $uibModalInstance.close();
      }
    };
  }

  angular
    .module('blocChat')
    .controller('UserModalCtrl', ['$scope', '$cookies', '$uibModalInstance', UserModalCtrl])
})();

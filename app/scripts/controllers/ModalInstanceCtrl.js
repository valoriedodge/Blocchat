(function(){
  function ModalInstanceCtrl($scope, $uibModalInstance, Rooms){
    $scope.addRoom = function () {
      if(!$scope.newRoomText){
        alert("No Room Name Given");
      } else {
        Rooms.addRoom($scope.newRoomText);
        $scope.newRoomText = "";
        $uibModalInstance.close();
      }
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss();
    };
  }

  angular
    .module('blocChat')
    .controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', 'Rooms', ModalInstanceCtrl])
})();

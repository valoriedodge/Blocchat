(function() {
    function LandingCtrl($scope, Rooms, Messages, $uibModal) {
        this.title = "Let's Chat";
        this.rooms = Rooms.all;
        $scope.currentRoom = Rooms.all;
        this.messages = Messages.all;
        this.openModalInstance = function () {
          $uibModal.open({
            templateUrl: 'templates/myModalContent.html',
            controller: 'ModalInstanceCtrl'
          });
        };
    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', ['$scope', "Rooms", 'Messages', '$uibModal', LandingCtrl]);
})();

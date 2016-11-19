(function() {
    function LandingCtrl($scope, Rooms, Messages, $uibModal) {
        this.title = "Let's Chat";
        this.rooms = Rooms.all;
        this.rooms.$loaded(function(){
          $scope.currentRoom = this.rooms[0];
        })
        $scope.currentRoom = this.rooms;
        this.messages = Messages.all;
        this.messages.time = new Date();
        this.addMessage = function(){
          if(!this.messages.newMessageText){
            alert("No Message Written");
          } else {
            Messages.addMessage("$scope.currentRoom.$id");
            this.messages.newMessageText = "";
          }
        }
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

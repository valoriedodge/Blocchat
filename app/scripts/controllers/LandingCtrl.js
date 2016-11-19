(function() {
    function LandingCtrl(Rooms, Messages, $uibModal) {
        this.title = "Let's Chat";
        var landing = this;
        landing.rooms = Rooms.all;
        landing.messages = Messages.all;
        landing.rooms.$loaded().then(function(){
          landing.currentRoom = landing.rooms[0];
          landing.currentMessages = Messages.currentRoomMessages(landing.currentRoom);
        })
        landing.updateMessages = function(room){
          landing.currentMessages = Messages.currentRoomMessages(room);
        }
        this.messages.time = new Date();
        this.addMessage = function(currentRoomId){
          if(!this.messages.newMessageText){
            alert("No Message Written");
          } else {
            Messages.addMessage(currentRoomId);
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
        .controller('LandingCtrl', ["Rooms", 'Messages', '$uibModal', LandingCtrl]);
})();

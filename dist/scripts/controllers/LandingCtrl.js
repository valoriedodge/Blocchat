(function() {
    function LandingCtrl(Rooms, Messages, $uibModal) {
        this.title = "Let's Chat";
        var landing = this;
        landing.rooms = Rooms.all;
        landing.rooms.$loaded().then(function(){
          landing.currentRoom = landing.rooms[0];
          landing.currentMessages = Messages.currentRoomMessages(landing.currentRoom);
        })

        landing.messages = Messages.all;
        // landing.messages.$loaded().then(function(){
        //   landing.currentMessages = landing.rooms[0];
        //   // landing.currentMessages = Messages.currentRoomMessages()
        // })
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

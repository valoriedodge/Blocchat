(function() {
    function LandingCtrl(Rooms, Messages, $uibModal) {
        this.title = "BlocChat";
        // this.blocUser = BlocChatCookies.username;
        // var currentUser = $cookies.get('blocChatCurrentUser');
        // if (currentUser) {
        //   this.username = currentUser;
        // }
        var landing = this;

        // $scope.username = currentUser;
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
        this.formatDate = function(messagesDate){
          var formatted = new Date(messagesDate);
          return formatted;
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

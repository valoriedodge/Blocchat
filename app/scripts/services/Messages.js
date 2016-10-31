(function(){
  function Messages($firebaseArray){
    var ref = firebase.database().ref().child("messages");
    var messages = {};
    messages = $firebaseArray(ref);

    messages.addItem = function(currentRoomId){
      var today = "Yes";
      messages.$add({
        username: messages.username,
        content: messages.newMessageText,
        sentAt: messages.time.toString(),
        roomId: currentRoomId
      });
      messages.newMessageText = null;
      messages.username = null;
    };

    return {
      getByRoomId: function (roomId) {
        messages.orderByChild('roomId').equalTo(roomId);
      },
      all: messages
    };
  }

  angular
    .module('blocChat')
    .factory('Messages', ['$firebaseArray', Messages]);
})();

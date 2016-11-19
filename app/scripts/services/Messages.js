(function(){
  function Messages($firebaseArray){
    var ref = firebase.database().ref().child("messages");
    var messages = {};
    var currentRoomref = firebase.database().ref("messages");
    var currentMessages = {};
    messages = $firebaseArray(ref);
    return {
      all: messages,
      addMessage: function(currentRoomId){
        messages.$add({
          // username: messages.username,
          content: messages.newMessageText,
          sentAt: messages.time.toString(),
          roomId: currentRoomId
        });
        messages.newMessageText = null;
        messages.username = null;
      },
      currentRoomMessages: function (roomId) {
        return $firebaseArray(currentRoomref.orderByChild('roomId').equalTo(roomId.$id));
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Messages', ['$firebaseArray', Messages]);
})();

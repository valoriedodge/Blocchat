(function(){
  function Messages($firebaseArray){
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    var currentRoomref = firebase.database().ref("messages").orderByChild('roomId');
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
        return $firebaseArray(currentRoomref.equalTo(roomId.$id));
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Messages', ['$firebaseArray', Messages]);
})();

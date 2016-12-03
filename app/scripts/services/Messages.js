(function(){
  function Messages($firebaseArray, $cookies){
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    var currentRoomref = firebase.database().ref("messages").orderByChild('roomId');
    return {
      all: messages,
      addMessage: function(currentRoomId){
        messages.$add({
          username: $cookies.get('blocChatCurrentUser'),
          content: messages.newMessageText,
          sentAt: messages.time.toString(),
          roomId: currentRoomId
        });
        messages.newMessageText = null;
      },
      currentRoomMessages: function (roomId) {
        return $firebaseArray(currentRoomref.equalTo(roomId.$id));
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Messages', ['$firebaseArray', '$cookies', Messages]);
})();

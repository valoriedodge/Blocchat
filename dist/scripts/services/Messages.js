(function(){
  function Messages($firebaseArray){
    var ref = firebase.database().ref().child("messages");
    var messages = {};
    messages = $firebaseArray(ref);
    return {
      all: messages,
      addMessage: function(currentRoomId){
        messages.$add({
          // username: messages.username,
          content: messages.newMessageText,
          sentAt: messages.time.toString(),
          roomID: currentRoomId
        });
        messages.newMessageText = null;
        messages.username = null;
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Messages', ['$firebaseArray', Messages]);
})();

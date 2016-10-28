(function(){
  function Rooms($firebaseArray){
    var ref = firebase.database().ref().child("rooms");
    var rooms = {};
    rooms = $firebaseArray(ref);

    rooms.addItem = function(){

      rooms.$add({
        name: rooms.newRoomText
      });
      rooms.newRoomText = null;
    };

    return {
      all: rooms
    };
  }

  angular
    .module('blocChat')
    .factory('Rooms', ['$firebaseArray', Rooms]);
})();

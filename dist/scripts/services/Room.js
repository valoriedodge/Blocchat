(function(){
  function Rooms($firebaseArray){
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    var query = firebase.database().ref().child("rooms").limitToLast(1);
    var first = $firebaseArray(query);

    rooms.addItem = function(){
      rooms.$add({
        name: rooms.newRoomText
      });
      rooms.newRoomText = null;
    };
    return {
      all: rooms,
      first: first
    };
  }

  angular
    .module('blocChat')
    .factory('Rooms', ['$firebaseArray', Rooms]);
})();

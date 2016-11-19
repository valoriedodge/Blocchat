(function(){
  function Rooms($firebaseArray){
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    return {
      all: rooms,
      addRoom: function(newRoomText){
        rooms.$add({
          name: newRoomText
        });
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Rooms', ['$firebaseArray', Rooms]);
})();

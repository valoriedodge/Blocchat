(function(){
  function Rooms($firebaseArray){
    var ref = firebase.database().ref().child("rooms");
    var rooms = {};
    rooms = $firebaseArray(ref);

    // rooms.addRoom = function(newRoomText){
    //
    //   rooms.$add({
    //     name: newRoomText
    //   });
    //   // $scope.newRoomText = null;
    // };

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

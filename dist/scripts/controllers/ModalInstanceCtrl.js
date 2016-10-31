(function(){
  function ModalInstanceCtrl($uibModalInstance, Rooms){
    this.rooms = Rooms.all;
    // var $ctrl = this;
    // $ctrl.rooms = Rooms.all;
    // $ctrl.selected = {
    //   room: $ctrl.rooms[0]
    // };

    this.ok = function () {
      $uibModalInstance.close('$ctrl.selected.room.name');
    };

    this.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }

  angular
    .module('blocChat')
    .controller('ModalInstanceCtrl', ['$uibModalInstance', 'Rooms', ModalInstanceCtrl])
})();

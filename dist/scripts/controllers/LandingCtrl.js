(function() {
    function LandingCtrl(Rooms, $uibModal) {
        this.title = "Let's Chat";
        this.rooms = Rooms.all
        this.openModalInstance = function () {
          $uibModal.open({
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl'
          });
        };
    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', ["Rooms", '$uibModal', LandingCtrl]);
})();

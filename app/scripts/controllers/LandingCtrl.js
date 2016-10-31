(function() {
    function LandingCtrl(Rooms, Messages, $uibModal, $log, $document) {
        this.title = "Let's Chat";
        var landing = this;
        landing.rooms = Rooms.all;
        this.messages = Messages.all;
        this.currentMessages = Messages.getByRoomId;
        landing.rooms.$loaded().then(function(){
          landing.currentRoom = landing.rooms[0];
          this.messages.Id = "landing.currentRoom.$id";
        })
        this.messages.time = new Date();
        // this.animationsEnabled = true;
        this.open = function (size) {
          var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            controllerAs: '$ctrl',
            size: size
            // resolve: {
            //   items: function () {
            //     return this.rooms;
            //   }
            // }
          });

          modalInstance.result.then(function (selectedItem) {
            $ctrl.choice = selectedItem;
          }, function () {
            $log.info('Modal dismissed at: ' + new Date());
          });
        };
    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', ["Rooms", "Messages", '$uibModal', '$log', '$document', LandingCtrl]);
})();

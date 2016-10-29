(function() {
    function LandingCtrl(Rooms, $uibModal, $log, $document) {
        this.title = "Let's Chat";
        this.rooms = Rooms.all
        var $ctrl = this;
        $ctrl.animationsEnabled = true;

        this.open = function (size) {
          // var parentElem = parentSelector ?
          //   angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
          var modalInstance = $uibModal.open({
            animation: $ctrl.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            controllerAs: '$ctrl',
            size: size
            // appendTo: parentElem,
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
        .controller('LandingCtrl', ["Rooms", '$uibModal', '$log', '$document', LandingCtrl]);
})();

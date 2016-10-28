(function() {
    function LandingCtrl(Rooms) {
        this.title = "Let's Chat";
        this.rooms = Rooms.all
    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', ["Rooms", LandingCtrl]);
})();

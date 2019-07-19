var app = angular.module('chatApp', ['firebase']);

app.controller('ChatController', function($scope, $firebaseArray) {
    var ref = firebase.database().ref().child('messages');
    $scope.messages = $firebaseArray(ref);

    $scope.send = function() {
        $scope.messages.$add({
            message: $scope.messageText,
            date: Date.now()
        })
    }

})
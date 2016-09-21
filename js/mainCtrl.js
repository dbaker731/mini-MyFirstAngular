angular.module( 'friendsList' ).controller( 'mainCtrl', function( $scope){

  $scope.friends = friends;

  $scope.addFriend = function ( newFriend ){
    $scope.friends.push( newFriend );
  };


});

var friends = ['Luke', 'Olivia', 'Eric', 'Garret', 'Laura'];

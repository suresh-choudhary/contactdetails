var app = angular.module('angularTable', []);

app.controller('listdata', function($scope, $http) {

  $scope.users = []; //declare an empty array
  $http.get("people.json").success(function(response) {

    //console.log(response);
    $scope.users = response.People; //ajax request to fetch data into $scope.data
    $scope.selectedUser=$scope.users[0];
    $scope.stars=[0,-1,-2,-3,-4];
    $scope.userData=[];
$scope.searchkey="";
$scope.all=$scope.users;

$scope.$watch('searchkey',function(){
   console.log($scope.searchkey)
});


$scope.clear=function(){
console.log("clear serach");
 $scope.searchkey="";
}



$scope.search=function(key){

console.log(key);
alert('key input inter='+key);
console.log(key);
	if(key!=""){
console.log(key);
		for(var j=0;j<$score.users.length;j++){
			if($score.users[j].name.indexOf(key)!=-1){
				$score.searchresult.push($score.users[j]);
			}
		}
		$scope.users=$scope.searchresult;
	}else{
		$score.users=$score.all;
	}
console.log($scope.all);
}
console.log($scope.all);
    $scope.showUser = function(user) {
      $scope.selectedUser=user;
      $scope.stars=[0,-1,-2,-3,-4];
      $scope.userData=[];
      for(var i=0;i<$scope.selectedUser.rating;i++){
        $scope.stars[i]=i+1;
      }
      var likeLen=$scope.selectedUser.Likes.length;
      var dislikeLen=$scope.selectedUser.Dislikes.length;
      var arrlenght=(likeLen<dislikeLen)?dislikeLen:likeLen;
      //console.log(likeLen +' '+dislikeLen+' '+arrlenght);
      for(i=0;i<arrlenght;i++){
        var value={};
        value['like']=($scope.selectedUser['Likes'][i]!=undefined)?$scope.selectedUser['Likes'][i]:'';
        value['dislike']=($scope.selectedUser['Dislikes'][i]!=undefined)?$scope.selectedUser['Dislikes'][i]:'';
        $scope.userData.push(value);
       // console.log(value);
      }
     // console.log($scope.stars);
     // console.log($scope.userData);
  };
  $scope.showUser($scope.selectedUser);
  });

});

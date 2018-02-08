var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope){
	    $scope.list = [{text:'خرید خانه', tick:false}];
	$scope.add=function(){
		$scope.list.push({text:$scope.itemname,tick:false});
	};
    $scope.delete = function() {
        var oldList = $scope.list;
        $scope.list = [];
        angular.forEach(oldList, function(x) {
            if (!x.tick) 
            	$scope.list.push(x);
        });
    };
});
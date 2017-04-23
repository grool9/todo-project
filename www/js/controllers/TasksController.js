angular.module('starter.controllers')
.controller('TasksController', function ($rootScope, $scope, Tasks) {
	$scope.tasks = Tasks.all();
	
	$scope.complete = function(task){
  		var del = task;
  		Tasks.delete(task);

  		del.st = "text-decoration:line-through" ;
  		Tasks.save(del);
  		$scope.tasks = Tasks.all();
  	};

});

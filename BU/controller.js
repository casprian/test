var registerationApp=angular.module('registerationApp',[]);

registerationApp.controller('registerationController',['$scope','$http',function($scope,$http)
{
		$http.get('/getTeams').success(function(data) {
		      $scope.teamList=data;
		});
		
		$http.get('players.json').success(function(data) {
		      $scope.playerList=data;
		});
		
		$scope.prices=[500,1000,1500,2000,2500,3000,3500,4000,4500,5000]

		$scope.selectTeam = function (team,playerIndex,player) 
		{
			setTimeout(function () {
			        $scope.$apply(function () {
			        	$(".teams").removeClass('highlight');
			        	$("#"+team.name).addClass('highlight');
			        	$scope.playerList[playerIndex].purchased_by=team.name;
			        });
			    }, 500);
			
				var selectedPlayersTeam="#select-team-for-"+player.id;
				$scope.selectedTeamIndex=$(selectedPlayersTeam).val();
	    };

		$scope.purchasePlayer = function (data,playerIndex,player) 
		{
			setTimeout(function () {
			        $scope.$apply(function () {
			            $scope.playerList[playerIndex].sold_for=data;
			            $scope.playerList[playerIndex].status="sold";
			            var index=$scope.selectedTeamIndex;
			            //TO GET INDEX OF TEAM 
			        	$scope.teamList[index].players.push(player.name);
			        });
			    }, 500);
	    };
    	
}]);


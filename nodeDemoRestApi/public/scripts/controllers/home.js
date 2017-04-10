app.controller('HomeController',['$scope','$http',function($scope,$http){
		$http.get('http://localhost:7000/users')
				.then(function(response){
					console.log("success");
					$scope.users=response.data.message;
				});
				// $scope.addCustomer=function(){
				// 	console.log("baah");
				// 	var data={
				// 		first_name:$scope.firstName,
				// 		last_name:$scope.lastName,
				// 		phone:$scope.phone,
				// 		email:$scope.email,
				// 		address:$scope.address,
				// 		city:$scope.city,
				// 		state:$scope.state
				// 	};
				// 	var config={
				// 		headers:{
				// 			'Content-Type': 'application/json'
				// 		}
				// 	}
				// 	$http.post('http://slimapp:8080/api/customer/add',data,config)
				// 		.success(function(data,status,headers,config){
				// 			$scope.PostDataResponse= data;
				// 		})
				// 		.error(function(data,status,headers,config){
				// 			$scope.ResponseDetails="Data:"+data+
				// 								"<hr />status: "+status+
				// 								"<hr />headers: "+header+
				// 								"<hr />config: "+config;
				// 		});
				// };
				// $scope.updateCustomer=function(){
				// 	console.log("baah baah");
				// 	id=$scope.id;
				// 	console.log(id);
				// 	var data={
				// 		first_name:$scope.firstName,
				// 		last_name:$scope.lastName,
				// 		phone:$scope.phone,
				// 		email:$scope.email,
				// 		address:$scope.address,
				// 		city:$scope.city,
				// 		state:$scope.state
				// 	};
				// 	var config={
				// 		headers:{
				// 			'Content-Type': 'application/json'
				// 		}
				// 	}
				// 	$http.put('http://slimapp:8080/api/customer/update/'+id,data,config)
				// 		.success(function(data,status,headers,config){
				// 			$scope.PostDataResponse= data;
				// 		})
				// 		.error(function(data,status,headers,config){
				// 			$scope.ResponseDetails="Data:"+data+
				// 								"<hr />status: "+status+
				// 								"<hr />headers: "+header+
				// 								"<hr />config: "+config;
				// 		});
				// };
				// $scope.delete=function(){
				// 	id=$scope.id;
				// 	$http.delete('http://slimapp:8080/api/customer/delete/'+id)
				// 		.success(function(response){
				// 			console.log("naah");
				// 		})
				// 		.error(function(error){
				// 			console.log("error..naah naah");
				// 		})
				// };
}]);
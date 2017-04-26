angular.module('chatroom').controller('mainCtrl', function($scope, messageService){

  $scope.time = function(str){
    var arr = str.split('');
    var date = [];
    for (var i = 5; i < 10; i++){
      date.push(arr[i]);
    }
    date.push('-');
    for(var i = 0; i < 4; i ++){
      date.push(arr[i]);
    }
    date.push(', ');
    for (var i = 11; i < 16; i ++){
      date.push(arr[i]);
    }


    return date.join('');
  }


  //The getMessages function will call the getMessages method on the messageService object.
  //You'll then save the result of that request to your controller's $scope as messages ($scope.messages)
  $scope.getMessages = function(){
    var promise = messageService.getMessages();
    promise.then(function(response){
      $scope.messages = response.data;
    });
  }
  

  //The postMessage function will take whatever the user typed in (hint: look at the html and see 
  //what ng-model correlates to on the input box),
  //pass that text to the postMessage method on the messageService object which will
  //then post it to the backend.
  $scope.postMessage = function(message){

    messageService.postMessage(message).then(function(reponse){
      $scope.messages = reponse.data;      
    });

    $scope.message = '';

  }


  //uncomment this code when your getMessages function is finished
  //This goes and gets new data every second, which mimicking a chat room experience.
   setInterval(function(){
    $scope.getMessages();

  }, 1500)

})

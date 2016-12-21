var userController = (function(){
	var scope = this;
    var MAX_USERS_COUNT = 10;
  

  function getUserText(user){
  	return user.name + ' ' + user.lastname + ' ' + user.salary + ' ' + user.position;
  }
  
  function validateText(val){
    if (val.length < 1) {
      return false;
    }
    return true;
  };
  
  function getUser() {
  if (!validateText(scope.username.value)	|| !validateText(scope.lastname.value) || !validateText(scope.position.value)) {
    return null;
  }
    
    return {
      name: scope.username.value,
      lastname: scope.lastname.value,
      salary: scope.salary.value,
      position: scope.position.value
    };
  };
  
  function getAverageSalary(){
  	var salary = 0;
  	for(var i = 0; i < scope.users.length; i++){
    	salary += Number(scope.users[i].salary) / scope.users.length;
    }
    return salary;
  };
  
  
  function addUserClicked (event) {
  	event.preventDefault();
    
    if (scope.users.length >= scope.usersCountLimit) {
      alert('Should not be more than ' + scope.usersCountLimit + ' users');
      return;
    }
    
    var newUser = getUser();
    if (newUser == null) {
      alert('All fields are required');
      return;
    }
    if (newUser.salary > 2000) {
      alert('Salary could not be over 2000');
      return;
    }
    users.push(newUser);
    var newUserText = getUserText(newUser);
    var userHtmlElement = document.createElement("li");
  	userHtmlElement.appendChild(document.createTextNode(newUserText));
    scope.userList.appendChild(userHtmlElement);
    
    updateUsersCount();
    updateUsersSalary();
  };
  
  function maxUserCountChanged (event) {
  	scope.usersCountLimit = scope.maxUsersCount.value;
  };
  

  function updateUsersCount() {
  	scope.usersCount.innerHTML = scope.users.length;
  };
  
  function updateUsersSalary() {
    scope.AverageSalary.innerHTML = getAverageSalary();
  };

  function userController() {
  
		scope.users = [];
  
  	
    scope.username = document.getElementById('username');
		scope.lastname = document.getElementById('lastname');
		scope.salary = document.getElementById('salary');
		scope.position = document.getElementById('position');
    scope.submit = document.getElementById('addUser');
    
    scope.usersCount = document.getElementById('usersCount');
    scope.AverageSalary = document.getElementById('AverageSalary');
    scope.userList = document.getElementById('userList');
    scope.maxUsersCount = document.getElementById('maxUsersCount');

    scope.usersCountLimit = MAX_USERS_COUNT;
    scope.maxUsersCount.value = scope.usersCountLimit;
    
    scope.submit.addEventListener("click", addUserClicked, false);
    scope.maxUsersCount.addEventListener("change", maxUserCountChanged, false);
  };
  
  return userController;
})();

var controller = new userController();
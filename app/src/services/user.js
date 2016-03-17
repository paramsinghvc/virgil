class UserService{
    constructor($http){
        this.$http = $http;
    }

    fetchUserInfo(){
        return this.$http({
            url : '/app/data/user.json',
            method : 'GET'
        })
    }
}

UserService.$inject = ['$http'];

export default UserService;

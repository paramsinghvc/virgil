class CareersService{
    constructor($http){
        this.$http = $http;
    }

    fetchCareersList(){
        return this.$http({
            url : '/app/data/careers.json',
            method : 'GET'
        })
    }
}

CareersService.$inject = ['$http'];

export default CareersService;

class CompaniesService{
    constructor($http){
        this.$http = $http;
    }

    fetchCompaniesList(){
        return this.$http({
            url : '/app/data/companies.json',
            method : 'GET'
        })
    }
}

CompaniesService.$inject = ['$http'];

export default CompaniesService;

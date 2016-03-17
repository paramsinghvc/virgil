class JobsService{
    constructor($http){
        this.$http = $http;
    }

    fetchJobsList(){
        return this.$http({
            url : '/app/data/jobs.json',
            method : 'GET'
        })
    }
}

JobsService.$inject = ['$http'];

export default JobsService;

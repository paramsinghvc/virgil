class JobsController{
    constructor(jobsSvc){
        this.jobsSvc = jobsSvc;
        this.loadData();
    }

    loadData(){

        this.jobsSvc.fetchJobsList().then((res) => {
            this.collection = res.data.collection;
            this.totalEntries = res.data.total;            
        })
    }
}

JobsController.$inject = ['jobsSvc'];

export default JobsController;

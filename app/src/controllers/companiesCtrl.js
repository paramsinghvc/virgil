class CompaniesController{
    constructor(companiesSvc){
        this.companiesSvc = companiesSvc;
        this.loadData();
    }

    loadData(){

        this.companiesSvc.fetchCompaniesList().then((res) => {
            this.collection = res.data.collection;
            this.totalEntries = res.data.total;            
        })
    }
}

CompaniesController.$inject = ['companiesSvc'];

export default CompaniesController;

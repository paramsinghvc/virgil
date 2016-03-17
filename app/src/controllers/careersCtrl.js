class CareersController{
    constructor(careersSvc){
        this.careersSvc = careersSvc;
        this.loadData();
    }

    loadData(){

        this.careersSvc.fetchCareersList().then((res) => {
            this.collection = res.data.collection;
            this.totalEntries = res.data.total;            
        })
    }
}

CareersController.$inject = ['careersSvc'];

export default CareersController;

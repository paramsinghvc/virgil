class UserController {
	constructor(userSvc, chartSvc) {
		this.userSvc = userSvc;
        this.chartSvc = chartSvc
		this.loadData();
	}

	loadData() {

		this.userSvc.fetchUserInfo().then((res) => {
			this.info = res.data;
            let chartData = this.chartSvc.prepareChartData(this.info.skills);
            this.info.skills.chartData = chartData.data;
            this.info.skills.paletteData = chartData.paletteData;
		})
	}

}

UserController.$inject = ['userSvc', 'chartSvc'];

export default UserController;

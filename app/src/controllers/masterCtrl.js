import config from '../config';

class MasterController {
	constructor($scope) {
        this.$scope = $scope;
        this.appName = config.appName;
        this.imagesBase = config.imagesBase;
        console.log(config)
	}
}

MasterController.$inject = ['$scope'];

export default MasterController;

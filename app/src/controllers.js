import services from './services';
import masterCtrl from './controllers/masterCtrl';
import careersCtrl from './controllers/careersCtrl';
import companiesCtrl from './controllers/companiesCtrl';
import jobsCtrl from './controllers/jobsCtrl';
import userCtrl from './controllers/userCtrl';

export default angular.module('virgil.controllers', ['virgil.services'])
	.controller('masterCtrl', masterCtrl)
    .controller('careersCtrl', careersCtrl)
    .controller('companiesCtrl', companiesCtrl)
    .controller('jobsCtrl', jobsCtrl)
    .controller('userCtrl', userCtrl)

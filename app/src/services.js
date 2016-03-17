import careersSvc from './services/careers';
import companiesSvc from './services/companies';
import jobsSvc from './services/jobs';
import userSvc from './services/user';
import chartSvc from './services/chart';

export default angular.module('virgil.services', [])
	.service('careersSvc', careersSvc)
    .service('companiesSvc', companiesSvc)
    .service('jobsSvc', jobsSvc)
    .service('userSvc', userSvc)
    .service('chartSvc', chartSvc)

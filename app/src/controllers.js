import {
	masterCtrl
} from './controllers/masterCtrl';

import {services} from './services';

export default angular.module('virgil.controllers', ['virgil.services'])
	.controller('masterCtrl', masterCtrl)

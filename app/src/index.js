import {config} from './config';
import {services} from './services';
import {controllers} from './controllers';
import {directives} from './directives';
import {filters} from './filters';

angular.module('virgil', ['virgil.controllers',
	'virgil.directives',
	'virgil.filters',
	'virgil.services'
]);

import {templates} from './templates';

angular.bootstrap(document, 'virgil');

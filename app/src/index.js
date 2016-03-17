import services from './services';
import controllers from './controllers';
import directives from './directives';
import filters from './filters';

angular.module('virgil', ['virgil.controllers',
	'virgil.directives',
	'virgil.filters',
	'virgil.services'
])


angular.bootstrap(document, ['virgil']);

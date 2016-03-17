import chartDirective from './directives/chartDirective';

export default angular.module('virgil.directives', [])
	.directive('chart', chartDirective.directiveFactory);

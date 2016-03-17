import chartDirective from './directives/chartDirective';
import popoverDirective from './directives/popoverDirective';

export default angular.module('virgil.directives', [])
	.directive('chart', chartDirective.directiveFactory)
    .directive('popover', popoverDirective.directiveFactory);

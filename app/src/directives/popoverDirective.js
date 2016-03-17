export default class PopoverDirective {
	constructor($compile, $timeout, $templateCache) {
		this.$compile = $compile;
		this.$timeout = $timeout;
		this.$templateCache = $templateCache;
		this.restrict = 'AE';
		this.scope = {
			popoverData: '=',
			popoverTitle: '@',
			popoverTemplateUrl: '@',
			popoverPlacement: '@'
		};
	}

	compile($el) {

		var originalLeave = $.fn.popover.Constructor.prototype.leave;
		$.fn.popover.Constructor.prototype.leave = function(obj) {
			var self = obj instanceof this.constructor ?
				obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)
			var container, timeout;

			originalLeave.call(this, obj);

			if (obj.currentTarget) {
				container = $(obj.currentTarget).siblings('.popover')
				timeout = self.timeout;
				container.one('mouseenter', function() {
					clearTimeout(timeout);
					container.one('mouseleave', function() {
						$.fn.popover.Constructor.prototype.leave.call(self, self);
					});
				})
			}
		};

		return ($scope, $el, $attrs) => {
			var pContent;
			if ($scope.popoverData)
				pContent = this.$compile(this.$templateCache.get($scope.popoverTemplateUrl))($scope);
			else
				pContent = $scope.popoverContent;


			this.$timeout(function() {
				$el.popover({
					template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
					content: pContent,
					title: $scope.popoverTitle || '',
					trigger: 'click hover',
					placement: $scope.popoverPlacement || 'auto',
					html: true,
					delay: {
						show: 400,
						hide: 300
					}
				});

				// $el.popover('show');

			})

		}
	}

	static directiveFactory($compile, $timeout, $templateCache) {
		PopoverDirective.instance = new PopoverDirective($compile, $timeout, $templateCache);
		return PopoverDirective.instance;
	}
}

PopoverDirective.$inject = ['$compile', '$timeout', '$templateCache'];

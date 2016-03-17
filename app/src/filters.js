import {UpperCase} from './filters/upperCase';

export default angular.module('virgil.filters', [])
	.filter('upperCase', UpperCase)

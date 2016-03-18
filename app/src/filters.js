import {UpperCase} from './filters/upperCase';
import {capitalize} from './filters/capitalize';

export default angular.module('virgil.filters', [])
	.filter('upperCase', UpperCase)
    .filter('capitalize', capitalize)

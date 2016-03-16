import {homeHtml} from './tmpls/home.html';

angular.module('virgil').run(['$templateCache', ($t) => {

    $t.put('home' , homeHtml);

}])

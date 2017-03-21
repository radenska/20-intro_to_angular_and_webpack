'use strict';

require('./scss/reset.scss');
require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');
const mooApp = angular.module('mooApp', []);

mooApp.controller('MooController', ['$log', '$scope', MooController]);

function MooController($log, $scope) {
  $log.debug('MooController');

  let mooCtrl = $scope.mooCtrl = {};
  mooCtrl.title = 'Cows are the best!';

  mooCtrl.speak = function(input) {
    $log.debug('mooCtrl.speak');
    return cowsay.say( { text: input || 'MOOOOOOOO!!!!'} );
  };

}

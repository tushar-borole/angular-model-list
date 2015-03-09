angular-model-list is a directive for [AngularJS](http://angularjs.org/) to change a model mention in model list.

Demos
-----

Check out the running demos http://htmlpreview.github.io/?https://raw.githubusercontent.com/tushariscoolster/angular-model-list/master/demo/index.html.



angular-model-list


Getting Started
---------------

* Download angular-model-list from https://github.com/tushariscoolster/angular-model-complete or install it with:
* [Bower](http://bower.io/) via `bower install angular-model-list`
* Include the script tag on your page after the AngularJS

<script type='text/javascript' src='path/to/angular.min.js'></script>
<script type='text/javascript' src='path/to/angular-model-list.js'></script>

* Ensure that your application module specifies `angular-model-list` as a dependency:

angular.module('myApplication', ['angular-model-list']);

* Use the directive by specifying an `model-list` attribute on an element.


```<input type="text" model-list="name,test" ng-model="userInfoData.first_name" class="form-control" required>```




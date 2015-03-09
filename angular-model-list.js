angular.module('modelList', []).directive('modelList', function ($parse) {
    return {
        link: function (scope, elm, attr, ngModelCtrl) {
            scope.$watch(attr.ngModel, function (val) {
                var ngModel = attr.modelList.split(",")
    
                angular.forEach(ngModel,function (innerval) {
                   
                    $parse(innerval).assign(scope, val);
                })
            });

        }
    };
});

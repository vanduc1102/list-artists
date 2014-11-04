'use strict'
app.service('ArtistService', [ '$http', '$q', function ($http, $q) {
    return {
        getAll: function () {
            var defer = $q.defer();
			$http.get('scripts/services/data.json').then(function (data) {
				defer.resolve(data);
			}, function (reason) {
				defer.reject(reason);

			});
            return defer.promise;
        }
    }
}]);
webpackHotUpdate(0,{

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var posts = {\n  namespaced: true,\n  state: {\n    data: []\n  },\n  getters: {\n    articles: function articles(_ref) {\n      var data = _ref.data;\n      return data;\n    }\n  },\n  mutations: {\n    addNewArticle: function addNewArticle(state, article) {\n      state.data.push(article);\n    },\n    removeSavedArticle: function removeSavedArticle(state, articleId) {\n      state.data = state.data.filter(function (article) {\n        return article.id !== articleId;\n      });\n    }\n  },\n  actions: {\n    fetchArticles: function fetchArticles(_ref2) {\n      var state = _ref2.state,\n          rootGetters = _ref2.rootGetters;\n      var $http = rootGetters.$http;\n\n      $http.get('../Articles.json').then(function (response) {\n        state.data = response.body;\n      }, function (response) {\n        console.error(response);\n      });\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (posts);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvbW9kdWxlcy9hcnRpY2xlcy5qcz83MjZjIl0sIm5hbWVzIjpbInBvc3RzIiwibmFtZXNwYWNlZCIsInN0YXRlIiwiZGF0YSIsImdldHRlcnMiLCJhcnRpY2xlcyIsIm11dGF0aW9ucyIsImFkZE5ld0FydGljbGUiLCJhcnRpY2xlIiwicHVzaCIsInJlbW92ZVNhdmVkQXJ0aWNsZSIsImFydGljbGVJZCIsImZpbHRlciIsImlkIiwiYWN0aW9ucyIsImZldGNoQXJ0aWNsZXMiLCJyb290R2V0dGVycyIsIiRodHRwIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiYm9keSIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsUUFBUTtBQUNaQyxjQUFZLElBREE7QUFFWkMsU0FBTztBQUNMQyxVQUFNO0FBREQsR0FGSztBQUtaQyxXQUFTO0FBQ1BDLGNBQVU7QUFBQSxVQUFHRixJQUFILFFBQUdBLElBQUg7QUFBQSxhQUFlQSxJQUFmO0FBQUE7QUFESCxHQUxHO0FBUVpHLGFBQVc7QUFDVEMsaUJBRFMseUJBQ0tMLEtBREwsRUFDWU0sT0FEWixFQUNxQjtBQUM1Qk4sWUFBTUMsSUFBTixDQUFXTSxJQUFYLENBQWdCRCxPQUFoQjtBQUNELEtBSFE7QUFJVEUsc0JBSlMsOEJBSVVSLEtBSlYsRUFJaUJTLFNBSmpCLEVBSTRCO0FBQ25DVCxZQUFNQyxJQUFOLEdBQWFELE1BQU1DLElBQU4sQ0FBV1MsTUFBWCxDQUFrQixtQkFBVztBQUFFLGVBQU9KLFFBQVFLLEVBQVIsS0FBZUYsU0FBdEI7QUFBaUMsT0FBaEUsQ0FBYjtBQUNEO0FBTlEsR0FSQztBQWdCWkcsV0FBUztBQUNQQyxpQkFETyxnQ0FDK0I7QUFBQSxVQUF0QmIsS0FBc0IsU0FBdEJBLEtBQXNCO0FBQUEsVUFBZmMsV0FBZSxTQUFmQSxXQUFlO0FBQUEsVUFDNUJDLEtBRDRCLEdBQ2xCRCxXQURrQixDQUM1QkMsS0FENEI7O0FBRXBDQSxZQUFNQyxHQUFOLENBQVUsa0JBQVYsRUFBOEJDLElBQTlCLENBQW1DLG9CQUFZO0FBQzdDakIsY0FBTUMsSUFBTixHQUFhaUIsU0FBU0MsSUFBdEI7QUFDRCxPQUZELEVBRUcsb0JBQVk7QUFDYkMsZ0JBQVFDLEtBQVIsQ0FBY0gsUUFBZDtBQUNELE9BSkQ7QUFLRDtBQVJNO0FBaEJHLENBQWQ7O0FBNEJBLHlEQUFlcEIsS0FBZiIsImZpbGUiOiIzNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBvc3RzID0ge1xuICBuYW1lc3BhY2VkOiB0cnVlLFxuICBzdGF0ZToge1xuICAgIGRhdGE6IFtdXG4gIH0sXG4gIGdldHRlcnM6IHtcbiAgICBhcnRpY2xlczogKHsgZGF0YSB9KSA9PiAoZGF0YSlcbiAgfSxcbiAgbXV0YXRpb25zOiB7XG4gICAgYWRkTmV3QXJ0aWNsZShzdGF0ZSwgYXJ0aWNsZSkge1xuICAgICAgc3RhdGUuZGF0YS5wdXNoKGFydGljbGUpXG4gICAgfSxcbiAgICByZW1vdmVTYXZlZEFydGljbGUoc3RhdGUsIGFydGljbGVJZCkge1xuICAgICAgc3RhdGUuZGF0YSA9IHN0YXRlLmRhdGEuZmlsdGVyKGFydGljbGUgPT4geyByZXR1cm4gYXJ0aWNsZS5pZCAhPT0gYXJ0aWNsZUlkIH0pXG4gICAgfVxuICB9LFxuICBhY3Rpb25zOiB7XG4gICAgZmV0Y2hBcnRpY2xlcyh7IHN0YXRlLCByb290R2V0dGVycyB9KSB7XG4gICAgICBjb25zdCB7ICRodHRwIH0gPSByb290R2V0dGVyc1xuICAgICAgJGh0dHAuZ2V0KCcuLi9BcnRpY2xlcy5qc29uJykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHN0YXRlLmRhdGEgPSByZXNwb25zZS5ib2R5XG4gICAgICB9LCByZXNwb25zZSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwb3N0c1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JlL21vZHVsZXMvYXJ0aWNsZXMuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///37\n");

/***/ })

})
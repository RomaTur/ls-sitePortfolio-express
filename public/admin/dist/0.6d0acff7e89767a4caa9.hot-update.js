webpackHotUpdate(0,{

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var skills = {\n  namespaced: true,\n  state: {\n    data: []\n  },\n  getters: {\n    skills: function skills(_ref) {\n      var data = _ref.data;\n      return data;\n    }\n  },\n  mutations: {\n    addNewSkill: function addNewSkill(state, skill) {\n      state.data.push(skill);\n    },\n    removeSavedSkill: function removeSavedSkill(state, skillId) {\n      state.data = state.data.filter(function (skill) {\n        return skill.id !== skillId;\n      });\n    },\n    changeSavedPercents: function changeSavedPercents(state, newObj) {\n      state.data.forEach(function (skill) {\n        console.log(newObj);\n        skill.percents = skill.id === newObj.id ? newObj.new : skill.percents;\n      });\n    }\n  },\n  actions: {\n    fetchSkills: function fetchSkills(_ref2) {\n      var state = _ref2.state,\n          rootGetters = _ref2.rootGetters;\n      var $http = rootGetters.$http;\n\n      $http.get('../../About.json').then(function (response) {\n        state.data = response.body;\n      }, function (response) {\n        console.error(response);\n      });\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (skills);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvbW9kdWxlcy9za2lsbHMuanM/ZDQ3OSJdLCJuYW1lcyI6WyJza2lsbHMiLCJuYW1lc3BhY2VkIiwic3RhdGUiLCJkYXRhIiwiZ2V0dGVycyIsIm11dGF0aW9ucyIsImFkZE5ld1NraWxsIiwic2tpbGwiLCJwdXNoIiwicmVtb3ZlU2F2ZWRTa2lsbCIsInNraWxsSWQiLCJmaWx0ZXIiLCJpZCIsImNoYW5nZVNhdmVkUGVyY2VudHMiLCJuZXdPYmoiLCJmb3JFYWNoIiwiY29uc29sZSIsImxvZyIsInBlcmNlbnRzIiwibmV3IiwiYWN0aW9ucyIsImZldGNoU2tpbGxzIiwicm9vdEdldHRlcnMiLCIkaHR0cCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImJvZHkiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsU0FBUztBQUNiQyxjQUFZLElBREM7QUFFYkMsU0FBTztBQUNMQyxVQUFNO0FBREQsR0FGTTtBQUtiQyxXQUFTO0FBQ1BKLFlBQVE7QUFBQSxVQUFHRyxJQUFILFFBQUdBLElBQUg7QUFBQSxhQUFlQSxJQUFmO0FBQUE7QUFERCxHQUxJO0FBUWJFLGFBQVc7QUFDVEMsZUFEUyx1QkFDR0osS0FESCxFQUNVSyxLQURWLEVBQ2lCO0FBQ3hCTCxZQUFNQyxJQUFOLENBQVdLLElBQVgsQ0FBZ0JELEtBQWhCO0FBQ0QsS0FIUTtBQUlURSxvQkFKUyw0QkFJUVAsS0FKUixFQUllUSxPQUpmLEVBSXdCO0FBQy9CUixZQUFNQyxJQUFOLEdBQWFELE1BQU1DLElBQU4sQ0FBV1EsTUFBWCxDQUFrQjtBQUFBLGVBQVVKLE1BQU1LLEVBQU4sS0FBYUYsT0FBdkI7QUFBQSxPQUFsQixDQUFiO0FBQ0QsS0FOUTtBQU9URyx1QkFQUywrQkFPV1gsS0FQWCxFQU9rQlksTUFQbEIsRUFPMEI7QUFDakNaLFlBQU1DLElBQU4sQ0FBV1ksT0FBWCxDQUFtQixpQkFBUztBQUMxQkMsZ0JBQVFDLEdBQVIsQ0FBWUgsTUFBWjtBQUNBUCxjQUFNVyxRQUFOLEdBQWtCWCxNQUFNSyxFQUFOLEtBQWFFLE9BQU9GLEVBQXJCLEdBQTJCRSxPQUFPSyxHQUFsQyxHQUF3Q1osTUFBTVcsUUFBL0Q7QUFDRCxPQUhEO0FBSUQ7QUFaUSxHQVJFO0FBc0JiRSxXQUFTO0FBQ1BDLGVBRE8sOEJBQzZCO0FBQUEsVUFBdEJuQixLQUFzQixTQUF0QkEsS0FBc0I7QUFBQSxVQUFmb0IsV0FBZSxTQUFmQSxXQUFlO0FBQUEsVUFDMUJDLEtBRDBCLEdBQ2hCRCxXQURnQixDQUMxQkMsS0FEMEI7O0FBRWxDQSxZQUFNQyxHQUFOLENBQVUsa0JBQVYsRUFBOEJDLElBQTlCLENBQW1DLG9CQUFZO0FBQzdDdkIsY0FBTUMsSUFBTixHQUFhdUIsU0FBU0MsSUFBdEI7QUFDRCxPQUZELEVBRUcsb0JBQVk7QUFDYlgsZ0JBQVFZLEtBQVIsQ0FBY0YsUUFBZDtBQUNELE9BSkQ7QUFLRDtBQVJNO0FBdEJJLENBQWY7O0FBa0NBLHlEQUFlMUIsTUFBZiIsImZpbGUiOiIzOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNraWxscyA9IHtcbiAgbmFtZXNwYWNlZDogdHJ1ZSxcbiAgc3RhdGU6IHtcbiAgICBkYXRhOiBbXVxuICB9LFxuICBnZXR0ZXJzOiB7XG4gICAgc2tpbGxzOiAoeyBkYXRhIH0pID0+IChkYXRhKVxuICB9LFxuICBtdXRhdGlvbnM6IHtcbiAgICBhZGROZXdTa2lsbChzdGF0ZSwgc2tpbGwpIHtcbiAgICAgIHN0YXRlLmRhdGEucHVzaChza2lsbClcbiAgICB9LFxuICAgIHJlbW92ZVNhdmVkU2tpbGwoc3RhdGUsIHNraWxsSWQpIHtcbiAgICAgIHN0YXRlLmRhdGEgPSBzdGF0ZS5kYXRhLmZpbHRlcihza2lsbCA9PiAoc2tpbGwuaWQgIT09IHNraWxsSWQpKVxuICAgIH0sXG4gICAgY2hhbmdlU2F2ZWRQZXJjZW50cyhzdGF0ZSwgbmV3T2JqKSB7XG4gICAgICBzdGF0ZS5kYXRhLmZvckVhY2goc2tpbGwgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdPYmopXG4gICAgICAgIHNraWxsLnBlcmNlbnRzID0gKHNraWxsLmlkID09PSBuZXdPYmouaWQpID8gbmV3T2JqLm5ldyA6IHNraWxsLnBlcmNlbnRzXG4gICAgICB9KVxuICAgIH1cbiAgfSxcbiAgYWN0aW9uczoge1xuICAgIGZldGNoU2tpbGxzKHsgc3RhdGUsIHJvb3RHZXR0ZXJzIH0pIHtcbiAgICAgIGNvbnN0IHsgJGh0dHAgfSA9IHJvb3RHZXR0ZXJzXG4gICAgICAkaHR0cC5nZXQoJy4uLy4uL0Fib3V0Lmpzb24nKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgc3RhdGUuZGF0YSA9IHJlc3BvbnNlLmJvZHlcbiAgICAgIH0sIHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNraWxsc1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JlL21vZHVsZXMvc2tpbGxzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///38\n");

/***/ })

})
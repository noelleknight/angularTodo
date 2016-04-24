(function() {
  'use strict';

  angular
  .module("toDos")
  .factory("newItems", newItems);

  var item = [];
  // test
  var localStorageKey = "toDos-angular";
  if (!localStorage.getItem(localStorageKey)) {
    console.log("Updating storage");
    localStorage.setItem(localStorageKey, JSON.stringify(item));
  }

  function saveAllItems(items) {
    localStorage.setItem(localStorageKey, angular.toJson(items));
  }

  function newItems() {
    return {
      data: JSON.parse(localStorage.getItem(localStorageKey)),
      save: saveAllItems
    };
  }

})();

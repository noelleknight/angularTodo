(function() {
  'use strict';

  angular
  .module("toDos")
  .controller("ListController", ListController);

  ListController.$inject = ["newItems"];

  function ListController(newItems) {
    this.items = newItems.data;

    this.newItem = {
      name: "",
      complete: false,
      editing: false
    };

// function to create new list item from form input value & save to local storage
    this.save = function saveItem(form) {
      this.items.push(this.newItem);
      newItems.save(this.items);
      this.newItem = {
        name: "",
        complete: false,
        editing: false
      };
      this.addedItem = [];
      var that = this;

      newItems.data.forEach(function(item){

        that.addedItem.push(item);
      });
    };
  // edit list input on click event
    this.editLi = function editLi(event, item){
      if(event.keyCode === 13){
        item.editing = false;
      }
    };
// update items count on footer
    this.itemsCount = function itemsCount() {
      var itemsRemaining = 0;
      this.items.forEach(function countIt(item) {
        if (!item.complete) {
          itemsRemaining++;
        }
      });
      return itemsRemaining;
    };
// clear completed items on button click & reset local storage
    this.clearCompleted = function clearCompleted() {
      var that = this;
      this.items.forEach(function clearIt(item, i) {
        if(item.complete){
          that.items.splice(i, 1);
          newItems.save(that.items);
        }
      });
    };
    // show functions for footer buttons
    this.showAll = function showAll(){
      this.filter = false;
    };
    this.showActive= function showActive(){
      this.filter= {complete: false};
    };
    this.showComplete= function showComplete(){
      this.filter= {complete: true};
    };
    this.deleteLi = function deleteLi(index){
      this.items.splice(index,1);
      newItems.save(this.items);
    };
    this.filter = false;
  }

})();

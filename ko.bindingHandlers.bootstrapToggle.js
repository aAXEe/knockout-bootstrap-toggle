(function(factory) {
  // Module systems magic dance.

  if (typeof require === "function" && typeof exports === "object" && typeof module === "object") {
    // CommonJS or Node: hard-coded dependency on "knockout"
    factory(require("knockout"), require("jquery"));
  } else if (typeof define === "function" && define["amd"]) {
    // AMD anonymous module with hard-coded dependency on "knockout"
    define(["knockout", "jquery"], factory);
  } else {
    // <script> tag: use the global `ko` object, attaching a `mapping` property
    factory(ko, jQuery);
  }
}(function(ko, $) {
  function setBootstrapToggleState(element, value) {
    var disabled = $(element).prop('disabled');
    $(element).bootstrapToggle('enable');
    $(element).bootstrapToggle(value ? 'on' : 'off');
    if (disabled)
      $(element).bootstrapToggle('disable');
  }
  ko.bindingHandlers.bootstrapToggle = {
    init: function(element, valueAccessor, allBindingsAccessor, viewModel) {
      $(element).bootstrapToggle();
      setBootstrapToggleState(element, ko.utils.unwrapObservable(valueAccessor()))
      $(element).on('change', function() {
        valueAccessor()($(this).prop('checked'));
      });
    },
    update: function(element, valueAccessor, allBindingsAccessor, viewModel) {
      var vStatus = $(element).prop('checked');
      var vmStatus = ko.utils.unwrapObservable(valueAccessor());
      if (vStatus != vmStatus) {
        setBootstrapToggleState(element, vmStatus);
      }
    }
  };

}));

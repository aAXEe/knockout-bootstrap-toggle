# knockout-bootstrap-toggle
Knockout Binding Handler for the bootstrap-toggle plugin.

## Install
### Bower
`bower install knockout-bootstrap-toggle`

## Usage
Include the javascript file in your html:

```html
<script src="/bower_components/knockout/dist/knockout.js"></script>
<script src="/bower_components/bootstrap-toggle/js/bootstrap-toggle.js"></script>
<script src="/bower_components/knockout-bootstrap-toggle/ko.bindingHandlers.bootstrapToggle.js"></script>
```

Add an `bootstrapToggle` data binding to the checkbox:

```html
<input type="checkbox" data-toggle="toggle" data-bind="bootstrapToggle: wantsSpam" />
```

Use like a normal checkbox (http://knockoutjs.com/documentation/checked-binding.html)

```javascript
 var viewModel = {
     wantsSpam: ko.observable(true) // Initially checked
 };

 // ... then later ...
 viewModel.wantsSpam(false); // The checkbox becomes unchecked
```

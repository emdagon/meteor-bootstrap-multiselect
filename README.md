## [davidstutz](https://github.com/davidstutz)'s Bootstrap Multiselect wrapper for Meteor

Multiselect Docs: [https://github.com/davidstutz/bootstrap-multiselect](https://github.com/davidstutz/bootstrap-multiselect)

## Provided Helper

You can use Multiselect API as it is, but you also have the chooise to use a simple helper provided by this package.

```
  {{#Multiselect name='myMultiselect' options=myOptions selected=selectedOptions }}
    <option value="{{ _id }}" {{ attrs }}>{{ caption }}</option>
  {{/Multiselect}}
```
Make sure you add `{{ attrs }}` in your option node so the helper can set the `selected` attribute (I called _attrs_ to stay open to future attributes).

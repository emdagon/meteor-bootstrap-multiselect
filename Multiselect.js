
Template.Multiselect.onRendered(function() {
  this.$('select').multiselect({
    disableIfEmpty: true
  });
});

Template.Multiselect.helpers({
  args: function() {
    data = Template.instance().data;
    selected = false;
    if (data.selected instanceof Array)
      selected = Boolean(data.selected.indexOf(this._id) > -1 );
    else
      selected = this._id === data.selected;
    return _.extend({}, this, {attrs: (selected ? 'selected' : '')});
  }
});


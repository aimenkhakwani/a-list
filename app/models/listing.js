import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  owner: DS.attr(),
  contact: DS.attr(),
  date: DS.attr(),
  category: DS.belongsTo('category', {async: true})
});

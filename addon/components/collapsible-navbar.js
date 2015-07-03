import Ember from 'ember';
import layout from '../templates/components/collapsible-navbar';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['navbar-wrapper'],

  init: function() {
    this._super.apply(this, arguments);

    this._onNavClick = function() {
      var toggle = this.$('.navbar-toggle');
      if (toggle && toggle.is(':visible')){
        toggle.trigger('click');
      }
    }.bind(this);

  },

  didInsertElement: function() {
    this.$('.nav').on('click', 'a', this._onNavClick);
  },

  willDestroyElement: function() {
    this.$('.nav').off('click', 'a', this._onNavClick);
  }
});

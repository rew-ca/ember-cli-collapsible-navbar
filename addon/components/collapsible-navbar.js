import Ember from 'ember';
import layout from '../templates/components/collapsible-navbar';

export default Ember.Component.extend({

    layout: layout,

    classNames: ['navbar-wrapper'],

    _onNavClick: function() {
        var toggle = this.$('.navbar-toggle');
        if (toggle && toggle.is(':visible'))
            toggle.trigger('click');
    },

    didInsertElement: function() {
        this.$('.nav').on('click', 'a', this._onNavClick.bind(this));
    },

    willDestroyElement: function() {
        this.$('.nav').off('click', 'a', this._onNavClick.bind(this));
    }

});

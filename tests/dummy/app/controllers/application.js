import Ember from 'ember';

export default Ember.Controller.extend({

    showNavbar: true,

    actions: {
        toggleNavbar() {
            this.toggleProperty('showNavbar');
        },
        noop() {
            
        }
    }

});

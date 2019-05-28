Ext.define('Pat.controller.LoginController', {
    extend: 'Ext.app.Controller',
    views: [ 'Login' ],
    init: function() {
    	this.control({
    		'login form button#submit': {
    			click: this.onButtonClickLogin
    		},
    		'login form buttom#cancel': {
    			click: this.onButtonClickCancel
    		},
    		'login form': {
    			beforeaction: this.onFormBeforeAction
    		}
    	})
    },

    onButtonClickCancel: function(button, e, options) {
    	button.up('form').getForm().reset();
    },

    onButtonClickLogin: function(button, e, options) {
    	button.up('form').getForm().submit({
    		url: '/login',
    		failure: function(form,action) {
    			switch (action.failureType) {
    				case Ext.form.action.Action.CLIENT_INVALID:
    					Ext.Msg.alert('Failure', 'Invalid login details');
    					break;
    				case Ext.form.action.Action.SERVER_INVALID:
    					Ext.Msg.alert('Failure', action.result.msg);
    					break;
					case Ext.form.action.Action.CONNECT_FAILURE:
    					Ext.Msg.alert('Server Error', 'Server appears to be down');
    					break;
					default: 
						Ext.Msg.alert('Error', 'An unknown error has occured');
    			}
    		},
    		success: function(form, action) {
    			var doctor = Ext.create('Pat.model.Doctors', action.result.doctors);
    			button.up('login').close();
    			Ext.create('Pat.view.main.Main');
    		}
    	})
    }
});

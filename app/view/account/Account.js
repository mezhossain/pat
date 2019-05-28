Ext.define('Pat.view.account.Account', {
    extend: 'Ext.form.Panel',
    alias: 'widget.Account',
    xtype: 'accountForm',
    title: 'Account Settings',
    clearForm: function () {
        this.getForm().getFields().each(function (field) {
            field.validateOnChange = false;
            field.setValue('');
            field.resetOriginalValue();
        });
    },
    controller: 'account',
    initComponent: function () {
        Ext.apply(this, {
            jsonSubmit: true,
            url: '/api/account',
            resizable: false,
            collapsible: false,
            bodyPadding: '5',
            buttonAlign: 'center',
            border: false,
            trackResetOnLoad: true,
            layout: {
                type: 'vbox'
            },
            fieldDefaults: {
                xtype: 'textfield',
                msgTarget: 'side',
                labelAlign: 'top',
                labelStyle: 'font-weight:bold'
            },
            defaultType: 'textfield',
            buttons: [{
                    text: 'Save',
                    itemId: 'btnSave',
                    handler: 'onSaveClick'
            },
                {
                    text: 'Clear',
                    itemId: 'btnClear',
                    handler: 'onClearClick'
            }],
            items: [{
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    defaultType: 'textfield',
                    width: '100%',
                    fieldDefaults: {
                        labelAlign: 'top',
                        labelStyle: 'font-weight:bold'
                    }
                }, {
                    fieldLabel: 'Name',
                    flex: 1,
                    name: 'name',
                    margin: '0 0 0 5',
                    width: '30%',
                    allowBlank: false
                    },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Username',
                    margin: '0 0 0 5',
                    width: '30%',
                    name: 'username'
                    }, {
                    xtype: 'textfield',
                    inputType: 'password',
                    fieldLabel: 'Password',
                    margin: '0 0 0 5',
                    width: '30%',
                    name: 'password'
                    }, {
                    xtype: 'textfield',
                    fieldLabel: 'Email',
                    margin: '0 0 0 5',
                    width: '30%',
                    name: 'email'
                    },
                {
                    xtype: 'datefield',
                    fieldLabel: 'Date of Birth',
                    name: 'birthDate'
                    },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Address',
                    width: '100%',
                    name: 'address1'
                    },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Phone',
                    width: '50%',
                    name: 'phone'
                    }
            ],

        });

        this.callParent(arguments);
    }
});

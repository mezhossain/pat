Ext.define('Pat.view.patients.Patients', {
    extend: 'Ext.form.Panel',
    alias: 'widget.Patients',
    xtype: 'patientForm',
    title: 'Patient Entry Form',
    clearForm: function () {
        this.getForm().getFields().each(function (field) {
            field.validateOnChange = false;
            field.setValue('');
            field.resetOriginalValue();
        });
    },
    controller: 'patient',
    initComponent: function () {
        Ext.apply(this, {
            jsonSubmit: true,
            url: '/api/patient',
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
                    text: 'Create',
                    itemId: 'btnCreate',
                    formBind: true,
                    handler: 'onCreateClick'
            },
                {
                    text: 'Read',
                    itemId: 'btnLoad',
                    handler: 'onReadClick'
            },

                {
                    text: 'Update',
                    itemId: 'btnUpdate',
                    formBind: true,
                    handler: 'onUpdateClick'
            },
                {
                    text: 'Delete',
                    itemId: 'btnDelete',
                    formBind: true,
                    handler: 'onDeleteClick'
            },
                {
                    text: 'Reset',
                    itemId: 'btnReset',
                    handler: 'onResetClick'
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
                    },
                    items: [{
                            fieldLabel: 'id',
                            name: 'id',
                            readOnly: true,
                            width: 55
                    },
                        {
                            fieldLabel: 'Name',
                            flex: 1,
                            name: 'name',
                            margin: '0 0 0 5',
                            allowBlank: false
                    },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Gender',
                            margin: '0 0 0 5',
                            width: '10%',
                            name: 'gender'
                    }, {
                            xtype: 'textfield',
                            fieldLabel: 'Height',
                            margin: '0 0 0 5',
                            width: '10%',
                            name: 'height'
                    }, {
                            xtype: 'textfield',
                            fieldLabel: 'Weight',
                            margin: '0 0 0 5',
                            width: '10%',
                            name: 'weight'
                    }
                    ]
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
                    fieldLabel: 'Email',
                    width: '50%',
                    name: 'email'
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

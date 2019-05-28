Ext.define('Pat.view.patients.PatientsList', {
    extend: 'Ext.grid.Panel',
    xtype: 'patientList',

    title: 'Appointments',

    controller: 'patient-list',
    viewModel: {
        type: 'patientviewmodel'
    },
    reference: 'patientlistgrid',
    selType: 'rowmodel',
    selModel: {
        mode: 'SINGLE'
    },
    viewConfig: {
        stripeRows: true
    },
    listeners: {
        selectionchange: 'onSelectionChange'
    },
    bind: {
        store: '{PatientsListStore}'
    },
    initComponent: function () {
        Ext.apply(this, {
            plugins: [Ext.create('Ext.grid.plugin.RowEditing', {
                clicksToEdit: 2
            })],

            columns: [{
                    text: "ID",
                    dataIndex: 'id',
                    width: 45
            },
                {
                    text: "Name",
                    flex: 1,
                    dataIndex: 'name',
                    editor: {
                        // defaults to textfield if no xtype is supplied
                        allowBlank: false
                    }
            },
                {
                    xtype: 'datecolumn',
                    header: "Date",
                    width: 135,
                    dataIndex: 'birthDate',
                    editor: {
                        xtype: 'datefield',
                        allowBlank: true
                    },
                    renderer: Ext.util.Format.dateRenderer('d/m/Y')
            },
                {
                    text: "Time",
                    flex: 1,
                    dataIndex: 'time',
                    editor: {
                        allowBlank: true
                    }
            },
                {
                    text: "Phone",
                    flex: 1,
                    dataIndex: 'phone',
                    editor: {
                        allowBlank: true
                    }
            },
                {
                    text: "Email",
                    flex: 1,
                    dataIndex: 'email',
                    editor: {
                        allowBlank: true
                    }
            }],
            tbar: [{
                text: 'Add Appoinment',
                iconCls: 'fa-plus',
                handler: 'onAddClick'
            }, {
                itemId: 'removeAppointment',
                text: 'Remove Appointment',
                iconCls: 'fa-times',
                reference: 'btnRemovePatient',
                handler: 'onRemoveClick',
                disabled: true
            }]


        });

        this.callParent(arguments);
    }
});

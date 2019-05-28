Ext.define('Pat.model.Appointments', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'patientid', type: 'int' },
        { name: 'doctorid', type: 'int' },
        { name: 'datetime', type: 'date' },
        { name: 'pattoken', type: 'int' },
        { name: 'app_id', type: 'int' }

    ],
    belongsTo: [{
        name: 'doctors',
        model: 'Pat.model.Doctors',
        foreignKey: 'app_id'
    }],
    validations: [
		{ type: 'presence', field: 'patientid' },
		{ type: 'presence', field: 'doctorid' },
		{ type: 'presence', field: 'date' },
		{ type: 'date', field: 'date' },
    ]

});

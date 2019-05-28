Ext.define('Pat.model.Patients', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    schema: {
        namespace: 'Pat.model'
    },
    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'phone',
            type: 'string'
        },
        {
            name: 'email',
            type: 'string'
        },
        {
            name: 'address',
            type: 'string'
        },
        {
            name: 'gender',
            type: 'string'
        },
        {
            name: 'birthDate',
            type: 'date'
        },
        {
            name: 'height',
            type: 'string'
        },
        {
            name: 'weight',
            type: 'string'
        },
        {
            name: 'pat_id',
            type: 'int'
        }],
    belongsTo: [{
        name: 'doctors',
        model: 'Pat.model.Doctors',
        foreignKey: 'doc_id'
    }],
    validators: [
        {
            type: 'presence',
            field: 'name'
        },
        {
            type: 'presence',
            field: 'phone'
        },
        {
            type: 'presence',
            field: 'address'
        },
        {
            type: 'presence',
            field: 'email'
        },
        {
            type: 'presence',
            field: 'gender'
        },
        {
            type: 'presence',
            field: 'age'
        },
        {
            type: 'presence',
            field: 'height'
        },
        {
            type: 'presence',
            field: 'weight'
        },
        {
            type: 'length',
            field: 'email',
            max: 250,
            min: 4
        },
        {
            type: 'length',
            field: 'name',
            max: 250
        },
        {
            type: 'length',
            field: 'phone',
            max: 14,
            min: 11
        },
        {
            type: 'length',
            field: 'age',
            max: 3
        },
        {
            type: 'email',
            field: 'email'
        }

           ]
});

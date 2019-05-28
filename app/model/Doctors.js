Ext.define('Pat.model.Doctors', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'email',
            type: 'string'
        },
        {
            name: 'username',
            type: 'string'
        },
        {
            name: 'password',
            type: 'password'
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
            name: 'address',
            type: 'string'
        },
        {
            name: 'specialization',
            type: 'string'
        },
        {
            name: 'isavailable',
            type: 'boolean'
        }

    ],
    manyToMany: [{
        model: 'Pat.model.Patients',
        name: 'patients',
        foreignKey: 'pat_id'
    }],
    validators: [
        {
            type: 'presence',
            field: 'email'
        },
        {
            type: 'presence',
            field: 'username'
        },
        {
            type: 'presence',
            field: 'password'
        },
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
            field: 'specialization'
        },
        {
            type: 'length',
            field: 'email',
            max: 250,
            min: 4
        },
        {
            type: 'length',
            field: 'username',
            max: 250,
            min: 5
        },
        {
            type: 'length',
            field: 'password',
            max: 250,
            min: 8
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
            field: 'address'
        },
        {
            type: 'length',
            field: 'specialization'
        },
        {
            type: 'email',
            field: 'email'
        },
        {
            type: 'customPassword',
            field: 'password'
        }
    ],
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});

Ext.define('Pat.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'id', 'name', 'phone', 'email'
    ],

    data: {
        items: [
            {
                id: '0',
                name: 'Damien',
                phone: "555-121-1111",
                email: 'damian@yahoo.com'

            },
            {
                id: '1',
                name: 'John',
                phone: "555-120-1111",
                email: 'john@outlook.com'

            },
            {
                id: '2',
                name: 'Lawrence',
                phone: "555-121-0111",
                email: 'l.lawrence@yahoo.com'

            },
            {
                id: '3',
                name: 'Matthew',
                phone: "555-121-1101",
                email: 'matthewmcconaughey@gmail.com'

            },
    ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});

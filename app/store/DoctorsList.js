Ext.define('Pat.store.DoctorsList', {
    extend: 'Ext.data.Store',

    alias: 'store.doctors',

    fields: [
        'username, password, name', 'email', 'phone'
    ],

    data: { items: [
        { username: 'jluc', password: '4tTy@ozy', name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
        { username: 'wmorgh', password: '4tTy@ozy', name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
        { username: 'dtroi', password: '4tTy@ozy', name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
        { username: 'data', password: '4tTy@ozy', name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
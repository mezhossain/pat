/**
 * This view is an example list of people.
 */
Ext.define('Pat.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'Pat.store.Personnel'
    ],

    title: 'Patients List',

    store: {
        type: 'personnel'
    },

    columns: [
        {
            text: 'ID',
            dataIndex: 'id',
            flex: 0.2
        },
        {
            text: 'Name',
            dataIndex: 'name'
        },
        {
            text: 'Phone',
            dataIndex: 'phone',
            flex: 1
        },
        {
            text: 'Email',
            dataIndex: 'email',
            flex: 1
        },
    ],

    listeners: {
        select: 'onItemSelected'
    }
});

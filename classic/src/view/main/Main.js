/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Pat.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Pat.view.main.MainController',
        'Pat.view.main.MainModel',

    ],

    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',
    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        items: [{
            xtype: 'button',
            text: 'Logout',
            margin: '10 0',
            handler: 'onClickButton'
        }]
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
            title: 'Patients List',
            iconCls: 'fa-users',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'mainlist'
        }]
    }, {
            title: 'Patient Form',
            iconCls: 'fa-user',
            items: [{
                xtype: 'patientForm'
        }]
    }, {
            title: 'Appointments',
            glyph: 'xf017@FontAwesome',
            items: [{
                xtype: 'patientList',
                reference: 'patientlistgrid'
        }]
    }, {
            title: 'Account',
            iconCls: 'fa-cog',
            items: [{
                xtype: 'accountForm'
        }]
    }

]
});

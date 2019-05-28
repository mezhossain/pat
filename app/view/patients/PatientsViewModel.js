Ext.define('Pat.view.patient.PatientsViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.patientviewmodel',
    stores: {
        PatientsListStore: {
            model: 'Pat.model.Patients',
            autoLoad: true,
            autoSync: true,
            proxy: {
                type: 'rest',
                reader: {
                    rootProperty: 'data',
                    type: 'json'
                },
                url: '/api/patient',
                writer: {
                    type: 'json',
                    dateFormat: 'd/m/Y',
                    writeAllFields: true
                }
            }
        }
    }
});

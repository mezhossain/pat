Ext.define('Pat.view.patients.PatientsController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.patient',

    onCreateClick: function (sender, record) {
        var patientForm = this.getView().getForm();

        if (!patientForm.isDirty()) {
            Ext.Msg.alert('Status', 'No new data to create.');
            return;
        } else if (!patientForm.isValid()) {
            Ext.Msg.alert('Status', 'Invalid data.');
            return;
        }

        // Submit the Ajax request and handle the response
        patientForm.submit({
            url: '/api/patient',
            waitMsg: 'Saving..',
            headers: {
                'Content-Type': 'application/json'
            },
            clientValidation: true,
            submitEmptyText: true,
            success: function (form, action) {

                var patient = Ext.create('Pat.model.Patients');
                var resp = Ext.decode(action.response.responseText);

                if (resp.data[0]) {
                    // addstudent returns student model with Id so we can re-load model into form so form will have isDirty false
                    student.set(resp.data[0]);
                    patientForm.loadRecord(patient);
                }

                Ext.Msg.alert('Status', 'Saved successfully.');

            },
            failure: function (form, action) {
                if (action.failureType === Ext.form.action.Action.CLIENT_INVALID) {
                    Ext.Msg.alert('CLIENT_INVALID', 'Something has been missed. Please check and try again.');
                }
                if (action.failureType === Ext.form.action.Action.CONNECT_FAILURE) {
                    Ext.Msg.alert('CONNECT_FAILURE', 'Status: ' + action.response.status + ': ' + action.response.statusText);
                }
                if (action.failureType === Ext.form.action.Action.SERVER_INVALID) {
                    Ext.Msg.alert('SERVER_INVALID', action.result.message);
                }
            }
        });
    },

    onReadClick: function (sender, record) {
        var studentForm = this.getView().getForm();

        //result should contain success=true and data property otherwise it will go to failure even if there is no failure
        patientForm.load({
            waitMsg: 'Loading...',
            method: 'GET',
            params: {
                id: 1
            },
            success: function (form, action) {
                try {
                    var resp = Ext.decode(action.response.responseText);

                    if (resp.data.length > 0) {
                        // addstudent returns student model with Id so we can re-load model into form so form will have isDirty false
                        var student = Ext.create('Pat.model.Patients');
                        patient.set(resp.data[0]);
                        patientForm.loadRecord(patient);
                    }
                } catch (ex) {
                    Ext.Msg.alert('Status', 'Exception: ' + ex.Message);

                }
            },
            failure: function (form, action) {
                Ext.Msg.alert("Load failed", action.result.errorMessage);
            }
        });
    },

    onUpdateClick: function (sender, record) {
        var patientForm = this.getView().getForm();

        if (!patientForm.isDirty()) {
            Ext.Msg.alert('Status', 'No pending changes to save.');
            return;
        } else if (!patientForm.isValid()) {
            Ext.Msg.alert('Status', 'Invalid data.');
            return;
        }

        patientForm.submit({
            url: '/api/patient',
            waitMsg: 'Updating..',
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            clientValidation: true,
            success: function (form, action) {
                try {
                    var patient = Ext.create('Pat.model.Patients');
                    var resp = Ext.decode(action.response.responseText);

                    if (resp.data.length > 0) {
                        // addstudent returns student model with Id so we can re-load model into form so form will have isDirty false
                        patient.set(resp.data[0]);
                        patientForm.loadRecord(patient);
                    }

                    Ext.Msg.alert('Status', 'Saved successfully.');
                } catch (ex) {
                    Ext.Msg.alert('Status', 'Exception: ' + ex.Message);

                }
            },
            failure: function (form, action) {
                if (action.failureType === Ext.form.action.Action.CLIENT_INVALID) {
                    Ext.Msg.alert('CLIENT_INVALID', 'Something has been missed. Please check and try again.');
                }
                if (action.failureType === Ext.form.action.Action.CONNECT_FAILURE) {
                    Ext.Msg.alert('CONNECT_FAILURE', 'Status: ' + action.response.status + ': ' + action.response.statusText);
                }
                if (action.failureType === Ext.form.action.Action.SERVER_INVALID) {
                    Ext.Msg.alert('SERVER_INVALID', action.result.message);
                }
            }
        });
    },
    onDeleteClick: function (sender, record) {
        var me = this,
            patientForm = me.getView();

        if (!patientForm.getValues(false, false, false, true).Id) {
            Ext.Msg.alert('Status', 'Invalid or No data to delete.');
            return;
        }

        var student = Ext.create('Pat.model.Patients'),
            data;

        patient.set(patientForm.getValues());
        data = patient.getData();

        Ext.Msg.show({
            title: 'Delete',
            msg: 'Do you want to delete this record? ',
            width: 300,
            closable: false,
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (buttonValue, inputText, showConfig) {
                if (buttonValue === 'yes') {

                    patientForm.submit({
                        url: '/api/patient',
                        method: 'DELETE',
                        clientValidation: true,
                        waitMsg: 'Deleting..',
                        headers: {
                            'Content-Type': 'application/json'
                        },

                        success: function (form, action) {
                            try {
                                var resp = Ext.decode(action.response.responseText);
                                patientForm.clearForm();

                                Ext.Msg.alert('Success', resp.message);
                            } catch (ex) {
                                Ext.Msg.alert('Status', 'Exception: ' + ex.Message);

                            }
                        },
                        failure: function (form, action) {
                            if (action.failureType === Ext.form.action.Action.CLIENT_INVALID) {
                                Ext.Msg.alert('CLIENT_INVALID', 'Something has been missed. Please check and try again.');
                            }
                            if (action.failureType === Ext.form.action.Action.CONNECT_FAILURE) {
                                Ext.Msg.alert('CONNECT_FAILURE', 'Status: ' + action.response.status + ': ' + action.response.statusText);
                            }
                            if (action.failureType === Ext.form.action.Action.SERVER_INVALID) {
                                Ext.Msg.alert('SERVER_INVALID', action.result.message);
                            }
                        }
                    });
                }
            }

        });
    },
    onResetClick: function (sender, record) {
        this.getView().getForm().reset();
    },
    onClearClick: function (sender, record) {
        this.getView().clearForm();
    },

});

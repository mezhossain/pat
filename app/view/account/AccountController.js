Ext.define('Pat.view.account.AccountController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.account',



    onSaveClick: function (sender, record) {
        var accountForm = this.getView().getForm();

        if (!accountForm.isDirty()) {
            Ext.Msg.alert('Status', 'No pending changes to save.');
            return;
        } else if (!accountForm.isValid()) {
            Ext.Msg.alert('Status', 'Invalid data.');
            return;
        }

        accountForm.submit({
            url: '/api/patient',
            waitMsg: 'Updating..',
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            clientValidation: true,
            success: function (form, action) {
                try {
                    var account = Ext.create('Pat.model.Account');
                    var resp = Ext.decode(action.response.responseText);

                    if (resp.data.length > 0) {
                        // addstudent returns student model with Id so we can re-load model into form so form will have isDirty false
                        account.set(resp.data[0]);
                        accountForm.loadRecord(account);
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

    onClearClick: function (sender, record) {
        this.getView().clearForm();
    },

});

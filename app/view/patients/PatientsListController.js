Ext.define('Pat.view.patients.PatientsListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.patient-list',

    onAddClick: function (sender, record) {

        var patientStore = this.getViewModel().getStore('PatientsListStore');

        var patientModel = Ext.create('Pat.model.Patients');
        patientModel.set("ID", "0");
        patientModel.set("name", "New Patient");
        patientModel.set("date", "");
        patientModel.set("time", "");
        patientModel.set("phone", "");
        patientModel.set("email", "");

        patientStore.insert(0, patientModel);

        var patientGrid = this.getView();
        patientGrid.editingPlugin.startEdit(patientModel, 1);

    },

    onLoadClick: function (sender, record) {
        var patientStore = this.getView().getStore();
        patientStore.load();
    },

    onRemoveClick: function (sender, record) {
        var patientGrid = this.getView();
        var patientStore = patientGrid.getStore();

        //delete selected rows if selModel is checkboxmodel
        var selectedRows = patientGrid.getSelectionModel().getSelection();

        patientStore.remove(selectedRows);
    },

    onSelectionChange: function (sender, record, isSelected) {
        var removeBtn = this.lookupReference('btnRemovePatient');
        if (record.length)
            removeBtn.setDisabled(false);
        else
            removeBtn.setDisabled(true);
    }
});

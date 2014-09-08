Template.departments.events({
    'click #btnAddNew' : function(e){
        e.preventDefault();
        var form = Blaze.toHTML(Template.department_Form);
        var dlg = new BootstrapDialog({
            'title' : 'Thêm mới Bộ Phận - Phòng Ban',
            'message' : form,
            nl2br: false,
            cssClass : 'department_Form',
            buttons : getDialogButton_save_close()
        });
        dlg.realize();
        dlg.open();
        var btnSave = dlg.getButton('btnDlg_Save');
        btnSave.click(function(){
            dlg.close();
            var txtDepartmentName = $('#txtDepartmentName').val();

        })
    }
})
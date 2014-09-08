/*
Template.SideMenu.rendered = function(){
    $.Metro.initDropdowns("#SideMenu");
};

Template.TopMenu.rendered = function(){
    $.Metro.initDropdowns("#TopMenu");
}

Template.defaultLayout.helpers({
   'breadcrumbs' : function(){
       var routeName = Router.current().route.name;
       return 'breadcrumbs_'+routeName;
   }
});*/

Template.defaultLayout.rendered = function(){
    $(document).ready(function(){
        $(window).bind("load resize", function() {
            topOffset = 50;
            width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
            if (width < 768) {
                $('div.navbar-collapse').addClass('collapse')
                topOffset = 100; // 2-row-menu
            } else {
                $('div.navbar-collapse').removeClass('collapse')
            }

            height = (this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height;
            height = height - topOffset;
            if (height < 1) height = 1;
            if (height > topOffset) {
                $("#page-wrapper").css("min-height", (height) + "px");
            }
        })
    })
}

Template.SideMenu.rendered = function(){
    $('#side-menu').metisMenu();
};

getDialogButton_save_close = function(){
    return [
        {
            id : 'btnDlg_Save',
            label : ' Lưu lại',
            icon : 'fa fa-floppy-o',
            cssClass : 'btn btn-primary'
        },
        {
            label : ' Đóng',
            icon : 'fa fa-power-off',
            cssClass : 'btn btn-danger',
            action : function(dlg){
                dlg.close();
            }
        }
    ]
};
getConfirmButtons = function(Yes,No){
    if(Yes === undefined) Yes = 'Có';
    if(No === undefined) No = 'Không';
    return [
        {
            id : 'btnConfirm_Yes',
            label : Yes,
            icon : 'fa fa-floppy-o',
            cssClass : 'btn btn-primary'
        },
        {
            label : No,
            icon : 'fa fa-power-off',
            cssClass : 'btn btn-danger',
            action : function(dlg){
                dlg.close();
            }
        }
    ]
};
getNormalDialogButton = function(){
    return [{
        label : 'Đóng',
        icon : 'fa fa-power-off',
        cssClass : 'btn btn-danger',
        action : function(dlg){
            dlg.close();
        }
    }]
};
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
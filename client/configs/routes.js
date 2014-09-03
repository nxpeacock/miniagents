Router.configure({
    layoutTemplate: 'defaultLayout',
    notFoundTemplate: 'notFound',
    yieldTemplates : {
        'SideMenu' : {to : 'SideMenu'},
        'TopMenu' : {to : 'TopMenu'}
    }
});

Router.map(function(){
    this.route('home',{
        path : '/'
    });
    this.route('visitor',{
        path : '/khach-vieng-tham'
    });
    this.route('history',{
        path : '/lich-su-chat'
    });
    this.route('agents',{
        path : '/nhan-vien'
    });
    this.route('agents_addNew',{
        path : '/nhan-vien/them'
    });
    this.route('departments',{
        path : '/nhan-vien/phong-ban'
    });
    this.route('reports',{
        path : '/bao-cao'
    });
    this.route('configs',{
        path : '/cau-hinh'
    });
})
Router.configure({
    layoutTemplate: 'defaultLayout',
    notFoundTemplate: 'notFound',
    yieldTemplates : {
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
    })
})
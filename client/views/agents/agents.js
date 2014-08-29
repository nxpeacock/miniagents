Template.agents.events({
    'click #btnAddUser' : function(e){
        e.preventDefault();
        Router.go('agents_addNew');
    }
});

Template.agents_addNew.events({
    'click #btnBack' : function(e){
        e.preventDefault();
        Router.go('agents');
    }
})
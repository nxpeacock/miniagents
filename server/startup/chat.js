visitorChat = new Meteor.Stream('visitorChat');

visitorChat.permissions.write(function(){
    return true;
});

visitorChat.permissions.read(function(){
    return true;
});

agentChat = new Meteor.Stream('agentChat');

agentChat.permissions.write(function(){return true;});
agentChat.permissions.read(function(){return true;});

visitorChat.addFilter(function(eventName, args) {
    if(this.userId) {
        var user = Meteor.users.findOne(this.userId);
        return [args[0], user.username];
    } else {
        return args;
    }
});

agentChat.addFilter(function(eventName, args) {
    if(this.userId) {
        var user = Meteor.users.findOne(this.userId);
        return [args[0], user.username];
    } else {
        return args;
    }
});
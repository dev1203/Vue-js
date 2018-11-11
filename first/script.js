
new Vue({ //Creating a new Vue object
    el : '#app',    // Element we need to manupulate    
    data : {
        title : 'Test Data' ,
        link : 'http://www.whodev.info',
        finishedlink : `<a href ="https://www.google.com">google</a>`
    },
    methods : {
        changeTitle : function(event){  //All the methods added in the html
            this.title = event.target.value
        },
        sayHello : function () {
            this.title = 'hahah'
            return this.title;
        }
    }
})
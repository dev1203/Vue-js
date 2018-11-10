new Vue({
    el : '#app',
    data : {
        title : 'Test Data'
    },
    methods : {
        changeTitle : function(event){
            this.title = event.target.value
        }
    }
})
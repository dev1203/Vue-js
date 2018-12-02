new Vue({
    el: '#app',
    data :{
        counter : 0
    },
    computed : {
        calculated : function(){
            console.log(
                'here'
            );
            return this.counter <=5 ? 'less than 5' : 'more than 5'; 
        }
    },
    methods : {
        result : function(){
            return this.counter <=5 ? 'less than 5' : 'more than 5';
        }
    }

});
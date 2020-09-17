new Vue({
    el: '#app',
    data: {
        year: 2020 
    },
    methods: {
        plus(){
            this.year++;
        },
        minus() {
            this.year--;
        },
        submit() {
            alert('what');
            console.log('hello');
        }
       }        
});
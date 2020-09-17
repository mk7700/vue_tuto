new Vue({
    el: '#app',
    data: {
        year: 2020,
        text: 'text'
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
        },
        // updateText(event) {
        //     this.text = event.target.value;
        // }
       }        
});
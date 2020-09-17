new Vue({
    el: '#app',
    data: {
        message: 'Hello'
    },
    methods: {
        changeMessage() {
            this.message= 'coding';
        }
        
    },
    computed: {
        reversedMessage() {
            return this.message.split('').reverse().join('');
        }
    }
});
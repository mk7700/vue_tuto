new Vue({
    el: '#app',
    data: {
        person: {
            name: 'vue_tuto',
            age: 27
        }        
    },
    methods: {
        nextYear(greeting) {
            return greeting + '! ' + this.person.name + '는 내년에' + (this.person.age + 1) + '살 이됩니다.';
        },
        otherMethod: function() {
            this.nextYear();
        }
    }
});
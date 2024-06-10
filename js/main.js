const App = Vue.createApp({
    data() {
        return {
            first: '',
            second: '',
            operation: '',
            answer: 0,
        }
    },
    methods: {
        showAnswer() {
            if (this.operation.length = 1) {
                switch (this.operation) {
                    case '+':
                        this.answer = this.first + this.second
                        break
                    case '-':
                        this.answer = this.first - this.second
                        break
                    case '*':
                        this.answer = this.first * this.second
                        break
                    case '/':
                        this.answer = this.first / this.second
                        break
                    default:
                        this.answer = ''
                        this.response = "Enter valid operation"
                        break
                }
            } else {
                this.response = "Enter a valid operation"
            }
        }
    }
})
App.mount('#app')
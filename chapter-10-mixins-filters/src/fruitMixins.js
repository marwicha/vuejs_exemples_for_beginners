export const fruitMixins = {
        data() {
            return {
                text: "hello world",
                fruits: ['Apple', 'Bananas', 'Mango', "Melon"],
                filterText: ''
            }
        },

        computed: {
            filteredFruits() {
                return this.fruits.filter((element) => {

                    return element.match(this.filterText)

                })
            }
        }

};
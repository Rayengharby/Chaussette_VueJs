
// const product = "Chaussettes";

const app = Vue.createApp({
    data: function () {
        return {
            cart: 0,
            premium :true
        }
    },
    methods: {
        addtocart(){
            this.cart+=1;
        },
        removetocart(){
            this.cart-=1;
        }
        
    },
    computed: {
        
    }
});


// app.component("mybutton", {
//     template: `
//         <button class="button">Calculer</button>
//     `
// })




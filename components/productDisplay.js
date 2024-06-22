app.component ("product-display", {
    props:{
        premium:{
            type : Boolean,
            required: true,
        }
    
    },
     data () {
        return {
            product: 'Chaussettes' ,
            brand : 'Adidas',
            onsale:true,
            //image: './assets/images/socks_blue.jpg',
           // instock: true,
           selectedvariant:0,
            url:'https://vuejs.org/guide/quick-start.html',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, est? Recusandae eveniet magnam alias dignissimos.',
           inventory:5,
           onsale:true,
           details : ['50%coton' , '30% laine', '20% polyster'],
           variants:[ 
            {id: 2001 , color:"blue" , image:"./assets/images/socks_blue.jpg", quantity:50},
            {id: 2002 , color:"green" , image:"./assets/images/socks_green.jpg" , quantity:0},
           ],
           sizes:['37','38','39','40'],
           reviews:[],
        }
     },
     template : /*html*/
     ` 
     <div class="product-display">
            <div class="product-container">
               <div class="product-image">
                  <img :src="instock? image :'assets/images/out-of-stock-img.png'" alt="">
               </div>
               <div class="product-info">
           <h1>{{ product.toUpperCase() }}</h1>
           <p> {{ description}}</p>
           <a v-bind:href="url">Vue Js</a>
           <h2> {{ title }} </h2>
           <p> {{sale}}</p>
           <p v-if="inventory > 10 "> En stock</p>
           <p v-else-if="inventory <=10 && inventory >0 "> Presque épuisé </p> 
           <p v-else> En repture de stock </p>
           <p>  Expédtition : {{ shipping }}</p>
           <p v-if ="onsale"> En Vente</p>
           <ul>
             <li v-for="detail in details "> {{detail}}</li>
           </ul>
           <div v-for =" ( variant , index ) in variants"
            @mouseover="updatevariant(index)" 
            class=" color-circle"
            :style="{'background-color': variant.color}"> 
             </div>
             <label for=""> Choose a pointure </label>
              <select>
               <option v-for ="size in sizes"> {{ size }}</option>
               </select>
             <button class="button" v-on:click="addtocart"
                 :class =" {disabledButton : !instock} "
                  :disabled ="!instock"> Add To Cart </button>
              <button class="buttonn" @click="removetocart"> Remove To Cart </button>
    
               </div>
             </div>
             <reviewlist v-if="reviews.length" :reviews="reviews"></reviewlist>
             <review-form @review-submitted="addreview"></review-form>
           </div>
     `,
     methods :{
        addtocart() {
           // this.cart+=1;
           this.$emit('add-to-cart');
        },
        removetocart() {
             this.$emit('remove-to-cart');
        },
        updatevariant(index){
            this.selectedvariant=index;
            console.log(index);
        },
       // updateimage (args){
         //   this.image=args;
      //  }
      addreview(review){
        this.reviews.push(review);
        console.log(this.reviews);

      }
     },
     computed : {
        title() {
            return this.brand + " " + this.product ;
        },
        //image: './assets/images/socks_blue.jpg',
        image(){
        return this.variants[this.selectedvariant].image;
        },
        instock(){
            return this.variants[this.selectedvariant].quantity;
        },
        sale(){
            if (this.onsale=true){
                return this.brand + " " + this.product + " est en vente" ;
            }
            return '';
            
    
        },
        shipping(){
           return this. premium ? "Grtauit" : "8DT"
        }
     },
    })
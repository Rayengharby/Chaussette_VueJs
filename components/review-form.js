app.component ("review-form", {
     data () {
        return {
           name:'' ,
           review:'' ,
           rating: null ,
           recommended :null,
        }
     },
     template : 
     /* html */
     ` 
     <form class="review-form" @submit.prevent="onsubmitreview">
  <h3> Laisser un commentaire </h3>
  <label for="name"> Name </label>
  <input type="text" id="name" v-model="name">
  <label for="review"> Commentaire</label>
  <textarea id="review" v-model="review"></textarea>
  <label for="rating"> Evaluation </label>
  <select id="rating" v-model="rating">
    <option>5</option>
    <option>4</option>
    <option>3</option>
    <option>2</option>
    <option>1</option>
  </select>

  <label for="recommended"> Recommenderiez-vous ce produit ! </label>
  <select id="recommended" v-model="recommended">
    <option>YES</option>
    <option>NO</option>
  </select>
  <input type="submit" class="button" value=" Envoyer">
</form>
     `,
     methods :{
        onsubmitreview(){
            if ( this.name === '' || this.review === ''|| this.rating === null || this.recommended === null ){
                alert('Commantaire insomplet ! SVP remplissez les champs.')
                return;
            }
            let productreview = {
                name :this.name,
                review: this.review ,
                rating:this.rating,
                recommended:this.recommended,
            }
          this.$emit('review-submitted',productreview);
           this.name='';
           this.review='';
           this.rating='';
           this.recommended='';
        }
        },
     
    })
app.component ("reviewlist", {
    props: {
        reviews:{
        type: Array,
        required: true
      }
    },
    template : 
    /* html */
    ` 
        <div class="review-container"> 
        <h3> Commantaire </h3>
        <ul>
        <li v-for ="review in reviews"> 
        <strong> {{review.name }} </strong> a donné {{ review.rating}} étoiles
         <br/>
         "{{review.review}}"
         <br/>
         recommended : {{ review.recommended}}
            </li>
        </ul>
        </div>
    `,

    
   })
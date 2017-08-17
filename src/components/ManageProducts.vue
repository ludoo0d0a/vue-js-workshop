<template>
  <section>
    <save-product-form
      :product="productInForm"
      v-on:submit="onFormSave"
      v-on:cancel="resetProductInForm"
    ></save-product-form>
    <product-list :products="products" 
    v-on:edit="onEditClicked"
    v-on:remove="onRemoveClicked"
    ></product-list>
  </section>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

import uuid from 'uuid';
import ProductList from './ProductList'
import SaveProductForm from './SaveProductForm'

const initialData = () => {
  return {
    productInForm: {
      id: null,
      name: '',
      description: '',
      price: null
    }
  }
}

export default {
  computed: mapGetters({
    products: 'getProducts'
  }),
  components: {
    ProductList,
    SaveProductForm
  },
  data: initialData,
  methods: {
    ...mapActions([
      'saveProduct',
      'deleteProduct'
    ]),
    onFormSave(product) {
      this.saveProduct(product);

      this.resetProductInForm();
    },
    onFormSave(productData) {
      console.log('productData', JSON.stringify(productData));
    },
    // onFormSave(product) {
    //   // Generate an id using the third-party lib 'uuid'
    //   product.id = uuid.v4();
    //   // add it to the product list
    //   this.products.push(product);
    //   // reset the form
    //   this.resetProductInForm();
    // },
    // onFormSave(product) {
    //   const index = this.products.findIndex((p) => p.id === product.id);

    //   // update product if it exists or create it if it doesn't
    //   if (index !== -1) {
    //     // We need to replace the array entirely so that vue can recognize
    //     // the change and re-render entirely.
    //     // See http://vuejs.org/guide/list.html#Caveats
    //     this.products.splice(index, 1, product)
    //   } else {
    //     product.id = uuid.v4();
    //     this.products.push(product);
    //   }

    //   this.resetProductInForm();
    // },
    resetProductInForm() {
      this.productInForm = initialData().productInForm;
    },
    onEditClicked(product) {
      // since objects are passed by reference we need to clone the product
      // either by using Object.assign({}, product) or by using object
      // spread like we do here.
      this.productInForm = { ...product };
    },
    
    // onRemoveClicked(product) {
    //   const index = this.products.findIndex((p) => p.id === product.id);
 
    //   this.products.splice(index, 1);

    //   if (product.id === this.productInForm.id) {
    //     this.resetProductInForm();
    //   }
    // },
    onRemoveClicked(product) {
      this.deleteProduct(product);

      if (product.id === this.productInForm.id) {
        this.resetProductInForm();
      }
    }
  }
}
</script>
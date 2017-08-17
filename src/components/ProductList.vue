<template>
  <table class="table table-hover product-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" track-by="id" v-on:click.prevent="onEdit(product)">
        <td>{{product.name}}</td>
        <td>{{product.description}}</td>
        <td>{{product.price}}:-</td>
        <td><a href="#" v-on:click.prevent.stop="onRemove(product)">remove</a></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['products'],
  methods: {
    onEdit(product) {
      this.$emit('edit', product)
    },
    onRemove(product) {
      this.$emit('remove', product)
    }
  }
 
}
</script>

<style scoped>
.header {
  font-size: 4rem;
}
</style>
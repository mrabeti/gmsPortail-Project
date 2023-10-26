<template>
  <v-list-group :value="isOpen">
    <template v-slot:activator="{ props }">
      <v-list-item
        v-bind="props"
        :prepend-icon="icon"
        :title="name"></v-list-item>
    </template>

    <v-list density="compact" nav>
      <slot></slot>
    </v-list>
  </v-list-group>
</template>
<script>
export default {
  props: ["name", "icon", "isOpen"],
};
</script>
<style scoped>
.v-list-group--open {
  background-color: #151d2b;
}
</style>

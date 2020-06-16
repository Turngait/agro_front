<template>
  <div>
    <textarea v-model="val" @keyup="onChange" class="txtareaPopup" :placeholder="title + '...'"></textarea>
  </div>
</template>

<script>
  export default {
    name: 'TextAreaPopup',
    data () {
      return {
        val: ''
      }
    },
    props: {
      title: String
    },
    methods: {
      onChange() {
        this.$emit('modelChange', this.val)
      }
    }
  }
</script>

<style lang="scss" scoped>
.txtareaPopup {
  margin-bottom: 1vh;
  border: none;
  border-radius: 3px;
  min-width: 20vw;
  min-height: 10vh;
  padding: 0.7vh 1vw;
  font-size: 1.3rem;

  &:focus {
    outline: none;
  }
}
</style>
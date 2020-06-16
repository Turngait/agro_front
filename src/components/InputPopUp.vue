<template>
  <div>
    <input v-model="val" @keyup="onChange" :type="inputType" class="inputPopUp" :placeholder="title + '...'"/>
  </div>
</template>

<script>
  export default {
    name:'InputPopUp',
    data () {
      return {
        val: ''
      }
    },
    props: {
      title: String,
      inputType: {
        type: String,
        default: 'text'
      },
      model: {
        type: String,
        default: ''
      }
    },
    methods: {
      onChange() {
        this.$emit('modelChange', this.val)
      }
    }
  }
</script>

<style lang="scss" scoped>
.inputPopUp {
  margin-bottom: 1vh;
  margin-bottom: 1vh;
  border: none;
  border-radius: 3px;
  min-width: 15vw;
  padding: 0.3vh 1vw;
  font-size: 1.3rem;

  &:focus {
    outline: none;
  }
}
</style>
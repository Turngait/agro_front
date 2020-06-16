<template>
  <div class="dict_box">
    <h3>Справочник</h3>
  </div>
</template>

<script>
  export default {
    name: 'Dict',
    methods: {
      testFile() {
        const formData = new FormData();
        const fileField = document.querySelector('input[type="file"]');

        formData.append('username', 'abc123');
        formData.append('avatar', fileField.files[0]);

        fetch('http://localhost:5000/testFile', {
          method: 'POST',
          body: formData
        })
        .then(res => {
          if (res.status === 202) {
            return res.json()
          } else {
            return null
          }
        })
        .then(data => {
          if (data) {
            console.log(data.data)
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .dict_box {
    border: 1px solid rgba(0, 0, 0, 0.5);
    background: rgba(169, 232, 159, 0.5);
    border-radius: 3px;
  }
</style>
<template>
    <PopUp>
      <i @click="closeAddCulture" class="fas fa-times close"></i>
      <h2 class="addCulture__header">Добавить культуру</h2>
      <form class="addCulture__box">
        <p class="addCulture__box__descr">
          Здесь Вы можете добавить новую культуру в справочник.
        </p>
        <div class="addCulture__box__flex">
          <InputPopUp @modelChange="setTitle" title="Название культуры*"/>
      
          <label>
            Фотография культуры
            <InputPopUp inputType='file'/>
          </label>
        </div>

        <TextAreaPopup @modelChange="setDescr" title="Описание культуры" />

        <p class="addCulture__box__descr">
          Допольнительные не обязательные к заполнению данные.
        </p>
        <div class="addCulture__box__flex">
          <InputPopUp @modelChange="setTitle" title="Освещение"/>
          <InputPopUp @modelChange="setTitle" title="Тип почвы"/>
        </div>

        <div class="addCulture__box__flex">
          <InputPopUp @modelChange="setTitle" title="Полив"/>
          <InputPopUp @modelChange="setTitle" title="Удобрения"/>
        </div>

        <div class="addCulture__box__flex">
          <InputPopUp @modelChange="setTitle" title="Вредители"/>
          <InputPopUp @modelChange="setTitle" title="С кем лучше не сажать"/>
        </div>

        <Button2 title='Добавить' :onClick='addCulture'/>
      </form>
    </PopUp>
</template>

<script>
  import PopUp from '../../../components/Popup'
  import InputPopUp from '../../../components/InputPopUp'
  import Button2 from '../../../components/Button2'
  import TextAreaPopup from '../../../components/TextAreaPopup'

  export default {
    name: 'AddCulture',
    data () {
      return {
        title: '',
        descr: '',
        ligth: '',
        soil: '',
        watering: '',
        fertilizer: '',
        petst: '',
        notPlantedWith: ''
      }
    },
    components: {
      PopUp,
      InputPopUp,
      Button2,
      TextAreaPopup
    },
    methods: {
      addCulture () {
        console.log(this.title)
      },
      closeAddCulture () {
        this.$store.commit('managment/changeIsAddCulturalopen', false)
      },
      setTitle(newTitle) {
        this.title = newTitle
      },
      setDescr(newDescr) {
        this.descr = newDescr
      }
    },
  }
</script>

<style lang="scss" scoped>
.addCulture {
  &__header {
    font-size: 1.6rem;
    font-weight: bold;
    color:#fff;
  }

  &__box {
    margin-top: 2vh;
    color:#fff;
    font-size: 1.2rem;

    &__flex {
      display: flex;
      justify-content: space-between;
    }

    &__descr {
      text-align: left;
      margin-bottom: 2vh;
      font-size: 1.4rem;
    }
  }
}

.close {
  float: right;
  color:#fff;
  font-size: 1.4rem;
  cursor: pointer;
}
</style>
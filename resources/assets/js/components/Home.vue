<template>
  <div class="hello">
    <div v-if="childDetails" class="container-fluid">
      <child-details @setCalories="setCalories"></child-details>
    </div>
    <div v-if="calories" class="container-fluid">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-md-offset-3">
          <nutrient-table @returnToChild="returnToChild" :calories="calories" :childSex="childSex" :childAge="childAge"></nutrient-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import male from '../dataMale'
import female from '../dataFemale'
import ChildDetails from './ChildDetails'
import NutrientTable from './NutrientTable'

export default {
  name: 'home',
  components: {
    ChildDetails,
    NutrientTable
  },
  data () {
    return {
      childDetails: true,
      childSex: '',
      childAge: '',
      childWeight: '',
      childActivity: '',
      maleCalories: male,
      femaleCalories: female,
      calories: ''
    }
  },
  methods: {
    setCalories: function(childSex, childAge, childActivity) {
      this.childSex = childSex;
      this.childAge = childAge;
      this.childActivity = childActivity;
      this.childDetails = false;

      if (this.childSex == 'male') {
        this.calories = this.maleCalories[this.childAge][this.childActivity];
      }
      this.calories = this.femaleCalories[this.childAge][this.childActivity];
    },
    returnToChild: function() {
      this.calories = '';
      this.childDetails = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
th {
  text-align: center;
}
</style>

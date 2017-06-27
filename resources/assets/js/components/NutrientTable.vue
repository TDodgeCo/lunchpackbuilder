<template lang="html">
  <div>
    <table class="table table-striped table-bordered table-responsive table-hover">
      <thead>
        <tr>
          <td>Gender</td>
          <td>Age</td>
          <td>Rec. Calories/Day</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{childSex | capitalize}}</td>
          <td>{{childAge | capitalize}}</td>
          <td>{{calories}}</td>
        </tr>
      </tbody>
    </table>
    <h3>Suggested Nutrional Distribution (Calories)</h3>
    <table class="table table-striped table-bordered table-responsive table-hover">
      <thead>
        <tr>
          <td>Carbohydrates</td>
          <td>Fats</td>
          <td>Proteins</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{calories * .45}} to {{calories * .65}}</td>
          <td>{{calories * .2}} to {{calories * .35}}</td>
          <td>{{calories * .1}} to {{calories * .35}}</td>
        </tr>
        <tr>
          <td>
              <canvas id="carbChart"></canvas>
          </td>
          <td>
            <canvas id="fatChart"></canvas>
          </td>
          <td>
            <canvas id="proteinChart"></canvas>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="returnToChild" type="button" class="btn btn-primary btn-block">Go Back</button>
  </div>
</template>

<script>
import Chart from 'chart.js'

export default {
  props: ['calories', 'childSex', 'childAge'],
  data() {
    return {
    }
  },
  filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  mounted() {
    this.nutrientCharts();
  },
  computed: {
    nutrientCharts: function() {
      let calories = this.calories;

      let carbCtx = document.getElementById('carbChart').getContext('2d');
      let fatCtx = document.getElementById('fatChart').getContext('2d');
      let proteinCtx = document.getElementById('proteinChart').getContext('2d');

      let carbChart = new Chart(carbCtx, {
        type: 'doughnut',
        data: {
          labels: ['Too Much', 'Good', 'Low'],
          datasets: [{
            label: 'carbs',
            data: [calories * 1, calories * .65, calories * .45],
            backgroundColor: ['red', 'blue', 'orange']
          }]
        }
      });
      let fatChart = new Chart(fatCtx, {
        type: 'doughnut',
        data: {
          labels: ['Too Much', 'Good', 'Low'],
          datasets: [{
            label: 'fats',
            data: [ calories * 1, calories * .35, calories * .2],
            backgroundColor: ['red', 'blue', 'orange']
          }]
        }
      });
      let proteinChart = new Chart(proteinCtx, {
        type: 'doughnut',
        data: {
          labels: ['Too Much', 'Good', 'Low'],
          datasets: [{
            label: 'protein',
            data: [ calories * 1, calories * .35, calories * .1],
            backgroundColor: ['red', 'blue', 'orange']
          }]
        }
      });
    }
  },
  methods: {
    returnToChild: function() {
      this.$emit('returnToChild');
    }
  }
}
</script>

<style lang="css" scoped>
</style>

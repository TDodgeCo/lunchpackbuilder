<template lang="html">
  <div>
    <div class="row">
      <div class="col-sm-12 col-md-6 col-md-offset-3">
        <h1 align="center">What's the gender of your child?</h1>
        <div class="m-t-35">
          <select v-model="childSex" class="form-control">
            <option selected value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-6 col-md-offset-3">
        <h1 align="center">How old is your child?</h1>
        <select v-model="childAge" class="form-control">
          <option selected value="two">2</option>
          <option value="three">3</option>
          <option value="four">4</option>
          <option value="five">5</option>
          <option value="six">6</option>
          <option value="seven">7</option>
          <option value="eight">8</option>
          <option value="nine">9</option>
          <option value="ten">10</option>
          <option value="eleven">11</option>
          <option value="twelve">12</option>
          <option value="thirteen">13</option>
          <option value="fourteen">14</option>
          <option value="fifteen">15</option>
          <option value="sixteen">16</option>
          <option value="seventeen">17</option>
          <option value="eighteen">18</option>
        </select>
        <h1>How active is your child?</h1>
        <select v-model="childActivity" class="form-control">
          <option selected value="sedentary">Sedentary</option>
          <option value="moderate">Moderate</option>
          <option value="active">Active</option>
        </select>
        <button @click="setCalories" type="button" class="btn btn-primary btn-block m-t-25">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChildDetails',
  data() {
    return {
      childSex: '',
      childAge: '',
      childActivity: ''
    }
  },
  methods: {
    setCalories: function() {
      this.$emit('setCalories', this.childSex, this.childAge, this.childActivity);
    }
  }
}
</script>

<style lang="css">
</style>

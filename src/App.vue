<template>
  <div id="app">
    <p>{{ tasks }}</p>
    <p>{{ testing }}</p>

    <!-- <button class="create" @click="newTesting">Update State Testing</button>
    <button class="create" @click="newTask">Create Task to Firebase</button>
 -->
    <router-view/>
  </div>
</template>

<script>
// import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  name: 'app',
  data() {
    return {
      // filteredTask : []
    }
  },

  methods: {

    // newTesting() {
    //   this.setTesting('New TEST');
    // },

    // newTask() {
    //   this.setQty(1)
    // },

    // getFilteredTask(status){
    //   // this.filteredTask = this.getTasksByStatus(status)
    // }
  },

  computed: {
    // ...mapState([
    //   'tasks',
    //   'testing'
    // ])
  },

  created() {
    // this.getTasks();
    // this.getTesting();
  }
}
</script>

<style>
#app {

}
</style>

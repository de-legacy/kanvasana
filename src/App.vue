<template>
  <div id="app">
    <MainHeader></MainHeader>

    <router-view/>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader'

export default {
  name: 'app',
  data() {
    return {
    }
  },
  components: {
    MainHeader
  }
}
</script>

<style>
#app {

}

.flex-row {
  display: flex;
  flex-wrap: nowrap;
  /* justify-content: center; */
  align-items: center;
}

.col-8 {
  width: 80%;
}

.col-2 {
  width: 20%;
}

.main-header {
  padding: 2rem 0;
  margin-bottom: 2rem;
  background: teal;
}

.main-header a {
  color:  #fafafa;
}

.main-header a:hover {
  text-decoration: none;
  color:  gold;
}

.site-title {
  margin: 0;
}

.u-full-width {
  width: 100%;
}

.modal-content {
  padding: 1rem 2rem;
}

.modal-title {
  margin-bottom: 1rem;
}

.input-group {
  margin-bottom: 2rem;
}

</style>

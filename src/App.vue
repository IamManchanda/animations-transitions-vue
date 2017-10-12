<template>
  <div class="grid-container margin-top-2">
    <div class="grid-x grid-margin-x">
      <div class="cell medium-8 medium-offset-2">
        <h1>Animations &amp; Transitions</h1>
        <p>Dynamic Components</p>
        <hr> 
        <button class="button primary" @click="selectedComponent == 'app-primary-callout' ? selectedComponent = 'app-alert-callout' : selectedComponent = 'app-primary-callout'">Toggle Components</button>
        <transition name="slide" mode="out-in" type="animation" appear>
          <component :is="selectedComponent"></component>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import AppPrimaryCallout from './components/AppPrimaryCallout.vue';
  import AppAlertCallout from './components/AppAlertCallout.vue';

  export default {
    data () {
      return {
        show: true,
        calloutAnimation: 'bounce',
        selectedComponent: 'app-primary-callout'
      };
    },
    components: {
      AppPrimaryCallout, AppAlertCallout
    }
  };
</script>

<style lang="scss" src="./App.scss"></style>

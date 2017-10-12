<template>
  <div class="grid-container margin-top-2">
    <div class="grid-x grid-margin-x">
      <div class="cell medium-8 medium-offset-2">
        <h1>Animations &amp; Transitions</h1>
        <hr> 
        <button class="button primary" @click="show = !show">Toggle Info</button>
        <transition mode="out-in" enter-class="" enter-active-class="animated bounceInLeft" leave-class="" leave-active-class="animated bounceOutRight" appear>
          <div class="callout primary" key="primary" v-if="show">
            <h5>This is the Primary Information</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat earum aliquid, incidunt nulla harum voluptates sequi, repellat explicabo, veritatis ipsam aliquam minima! Corporis debitis placeat saepe asperiores, voluptatibus omnis. In.</p>
            <button class="close-button" aria-label="Dismiss alert" type="button" @click="show = false">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="callout alert" key="alert" v-else>
            <h5>This is an Alert Information</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat earum aliquid, incidunt nulla harum voluptates sequi, repellat explicabo, veritatis ipsam aliquam minima! Corporis debitis placeat saepe asperiores, voluptatibus omnis. In.</p>
            <button class="close-button" aria-label="Dismiss alert" type="button" @click="show = true">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        show: true,
        calloutAnimation: 'bounce'
      };
    }
  };
</script>

<style lang="scss"></style>

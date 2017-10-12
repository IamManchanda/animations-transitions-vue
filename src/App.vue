<template>
  <div class="grid-container margin-top-2">
    <div class="grid-x grid-margin-x">
      <div class="cell medium-8 medium-offset-2">
        <h1>Animations &amp; Transitions</h1>
        <p>Transition Group</p>
        <hr> 
        <button class="button primary" @click="addItem">Add Item</button>
        <div class="callout warning border-none">
          Click on an item to delete it.
        </div>
        <ul class="list-group">
          <transition-group name="slide">
            <li class="list-group-item" v-for="(number, index) in numbers" @click="removeItem(index)" :key="number">
              Super Item
            </li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script src="./App.js"></script>

<style lang="scss" src="./App.scss"></style>
<style lang="scss" src="./ListGroup.scss"></style>

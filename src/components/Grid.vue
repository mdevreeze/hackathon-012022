<template>
<div>
  <div class="grid">
    <div class="hours-column column">
      <div v-for="hour in hours" :key="hour">
        {{hour}}
      </div>
    </div>
    <div class="day" v-for="(day, dayNum) in days" :key="dayNum">
      <div class="title">
        <h2> {{ days[dayNum] }}</h2>
      </div>
        
        <div class="column">
          <Block :block="block" @blockSelected="blockSelectedHandler" v-for="(block, blockIndex) in hourBlocks[dayNum].blocks" :key="blockIndex"></Block>
        </div>
    </div>
  </div>
  <ProjectSelector v-model="showProjectSelector"></ProjectSelector>
</div>
</template>

<script lang="ts">
import Block from "./Block.vue";
import ProjectSelector from "./ProjectSelector.vue"
import { Vue, Prop, Component } from 'vue-property-decorator'
import { IBlock } from "../IData";

@Component({components: {
  Block, ProjectSelector
}})
class Grid extends Vue {
  showProjectSelector = false;
  days = [ "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag"];
  hours = [ "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
  @Prop() private hourBlocks!: any;

  blockSelectedHandler(block: IBlock) {
    console.log(block);
  }
}

export default Grid;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
.grid {
  display: flex;
  width: 90%;
  height: 600px;
  margin: 20px;
}
.day {
  border: 2px solid gray;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
}

.day:not(:last-of-type){
  border-right-width: 0px;
 }

.column {
  display: flex;
  flex-direction: column;
}

.hours-column {
  margin-top: 80px;
  margin-right: 10px;
}

.hours-column > div{
  flex-grow: 1;
  text-align: right;
}
</style>

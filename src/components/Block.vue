<template>
<div class="card" v-bind:style="{ height: blockHeight + 'px' }" @click="selectBlock">
  <h4>{{ block.cardName }}</h4>
  <h4 v-if="block.project">Project: {{ block.project }}</h4>
</div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
import { IBlock } from "../IData";

@Component
class Block extends Vue {
  @Prop() block!: IBlock;
  
  get blockHeight(): number {
    return (this.block.to - this.block.from) * 47; //px
  }

  selectBlock() {
    console.log("click on block")
    this.$emit("blockSelected", this.block);
  }
}

export default Block;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
.card{
  border: 2px solid green;
  background: mintcream;
}
</style>

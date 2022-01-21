<template>
  <div id="app">
    <Grid :hourBlocks="fillEmptySpaces(test1Data)" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Grid from "./components/Grid.vue";
import { IBlock, WeekData } from "./IData";

@Component({
  components: {
    Grid,
  },
})
export default class App extends Vue {
  fillEmptySpaces(week: WeekData): WeekData {
    const newWeek = [];
    for (const day of week) {
      let currentDay = { ...day };
      // currentDay.blocks = (day.blocks as IBlock[]).reduce((prev, curr, currIndex, arr) => {
      //   if (prev.to !== curr.from) {
      //     const freeTime = { to: prev.to, from: curr.from} as IFreeTime;

      //   }
      // });
      newWeek.push(currentDay);
    }
    return newWeek;
  }

  private test1Data: WeekData = [
    {
      day: "maandag",
      blocks: [
        {
          id: "block1", 
          from: 9,
          to: 12,
          cardName: "Early morning mob session",
          cardUrl: "trello.nl/card1",
        },
        {
          id: "block2",
          from: 13,
          to: 17,
          cardName: "Meeting about something",
          cardUrl: "trello.nl/card2",
        },
      ] as IBlock[],
    },
    {
      day: "dinsdag",
      blocks: [
        {
          id: "block3",
          from: 9,
          to: 17,
          cardName: "Fixing the coffee machine",
          cardUrl: "trello.nl/card3",
        },
      ],
    },
    {
      day: "woensdag",
      blocks: [
        {
          id: "block5",
          from: 9,
          to: 12,
          cardName: "Brainstorm on how to bake a cake",
          cardUrl: "trello.nl/card5",
        },
        {
          id: "block6",
          from: 13,
          to: 14,
          cardName: "Estimates",
          cardUrl: "trello.nl/card6",
        },
        {
          id: "block6",
          from: 14,
          to: 17,
          cardName: "Extra go-live to fix something",
          cardUrl: "trello.nl/card6",
        },
      ],
    },
    {
      day: "donderdag",
      blocks: [
        {
          id: "block7",
          from: 9,
          to: 12,
          cardName: "More flaky tests",
          cardUrl: "trello.nl/card7",
        },
        {
          id: "block8",
          from: 13,
          to: 17,
          cardName: "Even more flaky tests",
          cardUrl: "trello.nl/card8",
        },
      ],
    },
    {
      day: "vrijdag",
      blocks: [
        {
          id: "block12",
          from: 9,
          to: 10,
          cardName: "Run web tests on IE11",
          cardUrl: "trello.nl/card9",
        },
        {
          id: "block9",
          from: 10,
          to: 12,
          cardName: "Very long sync meeting",
          cardUrl: "trello.nl/card9",
        },
        {
          id: "block10",
          from: 13,
          to: 17,
          cardName: "Hackathon where we make this tool",
          cardUrl: "trello.nl/card10",
        },
      ],
    },
  ];
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

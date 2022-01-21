<template>
<div class="wrapper">
    <div class="projectSelector">
        <select name="projects" class="projects" v-model="selectedProject" v-on:change="onProjectChanged">
            <option v-for="(project, i) in projects" :key="i" :value="project">{{project}}</option>
        </select>
    </div>
</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
class ProjectSelector extends Vue {
    projects = ["", 
    "WBSO: Intelligent UI / Telemetrie", 
    "WBSO: Multi Step API Monitoring 2.0", 
    "WBSO: Agent based private checkpoints", 
    "WBSO: Multi Step API Monitoring for IoT", 
    "WBSO: Regional Scale-out Monitoring Architecture", 
    "WBSO: Real User Monitoring 2.0", 
    "Overig development"];
    selectedProject = "";
    @Prop() private name!: string;

   private onProjectChanged() {
       
   }
}

export default ProjectSelector
</script>

<style scoped lang="css">
.wrapper {
  position: absolute;
  pointer-events: none;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;  
}
.projectSelector {
  border: 2px solid darkblue;
  background: white;
  width: 300px;
  height: 200px;
  position: relative;
  margin: auto;
  top: 75%;
}
.projects {
  margin-top: 20px;
  margin-left: 20px;
  height: 10%;
  width: 80%;
}
</style>
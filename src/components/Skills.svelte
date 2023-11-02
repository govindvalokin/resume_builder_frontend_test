<script>
    import InputBlock from "./InputBlock.svelte";
    import SkillLevelSelectComponent from "./SelectComponent.svelte";
    export let skill_options = ['Low', 'Medium', 'High']
</script>
<div class="contentBox">
    <h3 class="subTitle">Education</h3>
    <InputBlock type="text" placeholder = "Add Skill Name" id = "skill-name" label = "Skill Name"/>
    <SkillLevelSelectComponent label="Level" options={skill_options}/>
    	
</div>
<style>
    h3{
       width: 100%;
   }
  
   .subTitle::before{
       content: '+';
       position: absolute;
       right: 25px;
       
   }
</style>
<script>
    import InputBlock from "../BasicComponents/TextInputBlock.svelte";
    import SkillLevelSelectComponent from "../BasicComponents/SelectInputBlock.svelte";
    export let skill_options = ['Low', 'Medium', 'High']

    export let open = false;
    import { slide } from 'svelte/transition';
	const handleClick = () => open = !open;

    export let skill_name = '';
    export let level = '';
</script>
<div class="contentBox">
    <h3 class="subTitle" on:click={handleClick}>Skills</h3>
    {#if open}
    <div class="Active" transition:slide>
        <InputBlock placeholder = "Add Skill Name" id = "skill-name" label = "Skill Name" bind:value={skill_name} />
        <SkillLevelSelectComponent label="Level" options={skill_options} bind:value={level}/>
    </div>
    {/if}	
</div>
<style>
    h3{
       width: 100%;
   }
   h3:hover{
    cursor: pointer;
   }
  
   .subTitle::before{
       content: '+';
       position: absolute;
       right: 25px;
       
   }
</style>
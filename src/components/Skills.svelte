<script>
    import InputBlock from "../BasicComponents/TextInputBlock.svelte";
    import SkillLevelSelectComponent from "../BasicComponents/SelectInputBlock.svelte";
    export let skill_options = ['Low', 'Medium', 'High']
    import Icon from '@iconify/svelte';

    export let open = false;
    import { slide } from 'svelte/transition';
	const handleClick = () => open = !open;

    export let skills = [{ skill_name: '', level: ''}]
    // export let skill_name = '';
    // export let level = '';
    function addSkill() {
      skills = [...skills, {skill_name: '', level: ''}];
    }
    function removeSkill(index) {
      if (skills.length > 1) {
        skills = skills.filter((_, i) => i !== index);
      }
    }
</script>
<div class="contentBox">
    <div class="AccordionHeading">
        <h3 class="subTitle" on:click={handleClick}>Skills</h3>
        <div class="UpwordArrow">
            {#if open}
                <Icon icon="ic:baseline-keyboard-arrow-up" width = "24" height= "24" color="black"/>
            {:else}
            <Icon icon="material-symbols:keyboard-arrow-down" width = "24" height= "24" color="black"/>
            {/if}
        </div>
    </div>
    {#if open}
    {#each skills as skill, i}
    <div class="Active" transition:slide>
        <InputBlock placeholder = "Add Skill Name" id = "skill-name" label = "Skill Name" bind:value={skill.skill_name} />
        <SkillLevelSelectComponent label="Level" options={skill_options} bind:value={skill.level} default_value="Select Skill Level" />
    </div>
    <div class="SkillButtons">
    <button on:click|preventDefault={addSkill}>Add New Skill</button>
    {#if i !== 0}
        <button on:click|preventDefault={() => removeSkill(i)}>Remove Skill</button>
    {/if}
    </div>
    {/each}
    {/if}
    	
</div>
<style>
    h3{
       width: 95%;
   }
   h3:hover{
    cursor: pointer;
   }
  
   /* .subTitle::before{
       content: '+';
       position: absolute;
       right: 25px;
       
   } */
   .SkillButtons{
        margin-top: 10px;
   }
   .SkillButtons button{
        width: 123px;
        background-color: white;
        color: black;
        border-radius: 5px;
   }
   .contentBox{
        border: 1px solid white;
        margin-top: 10px;
        margin-bottom: 10px;
        box-shadow: 0 20px 10px -20px rgba(0,0,0,0.45) inset, 0 -20px 10px -20px rgba(0,0,0,0.45) inset;
    }
    .AccordionHeading{
        display: flex;

    }
    .UpwordArrow{
        width: 5%;
        padding-top: 18px;
    }
</style>
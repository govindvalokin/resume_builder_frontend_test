<script>
    import InputBlock from "../BasicComponents/TextInputBlock.svelte";
    import SkillLevelSelectComponent from "../BasicComponents/SelectInputBlock.svelte";
    // export let skill_options = ['Low', 'Medium', 'High']
    export let skill_options = ['Beginner', 'Intermediate', 'Advanced']
    import Icon from '@iconify/svelte';

    // Function for handling accordion
    export let open = false;
    import { slide } from 'svelte/transition';
	const handleClick = () => open = !open;

    export let skills = [{ skill_name: '', level: ''}]
    
    // Function for adding additional skills
    function addSkill() {
      skills = [...skills, {skill_name: '', level: ''}];
    }
    // Function for removing additional skills
    function removeSkill(index) {
      if (skills.length > 1) {
        skills = skills.filter((_, item) => item !== index);
      }
    }
</script>
<!-- Accordion -->
<div class="content-box">
    <div class="accordion-heading">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <h3 class="sub-title" on:click={handleClick}>Skills</h3>
        <div class="upword-arrow">
            {#if open}
                <Icon icon="ic:baseline-keyboard-arrow-up" width = "24" height= "24" color="black"/>
            {:else}
            <Icon icon="material-symbols:keyboard-arrow-down" width = "24" height= "24" color="black"/>
            {/if}
        </div>
    </div>
    <!-- Accordion content -->
    {#if open}
    {#each skills as skill, item}
    <div class="active" transition:slide>
        <InputBlock placeholder = "Add Skill Name" id = "skill-name" label = "Skill Name" bind:value={skill.skill_name} />
        <SkillLevelSelectComponent label="Level" options={skill_options} bind:value={skill.level} defaultValue="Select Skill Level" />
    </div>
    <!-- Buttons for adding or removing additional skill fields -->
    <div class="skill-buttons">
    <button on:click|preventDefault={addSkill}>+ Add</button>
    {#if item !== 0}
        <button on:click|preventDefault={() => removeSkill(item)}>- Remove</button>
    {/if}
    </div>
    {/each}
    {/if}
    	
</div>
<style>
    h3{
       width: 95%;
       padding-left: 10px;
       font-family: initial
   }
   h3:hover{
    cursor: pointer;
   }
  
   .skill-buttons{
        margin-top: 10px;
   }
   .skill-buttons button{
        width: 82px;
        background-color: white;
        color: #209FA4;;
        border-radius: 5px;
        /* border-color: white; */
        cursor: pointer;
        font-family: ui-serif;
        margin-left: 7px;
   }
   .content-box{
        border: 1px solid white;
        margin-top: 10px;
        margin-bottom: 10px;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }
    .accordion-heading{
        display: flex;

    }
    .upword-arrow{
        width: 5%;
        padding-top: 18px;
    }
</style>
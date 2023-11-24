<script>
    import InputBlock from "../BasicComponents/TextInputBlock.svelte";
    import Icon from '@iconify/svelte';

    export let open = false;
    import { slide } from 'svelte/transition';

    // Function for handling accordion
	const handleClick = () => open = !open;

    export let project = [{ project_title:'', skills_earned:'', description:''}]
    
    // Function for adding nadditional project details
    function addProject() {
      project = [...project, { project_title:'', skills_earned:'', description:''}];
    }

    // Function for removing additional project details
    function removeProject(index) {
      if (project.length > 1) {
        project = project.filter((_, item) => item !== index);
      }
    }

</script>
<!-- Accordion -->
<div class="content-box">
    <div class="accordion-heading">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <h3 class="sub-title" on:click={handleClick}>Project Details</h3>
        <!-- Controling upward and downward arrows -->
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
    {#each project as project_data, item}
    <div class="active" transition:slide>
        <InputBlock placeholder = "Add Project Title" id = "project-title" label = "Project Title" bind:value={project_data.project_title} />
        <InputBlock placeholder = "Add Skills" id = "skills" label = "Earned Skills" bind:value={project_data.skills_earned}/>
        <InputBlock placeholder = "Add Description" id = "description" label = "Description" bind:value={project_data.description}/>
    </div>

    <!-- Buttons for adding new projects and removing projects -->
    <div class="project-buttons">
        <button on:click|preventDefault={addProject}>+ Add</button>
        {#if item !== 0}
            <button on:click|preventDefault={() => removeProject(item)}>- Remove</button>
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
  
   .project-buttons{
        margin-top: 10px;
   }
   .project-buttons button{
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
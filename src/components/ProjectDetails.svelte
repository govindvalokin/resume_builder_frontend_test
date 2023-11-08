<script>
    import InputBlock from "../BasicComponents/TextInputBlock.svelte";

    export let open = false;
    import { slide } from 'svelte/transition';
	const handleClick = () => open = !open;

    export let project = [{ project_title:'', skills_earned:'', description:''}]
    // export let project_title = '';
    // export let skills_earned = '';
    // export let description = '';

    function addProject() {
      project = [...project, { project_title:'', skills_earned:'', description:''}];
    }
    function removeProject(index) {
      if (project.length > 1) {
        project = project.filter((_, i) => i !== index);
      }
    }

</script>
<div class="contentBox">
    <h3 class="subTitle" on:click={handleClick}>Project Details</h3>
    {#if open}
    {#each project as project_data, i}
    <div class="Active" transition:slide>
        <InputBlock placeholder = "Add Project Title" id = "project-title" label = "Project Title" bind:value={project_data.project_title} />
        <InputBlock placeholder = "Add Skills" id = "skills" label = "Skills" bind:value={project_data.skills_earned}/>
        <InputBlock placeholder = "Add Description" id = "description" label = "Descriptoion" bind:value={project_data.description}/>
    </div>
    <div class="ProjectButtons">
        <button on:click|preventDefault={addProject}>Add New Project</button>
        {#if i !== 0}
            <button on:click|preventDefault={() => removeProject(i)}>Remove Project</button>
        {/if}
    </div>
    {/each}
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
   .ProjectButtons{
        margin-top: 10px;
   }
   .ProjectButtons button{
        width: 137px;
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
</style>
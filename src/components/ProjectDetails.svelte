<script>
    import InputBlock from "../BasicComponents/TextInputBlock.svelte";

    export let open = false;
    import { slide } from 'svelte/transition';
	const handleClick = () => open = !open;

    export let project_title = '';
    export let skills_earned = '';
    export let description = '';

</script>
<div class="contentBox">
    <h3 class="subTitle" on:click={handleClick}>Project Details</h3>
    {#if open}
    <div class="Active" transition:slide>
        <InputBlock placeholder = "Add Project Title" id = "project-title" label = "Project Title" bind:value={project_title} />
        <InputBlock placeholder = "Add Skills" id = "skills" label = "Skills" bind:value={skills_earned}/>
        <InputBlock placeholder = "Add Description" id = "description" label = "Descriptoion" bind:value={description}/>
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
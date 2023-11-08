<script>
    import InputBlock from "../BasicComponents/TextInputBlock.svelte";

    export let open = false;
    import { slide } from 'svelte/transition';
	const handleClick = () => open = !open;
</script>
<div class="contentBox">
    <h3 class="subTitle" on:click={handleClick}>Project Details</h3>
    {#if open}
    <div class="Active" transition:slide>
        <InputBlock type="text" placeholder = "Add Project Title" id = "project-title" label = "Project Title"/>
        <InputBlock type="text" placeholder = "Add Skills" id = "skills" label = "Skills"/>
        <InputBlock type="text" placeholder = "Add Description" id = "description" label = "Descriptoion"/>
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
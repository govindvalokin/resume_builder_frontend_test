<script>
    import InputBlock from "../BasicComponents/TextInputBlock.svelte";
    import DateBlock from "../BasicComponents/DateInputBlock.svelte";

    export let open = false;
    import { slide } from 'svelte/transition';
	const handleClick = () => open = !open;
</script>
<div class="contentBox">
    <h3 class="subTitle" on:click={handleClick}>Work</h3>
    {#if open}
    <div class="Active" transition:slide>
        <InputBlock placeholder = "Add Organisation" id = "organisation" label = "Organisation"/>
        <InputBlock placeholder = "Add Job Role" id = "job-role" label = "Job Role"/>
        <InputBlock placeholder = "Add Job Location" id = "job-location" label = "Job Location"/>
        <InputBlock placeholder = "Add Key Roles " id = "key-roles" label = "Key Roles"/>
        <DateBlock placeholder = "Add Start Date" id = "start-date" label = "Start Date"/>
        <DateBlock placeholder = "Add End Date" id = "end-date" label = "End Date"/>
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
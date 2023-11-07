<script>
    import InputBlock from "./InputBlock.svelte";

    export let open = false;
    import { slide } from 'svelte/transition';
	const handleClick = () => open = !open;
</script>
<div class="contentBox">
    <h3 class="subTitle" on:click={handleClick}>Education</h3>
    {#if open}
    <div class="Active" transition:slide>
        <InputBlock type="text" placeholder = "Add Qualification" id = "qualification" label = "Qualification"/>
        <InputBlock type="text" placeholder = "Add Course Name" id = "course-name" label = "Course Name"/>
        <InputBlock type="text" placeholder = "Add Institute" id = "institute" label = "Institute"/>
        <InputBlock type="text" placeholder = "Add Location" id = "location" label = "Location"/>
        <InputBlock type="text" placeholder = "Add Accademic Year" id = "accademic-year" label = "Accademic Year"/>	
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
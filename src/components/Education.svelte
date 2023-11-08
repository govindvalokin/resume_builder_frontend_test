<script>
    import InputBlock from "../BasicComponents/TextInputBlock.svelte";
    import DateBlock from "../BasicComponents/DateInputBlock.svelte";

    export let open = false;
    import { slide } from 'svelte/transition';
	const handleClick = () => open = !open;

    export let qualification='';
    export let course_name = '';
    export let institute_name = '';
    export let location ='';
    export let academic_year_start='';
    export let accademic_year_end='';
</script>
<div class="contentBox">
    <h3 class="subTitle" on:click={handleClick}>Education</h3>
    {#if open}
    <div class="Active" transition:slide>
        <InputBlock placeholder = "Add Qualification" id = "qualification" label = "Qualification" bind:value={qualification}/>
        <InputBlock placeholder = "Add Course Name" id = "course-name" label = "Course Name" bind:value={course_name} />
        <InputBlock placeholder = "Add Institute" id = "institute" label = "Institute" bind:value={institute_name} />
        <InputBlock placeholder = "Add Location" id = "location" label = "Location" bind:value={location} />
        <DateBlock placeholder = "Add Accademic Year Start" id = "accademic_year_start" label = "Accademic Year Start" bind:value={academic_year_start} />
        <DateBlock placeholder = "Add Accademic Year End" id = "accademic_year_end" label = "Accademic Year End" bind:value={accademic_year_end} />	
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
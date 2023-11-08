<script>
    import InputBlock from "../BasicComponents/TextInputBlock.svelte";
    import DateBlock from "../BasicComponents/DateInputBlock.svelte";

    export let open = false;
    import { slide } from 'svelte/transition';
	const handleClick = () => open = !open;

    export let education = [{ qualification:'', course_name:'', institute_name:'', location:'', academic_year_start:'', accademic_year_end:''}]
    // export let qualification='';
    // export let course_name = '';
    // export let institute_name = '';
    // export let location ='';
    // export let academic_year_start='';
    // export let accademic_year_end='';

    function addEducation() {
      education = [...education, { qualification:'', course_name:'', institute_name:'', location:'', academic_year_start:'', accademic_year_end:''}];
    }
    function removeEducation(index) {
      if (education.length > 1) {
        education = education.filter((_, i) => i !== index);
      }
    }
</script>
<div class="contentBox">
    <h3 class="subTitle" on:click={handleClick}>Education</h3>
    {#if open}
    {#each education as education_data, i}
    <div class="Active" transition:slide>
        <InputBlock placeholder = "Add Qualification" id = "qualification" label = "Qualification" bind:value={education_data.qualification}/>
        <InputBlock placeholder = "Add Course Name" id = "course-name" label = "Course Name" bind:value={education_data.course_name} />
        <InputBlock placeholder = "Add Institute" id = "institute" label = "Institute" bind:value={education_data.institute_name} />
        <InputBlock placeholder = "Add Location" id = "location" label = "Location" bind:value={education_data.location} />
        <DateBlock placeholder = "Add Accademic Year Start" id = "accademic_year_start" label = "Accademic Year Start" bind:value={education_data.academic_year_start} />
        <DateBlock placeholder = "Add Accademic Year End" id = "accademic_year_end" label = "Accademic Year End" bind:value={education_data.accademic_year_end} />	
    </div>
    <div class="EducationButtons">
        <button on:click|preventDefault={addEducation}>Add New Qualification</button>
        {#if i !== 0}
            <button on:click|preventDefault={() => removeEducation(i)}>Remove Qualification</button>
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
   .EducationButtons{
        margin-top: 10px;
   }
   .EducationButtons button{
        width: 178px;
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
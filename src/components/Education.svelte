<script>
    import InputBlock from "../BasicComponents/TextInputBlock.svelte";
    import DateBlock from "../BasicComponents/DateInputBlock.svelte";
    import Icon from '@iconify/svelte';

    export let open = false;
    import { slide } from 'svelte/transition';
    import { validateCourseName, validateInstitute, validateLocation, validateQualification } from "./validation";
	const handleClick = () => open = !open;

    export let education = [{ qualification:'', course_name:'', institute_name:'', location:'', academic_year_start:'', academic_year_end:''}]
    // export let qualification='';
    // export let course_name = '';
    // export let institute_name = '';
    // export let location ='';
    // export let academic_year_start='';
    // export let accademic_year_end='';

    function addEducation() {
      education = [...education, { qualification:'', course_name:'', institute_name:'', location:'', academic_year_start:'', academic_year_end:''}];
    }
    function removeEducation(index) {
      if (education.length > 1) {
        education = education.filter((_, i) => i !== index);
      }
    }
</script>
<div class="content-box">
    <div class="accordion-heading">
        <h3 class="sub-title" on:click={handleClick}>Education</h3>
        <div class="upword-arrow">
            {#if open}
                <Icon icon="ic:baseline-keyboard-arrow-up" width = "24" height= "24" color="black"/>
            {:else}
            <Icon icon="material-symbols:keyboard-arrow-down" width = "24" height= "24" color="black"/>
            {/if}
        </div>
    </div>
    {#if open}
    {#each education as education_data, i}
    <div class="active" transition:slide>
        <InputBlock placeholder = "Add Qualification" id = "qualification" label = "Qualification" bind:value={education_data.qualification}/>
        <div class="errors">{education_data.qualification && validateQualification(education_data.qualification)}</div>
        <InputBlock placeholder = "Add Course Name" id = "course-name" label = "Course Name" bind:value={education_data.course_name} />
        <div class="errors">{education_data.course_name && validateCourseName(education_data.course_name)}</div>
        <InputBlock placeholder = "Add Institute" id = "institute" label = "Institute" bind:value={education_data.institute_name} />
        <div class="errors">{education_data.institute_name && validateInstitute(education_data.institute_name)}</div>
        <InputBlock placeholder = "Add Location" id = "location" label = "Location" bind:value={education_data.location} />
        <div class="errors">{education_data.location && validateLocation(education_data.location)}</div>
        <DateBlock placeholder = "Add Academic Year Start" id = "academic_year_start" label = "Academic Year Start" bind:value={education_data.academic_year_start} />
        <DateBlock placeholder = "Add Academic Year End" id = "academic_year_end" label = "Academic Year End" bind:value={education_data.academic_year_end} />	
    </div>
    <div class="education-buttons">
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
       width: 95%;
       padding-left: 10px;
       font-family: initial
   }
   h3:hover{
    cursor: pointer;
   }
  
   /* .subTitle::before{
       content: '+';
       position: absolute;
       right: 25px;
       
   } */
   .education-buttons{
        margin-top: 10px;
   }
   .education-buttons button{
        width: 178px;
        background-color: white;
        color: blue;
        border-radius: 5px;
        border-color: white;
        cursor: pointer;
   }
   .content-box{
        border: 1px solid white;
        margin-top: 10px;
        margin-bottom: 10px;
        /* box-shadow: 0 20px 10px -20px rgba(0,0,0,0.45) inset, 0 -20px 10px -20px rgba(0,0,0,0.45) inset; */
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }
    .accordion-heading{
        display: flex;

    }
    .upword-arrow{
        width: 5%;
        padding-top: 18px;
    }
    .errors{
        color: red;
        /* padding-left: 240px; */
        text-align: start;
        width: 100%
    }
</style>
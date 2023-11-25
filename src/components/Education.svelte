<script>
    import InputBlock from "../BasicComponents/TextInputBlock.svelte";
    import DateBlock from "../BasicComponents/DateInputBlock.svelte";
    import Icon from '@iconify/svelte';

    export let open = false;
    import { slide } from 'svelte/transition';
    import { validateCourseName, validateInstitute, validateLocation, validateQualification } from "./validation";
	
    // Function for open and close accordion
    const handleClick = () => open = !open;

    export let education = [{ qualification:'', course_name:'', institute_name:'', location:'', academic_year_start:'', academic_year_end:''}]
    
    // Function for adding additional educational details
    function addEducation() {
      education = [...education, { qualification:'', course_name:'', institute_name:'', location:'', academic_year_start:'', academic_year_end:''}];
    }
    // Function for removing additional education details
    function removeEducation(index) {
      if (education.length > 1) {
        education = education.filter((_, item) => item !== index);
      }
    }
</script>
<!-- Accordion content -->
<div class="content-box">
    <div class="accordion-heading">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <h3 class="sub-title" on:click={handleClick}>Education <span class="mandatory-star">*</span></h3>
        <!-- Upword and downward arrows for accordian -->
        <div class="upword-arrow">
            {#if open}
                <Icon icon="ic:baseline-keyboard-arrow-up" width = "24" height= "24" color="black"/>
            {:else}
            <Icon icon="material-symbols:keyboard-arrow-down" width = "24" height= "24" color="black"/>
            {/if}
        </div>
    </div>
    {#if open}
    {#each education as education_data, item}
    <div class="active" transition:slide>
        <InputBlock placeholder = "Add Qualification" id = "qualification" label = "Qualification" bind:value={education_data.qualification}/>
        <!-- Error message display block -->

        <div class="errors">{education_data.qualification && validateQualification(education_data.qualification)}</div>
        <InputBlock placeholder = "Add Course Name" id = "course-name" label = "Course Name" bind:value={education_data.course_name} />
        <!-- Error message display block -->

        <div class="errors">{education_data.course_name && validateCourseName(education_data.course_name)}</div>
        <InputBlock placeholder = "Add Institute" id = "institute" label = "Institute" bind:value={education_data.institute_name} />
        <!-- Error message display block -->

        <div class="errors">{education_data.institute_name && validateInstitute(education_data.institute_name)}</div>
        <InputBlock placeholder = "Add Location" id = "location" label = "Location" bind:value={education_data.location} />
        <!-- Error message display block -->

        <div class="errors">{education_data.location && validateLocation(education_data.location)}</div>

        <!-- Date input blocks without validations -->
        <DateBlock  id = "academic_year_start" label = "Academic Year Start" bind:value={education_data.academic_year_start} />
        <DateBlock  id = "academic_year_end" label = "Academic Year End" bind:value={education_data.academic_year_end} />	
    </div>
    <!-- Buttons for adding or removing more than one education details -->
    <div class="education-buttons">
        <button on:click|preventDefault={addEducation}>+ Add</button>
        {#if item !== 0}
            <button on:click|preventDefault={() => removeEducation(item)}>- Remove</button>
        {/if}
    </div>
    {/each}
    {/if}
</div>
<style>
    h3{
       width: 95%;
       padding-left: 10px;
       font-family: initial;
   }
   h3:hover{
    cursor: pointer;
   }
  
   
   .education-buttons{
        margin-top: 10px;
   }
   .education-buttons button{
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
    .errors{
        color: red;
        text-align: start;
        width: 100%;
        font-size: small;
    }
    .mandatory-star{
        color: red;
    }
</style>
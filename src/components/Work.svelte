<script>
    import InputBlock from "../BasicComponents/TextInputBlock.svelte";
    import DateBlock from "../BasicComponents/DateInputBlock.svelte";
    import Icon from '@iconify/svelte';

    export let open = false;
    import { slide } from "svelte/transition";
    const handleClick = () => (open = !open);

    export let work = [{ organisation: '', job_role: '', job_location: '', key_roles: '', start_date:'', end_date:'' }]
    // export let organisation = '';
    // export let job_role = '';
    // export let job_location = '';
    // export let key_roles = '';
    // export let start_date = '';
    // export let end_date = '';
    function addWork(){
        work = [...work, { organisation: '', job_role: '', job_location: '', key_roles: '', start_date:'', end_date:'' }]
    }
    function removeWork(index) {
      if (work.length > 1) {
        work = work.filter((_, i) => i !== index);
      }
    }

</script>

<div class="contentBox">
    <div class="AccordionHeading">
        <h3 class="subTitle" on:click={handleClick}>Work</h3>
        <div class="UpwordArrow">
            {#if open}
                <Icon icon="ic:baseline-keyboard-arrow-up" width = "24" height= "24" color="black"/>
            {:else}
            <Icon icon="material-symbols:keyboard-arrow-down" width = "24" height= "24" color="black"/>
            {/if}
        </div>
    </div>
    {#if open}
    {#each work as work_data, i}
        <div class="Active" transition:slide>
            <InputBlock
                placeholder="Add Organisation"
                id="organisation"
                label="Organisation"
                bind:value="{work_data.organisation}"
            />
            <InputBlock
                placeholder="Add Job Role"
                id="job-role"
                label="Job Role"
                bind:value="{work_data.job_role}"
            />
            <InputBlock
                placeholder="Add Job Location"
                id="job-location"
                label="Job Location"
                bind:value="{work_data.job_location}"
            />
            <InputBlock
                placeholder="Add Key Roles "
                id="key-roles"
                label="Key Roles"
                bind:value="{work_data.key_roles}"
            />
            <DateBlock
                placeholder="Add Start Date"
                id="start-date"
                label="Start Date"
                bind:value="{work_data.start_date}"
            />
            <DateBlock
                placeholder="Add End Date"
                id="end-date"
                label="End Date"
                bind:value="{work_data.end_date}"
            />
        </div>
        <div class="WorkButtons">
            <button on:click|preventDefault={addWork}>Add New Work</button>
            {#if i !== 0}
                <button on:click|preventDefault={() => removeWork(i)}>Remove Work</button>
            {/if}
        </div>
    {/each}
    {/if}
</div>

<style>
    h3 {
        width: 95%;
    }
    h3:hover {
        cursor: pointer;
    }

    /* .subTitle::before {
        content: "+";
        position: absolute;
        right: 25px;
    } */
    .WorkButtons{
        margin-top: 10px;
   }
   .WorkButtons button{
        width: 123px;
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
    .AccordionHeading{
        display: flex;

    }
    .UpwordArrow{
        width: 5%;
        padding-top: 18px;
    }
</style>

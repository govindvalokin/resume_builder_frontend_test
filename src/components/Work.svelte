<script>
    import InputBlock from "../BasicComponents/TextInputBlock.svelte";
    import DateBlock from "../BasicComponents/DateInputBlock.svelte";
    import Icon from '@iconify/svelte';

    // for accordion control
    export let open = false;
    import { slide } from "svelte/transition";
    const handleClick = () => (open = !open);

    export let work = [{ organisation: '', job_role: '', job_location: '', key_roles: '', start_date:'', end_date:'' }]
    // Function for adding additional work field
    function addWork(){
        work = [...work, { organisation: '', job_role: '', job_location: '', key_roles: '', start_date:'', end_date:'' }]
    }
    // Function for removing additional work fields
    function removeWork(index) {
      if (work.length > 1) {
        work = work.filter((_, item) => item !== index);
      }
    }

</script>
<!-- Accordion -->
<div class="content-box">
    <div class="accordion-heading">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <h3 class="subTitle" on:click={handleClick}>Work</h3>
        <div class="upword-arrow">
            {#if open}
                <Icon icon="ic:baseline-keyboard-arrow-up" width = "24" height= "24" color="black"/>
            {:else}
            <Icon icon="material-symbols:keyboard-arrow-down" width = "24" height= "24" color="black"/>
            {/if}
        </div>
    </div>
    <!-- Accordion content -->
    {#if open}
    {#each work as work_data, item}
        <div class="active" transition:slide>
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
                
                id="start-date"
                label="Start Date"
                bind:value="{work_data.start_date}"
            />
            <DateBlock
                
                id="end-date"
                label="End Date"
                bind:value="{work_data.end_date}"
            />
        </div>
        <!-- Buttons for adding or removing additional work fields -->
        <div class="work-buttons">
            <button on:click|preventDefault={addWork}>+ Add</button>
            {#if item !== 0}
                <button on:click|preventDefault={() => removeWork(item)}>- Remove</button>
            {/if}
        </div>
    {/each}
    {/if}
</div>

<style>
    h3 {
        width: 95%;
        padding-left: 10px;
        font-family: initial
    }
    h3:hover {
        cursor: pointer;
    }

    
    .work-buttons{
        margin-top: 10px;
   }
   .work-buttons button{
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
</style>

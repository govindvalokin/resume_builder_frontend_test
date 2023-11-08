<script>
    import InputBlock from "../BasicComponents/TextInputBlock.svelte";
    import DateBlock from "../BasicComponents/DateInputBlock.svelte";

    export let open = false;
    import { slide } from "svelte/transition";
    const handleClick = () => (open = !open);

    export let organisation = '';
    export let job_role = '';
    export let job_location = '';
    export let key_roles = '';
    export let start_date = '';
    export let end_date = '';


</script>

<div class="contentBox">
    <h3 class="subTitle" on:click={handleClick}>Work</h3>
    {#if open}
        <div class="Active" transition:slide>
            <InputBlock
                placeholder="Add Organisation"
                id="organisation"
                label="Organisation"
                bind:value="{organisation}"
            />
            <InputBlock
                placeholder="Add Job Role"
                id="job-role"
                label="Job Role"
                bind:value="{job_role}"
            />
            <InputBlock
                placeholder="Add Job Location"
                id="job-location"
                label="Job Location"
                bind:value="{job_location}"
            />
            <InputBlock
                placeholder="Add Key Roles "
                id="key-roles"
                label="Key Roles"
                bind:value="{key_roles}"
            />
            <DateBlock
                placeholder="Add Start Date"
                id="start-date"
                label="Start Date"
                bind:value="{start_date}"
            />
            <DateBlock
                placeholder="Add End Date"
                id="end-date"
                label="End Date"
                bind:value="{end_date}"
            />
        </div>
    {/if}
</div>

<style>
    h3 {
        width: 100%;
    }
    h3:hover {
        cursor: pointer;
    }

    .subTitle::before {
        content: "+";
        position: absolute;
        right: 25px;
    }
</style>

<script>
    export let id = "";
    export let label = "";
    export let options = [];
    export let value;
    export let default_value='';
</script>

<main>
    <div class="formContent">
        <div class="inputField">
            <div class="label">
                <label for={id}>{label}</label>
            </div>
            <div class="inputEntry">
                <select bind:value>
                    <option value="">{default_value}</option> 
                    {#each options as option}
                        <option value={option}>{option}</option>
                    {/each}
                </select>
            </div>
        </div>
    </div>
</main>

<style>
    select option:first-child{
        display: none;
        
    }
    .inputField {
        display: flex;
        border: solid 0.1px gray;
        height: 43px;
    }
    .label {
        width: 20%;
        background-color: #f4f6f8;
        height: 43px;
    }
    label {
        padding-left: 12px;
        padding-top: 10px;
    }
    .inputEntry {
        width: 80%;
        height: 43px;
    }
    select {
        width: 50%;
        height: 43px;
        padding-left: 5px;
        border-radius: 0px;
        margin: 0px;
        background-color: white;
        margin-left: 7px;
        border: none;
    }
    
</style>

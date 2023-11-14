<script>
    
    export let id = "";
    export let placeholder = "";
    export let label = "";
    export let value;
   

    // export let error;
    // export let changeHandler;
   
</script>

<main>
    <div class="formContent">
        <div class="inputField">
            <div class="label">
                <label for={id}>{label}</label>
            </div>
            <div class="inputEntry">
                <input {id} type="text" {placeholder} bind:value />
                <!-- <input {id} type="text" {placeholder} bind:value on:change={changeHandler}/> -->
                <!-- <span>{error}</span> -->
            </div>
        </div>
    </div>
</main>

<style>
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
    input[type="text"] {
        width: 50%;
        height: 38px;
        padding-left: 5px;
        border-radius: 0px;
        margin: 0px;

        border-top-color: white;
        border-left-color: white;
        border-right-color: white;
        margin-left: 7px;
        border-bottom: 2px solid black;
    }
    /* input[type="email"] {
        width: 100%;
        height: 38px;
        padding-left: 5px;
        border-radius: 0px;
        margin: 0px;
    }
    input[type="date"] {
        width: 100%;
        height: 38px;
        padding-left: 5px;
        border-radius: 0px;
        margin: 0px;
    } */
</style>

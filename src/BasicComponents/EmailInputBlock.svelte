<script>
    // export let type = "";
    export let id = "";
    export let placeholder = "";
    export let label = "";
    export let value;
</script>

<main>
    <div class="formContent">
        <div class="inputField">
            <div class="label">
                <label for={id}>{label}</label>
            </div>
            <div class="inputEntry">
                <input {id} type="email" {placeholder} bind:value />
                <!-- <input {id} type="text" {placeholder} /> -->
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
    /* input[type="text"] {
        width: 100%;
        height: 38px;
        padding-left: 5px;
        border-radius: 0px;
        margin: 0px;
    } */
    input[type="email"] {
        width: 50%;
        height: 38px;
        padding-left: 5px;
        border-radius: 0px;
        margin: 0px;

        border-top-color: white;
        border-left-color: white;
        border-right-color: white;
        margin-left: 7px;
        border-bottom-color:white ;
        /* outline: white; */
        /* border-bottom: 2px solid black; */
        outline: none;
    }
    input[type="email"]:active {
        border-bottom: 2px solid black;
        border-top-color: white;
        border-left-color: white;
        border-right-color: white;
        /* outline: white; */
        outline: none;
        
        
    }
    /* input[type="date"] {
        width: 100%;
        height: 38px;
        padding-left: 5px;
        border-radius: 0px;
        margin: 0px;
    } */
</style>

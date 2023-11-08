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
                <input {id} type="date" {placeholder} bind:value />
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
    }
    input[type="email"] {
        width: 100%;
        height: 38px;
        padding-left: 5px;
        border-radius: 0px;
        margin: 0px;
    } */
    input[type="date"] {
        width: 100%;
        height: 43px;
        padding-left: 5px;
        border-radius: 0px;
        margin: 0px;
    }
</style>

<script>
    // export let type = "";
    export let id = "";
    export let placeholder = "";
    export let label = "";
    export let value;
</script>

<main>
    <!-- Input block for urls -->
    <div class="form-content">
        <div class="input-field">
            <!-- Label -->
            <div class="label">
                <label for={id}>{label}</label>
            </div>
            <!-- Input box -->
            <div class="input-entry">
                <input {id} type="url" {placeholder} bind:value />
                <!-- <input {id} type="text" {placeholder} /> -->
            </div>
        </div>
    </div>
</main>

<style>
    .input-field {
        display: flex;
        border: solid 0.1px white;
        height: 43px;
    }
    .label {
        width: 20%;
        background-color: #f4f6f8;
        height: 45px;
    }
    label {
        padding-left: 12px;
        padding-top: 10px;
        font-family: initial;
    }
    .input-entry {
        width: 80%;
        height: 43px;
    }
    input[type="url"] {
        width: 50%;
        height: 38px;
        padding-left: 5px;
        border-radius: 0px;
        margin: 0px;
        font-family: initial;

       
        margin-left: 7px;
        outline: none;
        border:hidden;
        border-bottom: 2px inset;
        
    }
    input[type="url"]:hover{
        border-bottom: 2px solid blue;
        outline: none;
    }
    

    @media (max-width: 480px){
  .label {
    display: none;
  }
  input[type="url"] {
    width:100%;
    font-size: larger;
    width:97%;
  }
  .input-entry {
    width: 100%;
    
  }
  label{
    display: none;
  }

  }
</style>

<script>
    export let id = "";
    export let label = "";
    export let options = [];
    export let value;
    export let defaultValue='';
</script>

<main>
    <!-- Input block for select input -->
    <div class="form-content">
        <div class="input-field">
            <!-- Label -->
            <div class="label">
                <label for={id}>{label}</label>
            </div>
            <!-- Select input box -->
            <div class="input-entry">
                <select bind:value>
                    <option value="">{defaultValue}</option> 
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
    select {
        width: 50%;
        height: 38px;
        padding-left: 5px;
        border-radius: 0px;
        margin: 0px;
        background-color: white;
        margin-left: 7px;
        border: none;
        font-family: initial;

        outline: none;
        border:hidden;
        border-bottom: 2px inset;
    }
    select:hover{
        border-bottom: 2px solid blue;
        outline: none;
    }

@media (max-width: 480px){
  .label {
    display: none;
  }
  select {
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

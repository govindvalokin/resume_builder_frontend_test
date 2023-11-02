<script>
    export let id = ''
    export let label = ''
    export let options = []
</script>

<main>
    <div class="formContent">
        <div class="inputField">
            <div class="label">
                <label for={id}>{label}</label>
            </div>
            <div class="inputEntry">
                <select>
                    {#each options as option}
                    <option value={option}>{option}</option>
                    {/each}
                </select>
            </div>                        
        </div>
    </div> 
</main>

<style>
     .inputField{
        display: flex;
        border: solid .1px gray; 
        height: 43px;
        
    }
    .label{
        width: 20%;
        background-color: #F4F6F8;
        height: 43px;
           
    }
    label{
        padding-left: 12px;
        padding-top: 10px;
    }
    .inputEntry{
        width: 80%;
        height: 43px;
    }
    select{
        width:100%;
        height:38px;
        padding-left: 5px;
        border-radius: 0px;
        margin: 0px;
    }
    
</style>
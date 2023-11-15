<script>
    import Button from "../../BasicComponents/Button.svelte";


</script>
<main>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class=BackGround on:click|self>
    <div class="ContentBox">
        <p>Are you sure want to delete?</p>
        <div class="ConfirmButtons">
            <Button typeOfButton="save" type="submit" button_label="Delete"/>
            <button class="cancel" on:click|self>Cancel</button>
        </div>
    </div>    
</div>
</main>
<style>
.BackGround{
    background: rgba(0,0,0,0.8);
    height: 100%;
    width:100%;
    position:fixed;
    /* display: none; */
}
.ConfirmButtons{
    display: flex;
    justify-content: center;
    margin-top: 4px;
    
}
.ContentBox{
    width: 400px;
    height: 100px;
    background-color: rgb(231 231 231);
    border-radius: 7px;
    text-align: center;
    margin: 0 auto;
    position: relative;
    top: 35%;
}
p{
    margin: 0px;
    padding-top: 12px;
}
.cancel{
        width: 100px;
        background-color: white;
        color: black;
        border-radius: 5px;
        margin: 10px 5px 10px 5px;
    }
</style>
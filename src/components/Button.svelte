<script>
    export let button_label = ''
    export let typeOfButton = ''

</script>
<main>
    <button class={typeOfButton}>{button_label}</button>
</main>
<style>
    .save{
        width: 100px;
        background-color: #209FA4;
        color: white;
        border-radius: 5px;
        margin: 10px 5px 10px 5px;

    }
    .cancel{
        width: 100px;
        background-color: white;
        color: black;
        border-radius: 5px;
        margin: 10px 5px 10px 5px;
    }
</style>
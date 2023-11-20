<script>
    export let button_label = ''
    export let typeOfButton = ''
    export let type = ''

</script>
<!-- Button -->
<main>
    <button class={typeOfButton} type={type}>{button_label}</button>
</main>
<style>
    /* Button styles  */
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
        color: #209FA4;
        border-radius: 5px;
        margin: 10px 5px 10px 5px;
    }
</style>
<script>
    import InputBlock from "../BasicComponents/TextInputBlock.svelte";
    import UrlBlock from "../BasicComponents/UrlInputBlock.svelte";

    export let open = false;
    import { slide } from 'svelte/transition';
	const handleClick = () => open = !open;

    export let network = '';
    export let url = '';
    export let user_name = '';
    
</script>
<div class="contentBox">
    <h3 class="subTitle" on:click={handleClick}>Social Media</h3>
    {#if open}
    <div class="Active" transition:slide>

        <InputBlock placeholder = "Add Network" id = "network" label = "Network" bind:value="{network}" />
        <UrlBlock placeholder = "Add URL" id = "network-url" label = "URL" bind:value="{url}" />
        <InputBlock placeholder = "Add User Name" id = "user-name" label = "User Name" bind:value="{user_name}" />
    </div>
    {/if}	
</div>
<style>
    h3{
       width: 100%;
   }
   h3:hover{
    cursor: pointer;
   }
  
   .subTitle::before{
       content: '+';
       position: absolute;
       right: 25px;
       
   }
</style>
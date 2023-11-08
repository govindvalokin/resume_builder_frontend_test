<script>
    import InputBlock from "./InputBlock.svelte";
    import UrlBlock from "../BasicComponents/UrlInputBlock.svelte";

    export let open = false;
    import { slide } from 'svelte/transition';
	const handleClick = () => open = !open;
    
</script>
<div class="contentBox">
    <h3 class="subTitle" on:click={handleClick}>Social Media</h3>
    {#if open}
    <div class="Active" transition:slide>

        <InputBlock placeholder = "Add Network" id = "network" label = "Network" />
        <UrlBlock placeholder = "Add URL" id = "network-url" label = "URL" />
        <InputBlock placeholder = "Add User Name" id = "user-name" label = "User Name" />
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
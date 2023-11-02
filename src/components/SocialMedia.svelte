<script>
    import InputBlock from "./InputBlock.svelte";
</script>
<div class="contentBox">
    <h3 class="subTitle">Education</h3>
    <InputBlock type="text" placeholder = "Add Network" id = "network" label = "Network"/>
    <InputBlock type="text" placeholder = "Add URL" id = "network-url" label = "URL"/>
    <InputBlock type="text" placeholder = "Add User Name" id = "user-name" label = "User Name"/>
    	
</div>
<style>
    h3{
       width: 100%;
   }
  
   .subTitle::before{
       content: '+';
       position: absolute;
       right: 25px;
       
   }
</style>
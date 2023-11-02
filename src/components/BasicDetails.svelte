<script>
    import InputBlock from "./InputBlock.svelte";
</script>

<main>
	<div class="contentBox">
		<h3 class="subTitle">Basic Details</h3>
		<InputBlock type="text" placeholder = "Add Name" id = "name" label = "Name"/>
		<InputBlock type="email" placeholder = "Add Email" id = "email" label = "Email"/>
		<InputBlock type="text" placeholder = "Add Phone Number" id = "phone" label = "Phone"/>
		<InputBlock type="text" placeholder = "Add Image URL" id = "image-url" label = "Image URL"/>
		<InputBlock type="text" placeholder = "Add Summary" id = "pincode" label = "Pincode"/>	
	</div>
</main>

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
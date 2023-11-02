<script>
    import InputBlock from "./InputBlock.svelte";
    import SelectComponent from "./SelectComponent.svelte";
    export let country_options = ['India','Caneda','United Kingdom','United States','Australia','China','Qatar'] 
</script>

<main>
	<div class="contentBox">
		<h3 class="subTitle">Location Details</h3>
		<InputBlock type="text" placeholder = "Add Address Line" id = "address" label = "Address"/>
		<InputBlock type="text" placeholder = "Add Street Name" id = "street" label = "Street"/>
		<InputBlock type="text" placeholder = "Add City Name" id = "city" label = "City"/>
        <SelectComponent label="Country" options={country_options}/>
		<InputBlock type="text" placeholder = "Add Pincode" id = "pincode" label = "Pincode"/>	
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
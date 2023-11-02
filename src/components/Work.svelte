<script>
    import InputBlock from "./InputBlock.svelte";
</script>
<div class="contentBox">
    <h3 class="subTitle">Work</h3>
    <InputBlock type="text" placeholder = "Add Organisation" id = "organisation" label = "Organisation"/>
    <InputBlock type="text" placeholder = "Add Job Role" id = "job-role" label = "Job Role"/>
    <InputBlock type="text" placeholder = "Add Job Location" id = "job-location" label = "Job Location"/>
    <InputBlock type="text" placeholder = "Add Key Roles " id = "key-roles" label = "Key Roles"/>
    <InputBlock type="date" placeholder = "Add Start Date" id = "start-date" label = "Start Date"/>
    <InputBlock type="date" placeholder = "Add End Date" id = "end-date" label = "End Date"/>	
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
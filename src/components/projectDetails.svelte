<script>
    import InputBlock from "./InputBlock.svelte";
</script>
<div class="contentBox">
    <h3 class="subTitle">Project Details</h3>
    <InputBlock type="text" placeholder = "Add Project Title" id = "project-title" label = "Project Title"/>
    <InputBlock type="text" placeholder = "Add Skills" id = "skills" label = "Skills"/>
    <InputBlock type="text" placeholder = "Add Description" id = "description" label = "Descriptoion"/>
    	
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
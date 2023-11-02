<script>
    import InputBlock from "./InputBlock.svelte";
</script>
<div class="contentBox">
    <h3 class="subTitle">Education</h3>
    <InputBlock type="text" placeholder = "Add Qualification" id = "qualification" label = "Qualification"/>
    <InputBlock type="text" placeholder = "Add Course Name" id = "course-name" label = "Course Name"/>
    <InputBlock type="text" placeholder = "Add Institute" id = "institute" label = "Institute"/>
    <InputBlock type="text" placeholder = "Add Location" id = "location" label = "Location"/>
    <InputBlock type="text" placeholder = "Add Accademic Year" id = "accademic-year" label = "Accademic Year"/>	
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
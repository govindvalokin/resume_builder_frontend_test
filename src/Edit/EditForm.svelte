<script>

  import Education from "../components/Education.svelte";
import EditAddressDetails from "./EditAddressDetails.svelte";
import EditBasicDetails from "./EditBasicDetails.svelte";
  import EditEducation from "./EditEducation.svelte";



export let EditId;
import { onMount } from 'svelte';

onMount(() => {
  const urlParams = new URLSearchParams(window.location.search);
  EditId = urlParams.get('Value.id');
  console.log(EditId); // Output: The ID value from the URL
});

 

//Search API
//   export let email;
//   export let searchData;
//   export let phoneno;
//   async function apiSearchResumeByEmail(email) {
//     if (email != "") {
//       const response = await fetch(
//         `http://127.0.0.1:8000/search-resume/${"govind@gmail.com"}`,
//         {
//           method: "GET",
//         }
//       );
//       const data = await response.json();
//       console.log(data);
//       searchData = data;
//     } else {
//       console.error(error);
//       searchData = null;
//     }
//   }

  //get api for single user
  export let addressDetails;
  export let basicDetails;
  export let educationList;
  // export let educationDetails ={};

  

  export let Id;
  async function apiSearchResumeById(Id) {
    if (Id != "") {
      const response = await fetch(
        `http://127.0.0.1:8000/resume/${Id}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log(data);
      addressDetails = data.location_details;
      basicDetails = data.basic_details
      educationList = data.education
      // educationDetails = data.education[0]

     

      // console.log(educationDetails)
      console.log(basicDetails)
      
    } else {
      console.error(error);
      searchDataById = null;
    }
  }
// function printing(para){
//   console.log(para)
// }
</script>
<main>
  <h1>Edit Resume Details</h1>
   <EditBasicDetails {...basicDetails}/> 
   <EditAddressDetails {...addressDetails} />
   <EditEducation {educationList}/>
   
  
  
   <input type="text" bind:value={Id}>
   <button on:click={() => apiSearchResumeById(Id)}>submit</button>
  
</main>
<style>

</style>
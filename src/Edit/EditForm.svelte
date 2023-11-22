<script>

  import Education from "../components/Education.svelte";
import EditAddressDetails from "./EditAddressDetails.svelte";
import EditBasicDetails from "./EditBasicDetails.svelte";
  import EditEducation from "./EditEducation.svelte";



export let EditId;
import { onMount } from 'svelte';
  import EditWork from "./EditWork.svelte";
  import EditProject from "./EditProject.svelte";
  import EditSocialMedia from "./EditSocialMedia.svelte";
  import EditSkills from "./EditSkills.svelte";
  import EditResumeForm from "./EditResumeForm.svelte";

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
  export let workList;
  export let projectList;
  export let skillsList;
  export let socialMediaList;
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
      workList = data.work
      projectList = data.project_details
      skillsList = data.skills
      socialMediaList = data.social_media
      
    } else {
      console.error(error);
      searchDataById = null;
    }
  }
function printing(){
  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(image_url);
  console.log(summary);
  console.log(address);
  console.log(street);
  console.log(city);
  console.log(pincode);
  console.log(country);
  console.log(educationArray.qualification);
  console.log(social_media[0].network)
}
//binding variables
export let name="";
export let email="";
export let phone = "";
export let image_url = "";
export let summary = "";

export let address = "";
export let street = "";
export let city = "";
export let pincode = "";
export let country = "";


export let educationArray = [
    {
      qualification: "",
      course_name: "",
      institute_name: "",
      location: "",
      academic_year_start: "",
      academic_year_end: "",
    },
  ];
export let social_media = [{ network: "", url: "", user_name: "" }];


</script>
<main>
  <!-- <form>
  <h1>Edit Resume Details</h1>
   <EditBasicDetails {...basicDetails} bind:name bind:email bind:phone bind:image_url bind:summary /> 
   <EditAddressDetails {...addressDetails} bind:address bind:street bind:city bind:pincode bind:country/>
   <EditEducation {educationList} bind:educationArray />
   <EditWork {workList} />
   <EditProject {projectList} />
   <EditSocialMedia {socialMediaList}  />
   <EditSkills {skillsList} />
   <div class="update-buttons">
      <button type="submit" id="update_button">Update</button>
   </div>
  
  </form>
   <input type="text" bind:value={Id}>
   <button on:click={() => apiSearchResumeById(Id)}>submit</button>
   <button on:click={printing}>print</button> -->

   <!-- <EditResumeForm/> -->
  
</main>
<style>
#update_button{
  width: 100px;
  background-color: #209FA4;
  color: white;
  border-radius: 5px;
  margin: 10px 5px 10px 5px;
  align-items: end;
}
.update-buttons{
  width: 100%;
  display: flex;
  justify-content: end;
}
</style>
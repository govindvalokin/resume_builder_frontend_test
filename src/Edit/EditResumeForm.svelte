<script>
  import BasicDetails from "../components/BasicDetails.svelte";
  import Address from "../components/Address.svelte";
  import Education from "../components/Education.svelte";
  import Work from "../components/Work.svelte";
  import ProjectDetails from "../components/ProjectDetails.svelte";
  import Skills from "../components/Skills.svelte";
  import SocialMedia from "../components/SocialMedia.svelte";
  import { prevent_default } from "svelte/internal";
  import Button from "../BasicComponents/Button.svelte";
  // Importing validation functions
  import {
    validateEmail, validateName, validatePhone, validateUrl, validateSummary,
    validateAddress, validateStreet, validateCity, validatePincode, validateCountry,
    validateQualification, validateCourseName, validateInstitute, validateLocation, validateDate } from "../components/validation";

  let editId = "";
  console.log(editId);

  export let backward_link = "< Back to all Resume List";
      
//Declaring variables
  export let name;
  export let email;
  export let phone;
  export let image_url;
  export let summary;

  export let address;
  export let street;
  export let city;
  export let pincode;
  export let country;
 
  export let education = [];
  export let work = [];
  export let project = [];
  export let skills = [];
  export let social_media = [];

//GET api call for single user data based on id
  async function apiSearchResumeById() {
    editId = window.history.state.editId;
    console.log(editId);
    if (editId) {
      const response = await fetch(`http://127.0.0.1:8000/resume/${editId}`, {
        method: "GET",
      });
      const data = await response.json();
     
      name = data.basic_details.name;
      email = data.basic_details.email;
      phone = data.basic_details.phone;
      image_url = data.basic_details.image_url;
      summary = data.basic_details.summary;

      address = data.location_details.address;
      street = data.location_details.street;
      city = data.location_details.city;
      pincode = data.location_details.pincode;
      country = data.location_details.country;

      education = data.education;
      work = data.work;
      project = data.project_details;

      skills = data.skills;
      social_media = data.social_media;
    } else {
      console.error(error);
    }
  }
  //Calling GET api function to display userdata
  apiSearchResumeById();

//Error data variables
  let showError = false;
  let successMessage = "";
  let backendErrorMessage = "";

// update function
  async function handleUpdate() {
    let update_data = {
      basic_details: {
        name,
        email,
        phone,
        image_url,
        summary,
      },
      location_details: {
        address,
        street,
        city,
        pincode,
        country,
      },
      education,
      social_media,
      work,
      skills,
      project,
    };
    // console.log(update_data);

    // calling validation functions for onsubmit validation
    let phoneCheck = validatePhone(phone);
    let emailCheck = validateEmail(email);
    let imageUrlCheck = validateUrl(image_url);
    let nameCheck = validateName(name);
    let summaryCheck = validateSummary(summary);

    let addressCheck = validateAddress(address);
    let streetCheck = validateStreet(street);
    let cityCheck = validateCity(city);
    let pincodeCheck = validatePincode(pincode);
    let countryCheck = validateCountry(country);
    let educationErrors = [];
    for (let item = 0; item < education.length; item++) {
      let qualificationCheck = validateQualification(education[item].qualification);
      let courseNameCheck = validateCourseName(education[item].course_name);
      let instituteCheck = validateInstitute(education[item].institute_name);
      let locationCheck = validateLocation(education[item].location);
      let academicYearStartCheck = validateDate(education[item].academic_year_start);
      let academicYearEndCheck = validateDate(education[item].academic_year_end);
      if (qualificationCheck != "" || courseNameCheck != "" || instituteCheck != "" || locationCheck != "" || academicYearStartCheck != "" || academicYearEndCheck != "")
        {
            educationErrors.push({
            index: item,
            qualificationError: qualificationCheck,
            courseNameError: courseNameCheck,
            instituteError: instituteCheck,
            locationError: locationCheck,
            academicStartError: academicYearStartCheck,
            academicEndError: academicYearEndCheck
        });
      }
    }
    if (phoneCheck != "" || emailCheck != "" || imageUrlCheck != "" || nameCheck != "" || summaryCheck != "")
        {
        prevent_default();
        showError = true;
        window.scrollTo(0, 0);
        }
    else if (addressCheck != "" || streetCheck != "" || cityCheck != "" || pincodeCheck != "" || countryCheck != "")
    {
      prevent_default();
      showError = true;
      window.scrollTo(0, 0);
    }
    else if (educationErrors != "") {
      prevent_default();
      showError = true;
      window.scrollTo(0, 0);
    } else {
      //PUT api
        try {
            const response = await fetch(
            `http://127.0.0.1:8000/edit-resume/${editId}`,
            {
                method: "PUT",
                mode: "cors",
                cache: "no-cache",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(update_data),
            }
            );
            const result = await response.json();
            console.log("Success:", result);
            successMessage = "Form successfully updated";
            clearForm();
            window.scrollTo(0, 0);
        } catch (error) {
            // console.error("Error:", error);
            console.log(error);
            backendErrorMessage = "Something went wrong. Can't update the form!!";
            window.scrollTo(0, 0);
        }
    }
  }
  // Function to clear the form
function clearForm() {
    document.getElementById("update_form").reset();
}
</script>

<main>
    <!-- Error display messages -->
{#if showError}
    <div class="alert">
        <p class="warning-message">Please fill required Fields correctly</p>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <p class="close-button" on:click={() => (showError = false)}>&times;</p>
    </div>
{/if}
{#if backendErrorMessage != ""}
  <div class="alert-success">
    <p class="success-message">{backendErrorMessage}</p>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <p class="close-button" on:click={() => (backendErrorMessage = "")}>
      &times;
    </p>
  </div>
{/if}
<!-- Success message after form submission -->
{#if successMessage != ""}
  <div class="alert-success">
    <p class="success-message">{successMessage}</p>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <p class="close-button" on:click={() => (successMessage = "")}>&times;</p>
  </div>
{/if}
<form id="update_form">
    <div class="form-heading">
        <a href="#/">{backward_link}</a>
        <h2>Edit Resume Details</h2>
    </div>
    
    <BasicDetails bind:name bind:email bind:phone bind:summary bind:image_url />
    <Address bind:address bind:street bind:city bind:pincode bind:country />
    <Education bind:education />
    <Work bind:work />
    <Skills bind:skills />
    <ProjectDetails bind:project />
    <SocialMedia bind:social_media />

    <div class="update-buttons">
      <a href="#/"><Button typeOfButton="cancel" buttonLabel="Cancel" type="button"/></a>
      <button type="button" id="update-button" on:click={handleUpdate}>Update</button>
    </div>
</form>
 
</main>

<style>
  #update-button {
    width: 100px;
    background-color: #209fa4;
    color: white;
    border-radius: 5px;
    margin: 10px 5px 10px 5px;
    align-items: end;
  }
  .update-buttons {
    width: 100%;
    display: flex;
    justify-content: end;
  }


  .form-heading {
    width: 100%;
    height: auto;
    background-color: #e7ebef;

    padding-top: 8px;
    padding-left: 4px;
  }
  h2 {
    margin: 0;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 7px;
    font-family: ui-sans-serif;
  }
  /* .submission-buttons {
    display: flex;
    justify-content: end;
  } */
  .warning-message {
    margin: 0;
    text-align: center;
    color: red;
    width: 95%;
  }
  .success-message {
    margin: 0;
    text-align: center;
    color: rgb(62, 49, 177);
    width: 95%;
  }
  .close-button {
    margin: 0;
    text-align: center;
    cursor: pointer;
    width: 5%;
  }
  .alert {
    background-color: #d5b5b5;
    display: flex;
    padding: 5px;
  }
  .alert-success {
    background-color: #a1e566;
    display: flex;
    padding: 5px;
  }

  /* For mobile view */
  @media (max-width: 480px){
    h2{
      text-align: center;
    }
    .update-buttons{
      display: flex;
      flex-direction: column;
    }
    #update-button{
        width: 97%;
        height: 40px;
        font-size: larger;
    }
    
  }
</style>

<script>
  import Address from "./Address.svelte";
  import BasicDetails from "./BasicDetails.svelte";
  import Button from "../BasicComponents/Button.svelte";
  import Education from "./Education.svelte";
  import Skills from "./Skills.svelte";
  import SocialMedia from "./SocialMedia.svelte";
  import Work from "./Work.svelte";
  import ProjectDetails from "./ProjectDetails.svelte";
  import { prevent_default } from "svelte/internal";

  // Importing validation functions
  import {
    validateEmail,
    validateName,
    validatePhone,
    validateUrl,
    validateSummary,
    validateAddress,
    validateStreet,
    validateCity,
    validatePincode,
    validateCountry,
    validateQualification,
    validateCourseName,
    validateInstitute,
    validateLocation,
    validateDate,
  } from "./validation";
  export let backward_link = "< Back to all Resume List";

  // Error message variables
  let showError = false;
  let successMessage = "";
  let backendErrorMessage = "";

  export let form_data = {};



  // variables for basic_details binding
  export let name = "";
  export let email = "";
  export let phone = "";
  export let image_url = "";
  export let summary = "";

  // variables for location_details binding
  export let address = "";
  export let street = "";
  export let city = "";
  export let pincode = "";
  export let country = "";

  // variables for education data
  export let education = [
    {
      qualification: "",
      course_name: "",
      institute_name: "",
      location: "",
      academic_year_start: "",
      academic_year_end: "",
    },
  ];
  // variables for social_media data
  export let social_media = [{ network: "", url: "", user_name: "" }];
  // variables for work data
  export let work = [
    {
      organisation: "",
      job_role: "",
      job_location: "",
      key_roles: "",
      start_date: "",
      end_date: "",
    },
  ];
  // variable for skill data
  export let skills = [{ skill_name: "", level: "" }];
  // variable for project data
  export let project = [
    { project_title: "", skills_earned: "", description: "" },
  ];

  // function for handling form submission
  async function handleSubmit() {
    // final Json data
    form_data = {
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
      let qualificationCheck = validateQualification(
        education[item].qualification
      );
      let courseNameCheck = validateCourseName(education[item].course_name);
      let instituteCheck = validateInstitute(education[item].institute_name);
      let locationCheck = validateLocation(education[item].location);
      let academicYearStartCheck = validateDate(education[item].academic_year_start);
      let academicYearEndCheck = validateDate(education[item].academic_year_end);
      if (
        qualificationCheck != "" ||
        courseNameCheck != "" ||
        instituteCheck != "" ||
        locationCheck != "" ||
        academicYearStartCheck != "" ||
        academicYearEndCheck != ""
      ) {
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
    if (
      phoneCheck != "" ||
      emailCheck != "" ||
      imageUrlCheck != "" ||
      nameCheck != "" ||
      summaryCheck != ""
    ) {
      prevent_default();
      showError = true;
      window.scrollTo(0, 0);
    } else if (
      addressCheck != "" ||
      streetCheck != "" ||
      cityCheck != "" ||
      pincodeCheck != "" ||
      countryCheck != ""
    ) {
      prevent_default();
      showError = true;
      window.scrollTo(0, 0);
    } else if (educationErrors != "") {
      prevent_default();
      showError = true;
      window.scrollTo(0, 0);
    } else {
      //API integration - POST
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/create-new-resume",
          {
            method: "POST",
            mode: "cors",
            cache: "default",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form_data),
          }
        );
        const result = await response.json();
        console.log("Success:", result);
        successMessage = "Form successfully submitted";
        clearForm();
        window.scrollTo(0, 0);
      } catch (error) {
        // console.error("Error:", error);
        console.log(error);
        backendErrorMessage = "Something went wrong. Can't submit the form!!";
        window.scrollTo(0, 0);
      }
      console.log(form_data);
    }
  }
// Function to clear the form
  function clearForm() {
    document.getElementById("form").reset();
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
  <!-- heading -->
  <div class="form-heading">
    <a href="#/">{backward_link}</a>
    <h2>Add Resume Content</h2>
  </div>
  <!-- calling components and binding values with variables -->
  <form on:submit|preventDefault={handleSubmit} id="form">
    <BasicDetails bind:name bind:email bind:phone bind:image_url bind:summary />
    <Address bind:address bind:street bind:city bind:pincode bind:country />
    <Education bind:education />
    <SocialMedia bind:social_media />
    <Work bind:work />
    <Skills bind:skills />
    <ProjectDetails bind:project />
    <!-- form submit and cancel buttons -->
    <div class="submission-buttons">
      <a href="#/"><Button typeOfButton="cancel" buttonLabel="Cancel" type="button"/></a>
      <Button typeOfButton="save" buttonLabel="Save" type="submit" />
    </div>
  </form>
</main>

<style>
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
  .submission-buttons {
    display: flex;
    justify-content: end;
  }
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
    .submission-buttons{
      display: flex;
      flex-direction: column;
    }
    
  }
</style>

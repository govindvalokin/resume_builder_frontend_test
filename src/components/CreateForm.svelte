<script>
    import Address2 from "./Address2.svelte";
    import BasicDetails from "./BasicDetails.svelte";
    import Button from "../BasicComponents/Button.svelte";
    import Education from "./Education.svelte";
    import Skills from "./Skills.svelte";
    import SocialMedia from "./SocialMedia.svelte";
    import Work from "./Work.svelte";
    import ProjectDetails from "./ProjectDetails.svelte";
    import { prevent_default } from "svelte/internal";
    
    
    import {validateEmail, validateName, validatePhone,validateUrl,validateSummary,validateAddress,validateStreet,validateCity,validatePincode,validateCountry,validateQualification,validateCourseName,validateInstitute,validateLocation} from "./validation";
    export let backward_link = "< Back to all Resume List";

    let showError = false;

    export let form_data = {};

    export let name = "";
    export let email = "";
    export let phone = "";
    export let image_url = "";
    export let summary = "";

    export let address = "";
    export let street = "";
    export let city = "";
    export let pincode = "";
    export let country = "";

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
    export let social_media = [{ network: "", url: "", user_name: "" }];
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
    export let skills = [{ skill_name: "", level: "" }];
    export let project = [
        { project_title: "", skills_earned: "", description: "" },
    ];

    function handleSubmit() {
        form_data = {
        basic_details:{
                name,
                email,
                phone,
                image_url,
                summary,
                },
        location_details:{
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
        for (let i = 0; i < education.length; i++){
            let qualificationCheck = validateQualification(education[i].qualification);
            let courseNameCheck = validateCourseName(education[i].course_name);
            let instituteCheck = validateInstitute(education[i].institute_name);
            let locationCheck = validateLocation(education[i].location);
            if (    qualificationCheck != "" ||    courseNameCheck != "" ||    instituteCheck != "" ||    locationCheck != "") {
                    educationErrors.push({
                        index: i,
                        qualificationError : qualificationCheck,
                        courseNameError : courseNameCheck,
                        instituteError : instituteCheck,
                        locationError : locationCheck


                    })
                }
            };
        if (phoneCheck != "" || emailCheck != "" || imageUrlCheck != "" || nameCheck != "" ||  summaryCheck != "") {
            prevent_default();
            showError = true;
            window.scrollTo(0,0);
            
        }
        else if (addressCheck != "" || streetCheck != "" ||    cityCheck != "" ||    pincodeCheck != "" ||    countryCheck != "") {
            prevent_default(); 
            showError = true;
            window.scrollTo(0,0);   
        }else if ( educationErrors != "") {
            prevent_default();
            showError = true;
            window.scrollTo(0,0);
        }
        
        else {
            console.log(JSON.stringify(form_data, null, 2));
        }
    }
</script>

<main>
    {#if showError}
    <div class="Alert">
        <p class="WarningMessage">Please fill required Fields correctly</p>
        <p class="CloseButton" on:click={() => (showError = false)} >&times;</p>
        
    </div>
    {/if}
    <div class="formHeading">
        <a href="#/">{backward_link}</a>
        <h2>Add Resume Content</h2>
    </div>
    <form on:submit|preventDefault={handleSubmit}>
        <BasicDetails
            bind:name
            bind:email
            bind:phone
            bind:image_url
            bind:summary
        />
        <Address2
            bind:address
            bind:street
            bind:city
            bind:pincode
            bind:country
        />
        <Education bind:education />
        <SocialMedia bind:social_media />
        <Work bind:work />
        <Skills bind:skills />
        <ProjectDetails bind:project />
        <div class="submissionButtons">
            <Button typeOfButton="cancel" button_label="cancel" />
            <Button typeOfButton="save" button_label="save" type="submit" />
        </div>
    </form>
</main>

<style>
    .formHeading {
        width: 100%;
        height: auto;
        background-color: #e7ebef;

        padding-top: 8px;
        padding-left: 4px;

    }
    h2{
        margin: 0;
        padding-top: 6px;
        padding-bottom: 6px;
    }
    .submissionButtons {
        display: flex;
        justify-content: end;
    }
    .WarningMessage{
        margin: 0;
        text-align: center;
        color: red;
        width: 95%;
    }
    .CloseButton{
        margin: 0;
        text-align: center;
        cursor: pointer;
        width: 5%;
    }
    .Alert{
        background-color: #d5b5b5;
        display: flex;
        padding: 5px;

    }
</style>

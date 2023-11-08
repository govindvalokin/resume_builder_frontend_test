<script>
    import Address2 from "./Address2.svelte";
    import BasicDetails from "./BasicDetails.svelte";
    import Button from "../BasicComponents/Button.svelte";
    import Education from "./Education.svelte";
    import Skills from "./Skills.svelte";
    import SocialMedia from "./SocialMedia.svelte";
    import Work from "./Work.svelte";
    import ProjectDetails from "./ProjectDetails.svelte";
    export let backward_link = '< Back to all Resume List'

    export let form_data = {};
    export let name = '';
    export let email = '';
    export let phone = '';
    export let image_url = '';
    export let summary = '';

    export let address = '';
    export let street = '';
    export let city = '';
    export let pincode = '';
    export let country = '';

    export let qualification='';
    export let course_name = '';
    export let institute_name = '';
    export let location ='';
    export let academic_year_start='';
    export let accademic_year_end='';

    export let network = '';
    export let url = '';
    export let user_name = '';

    export let organisation = '';
    export let job_role = '';
    export let job_location = '';
    export let key_roles = '';
    export let start_date = '';
    export let end_date = '';

    export let skill_name = '';
    export let level = '';

    export let project_title = '';
    export let skills_earned = '';
    export let description = '';
    
    function handleSubmit(){
        form_data = {
            basic_data:{
                name,
                email,
                phone,
                image_url,
                summary,
            },
            location_data:{
                address,
                street,
                city,
                pincode,
                country
            },
            education:{
                qualification,
                course_name,
                institute_name,
                location,
                academic_year_start,
                accademic_year_end
            },
            social_media_data:{
                network,
                url,
                user_name
            },
            work_data:{
                organisation,
                job_role,
                job_location,
                key_roles,
                start_date,
                end_date
            },
            skill_data:{
                skill_name,
                level
            },
            project_data:{
                project_title,
                skills_earned,
                description
            }
        };
        console.log(JSON.stringify(form_data)); 
    }
    
</script>
<main>
    <div class="formHeading">
        <a href="">{backward_link}</a>
        <h2>Add Resume Content</h2>
    </div>
    <form on:submit|preventDefault={handleSubmit}>

        <BasicDetails bind:name bind:email bind:phone bind:image_url bind:summary/>
        <Address2 bind:address bind:street bind:city bind:pincode bind:country/>
        <Education bind:qualification bind:course_name bind:institute_name bind:location bind:academic_year_start bind:accademic_year_end/>
        <SocialMedia bind:network bind:url bind:user_name />
        <Work bind:organisation bind:job_role bind:job_location bind:key_roles bind:start_date bind:end_date />
        <Skills bind:skill_name bind:level />
        <ProjectDetails  bind:project_title bind:skills_earned bind:description />
        <div class="submissionButtons">
            <Button typeOfButton="cancel" button_label="cancel"/>
            <Button typeOfButton="save" button_label="save" type="submit"/>
        </div>
    </form>
</main>
<style>
    .formHeading{
        width: 100%;
        height: auto;
        background-color: #F9FAFB;
    }
    .submissionButtons{
        display: flex;
        justify-content: end;
    }

</style>
<script>
    import Address2 from "./Address2.svelte";
    import BasicDetails from "./BasicDetails.svelte";
    import Button from "./Button.svelte";
    import Education from "./Education.svelte";
    import Skills from "./Skills.svelte";
    import SocialMedia from "./SocialMedia.svelte";
    import Work from "./Work.svelte";
    import ProjectDetails from "./projectDetails.svelte";
    export let backward_link = '< Back to all Resume List'

</script>
<main>
    <div class="formHeading">
        <a href="">{backward_link}</a>
        <h2>Add Resume Content</h2>
    </div>
    <form>

        <BasicDetails/>
        <Address2/>
        <Education/>
        <SocialMedia/>
        <Work/>
        <Skills/>
        <ProjectDetails/>
        <div class="submissionButtons">
            <Button typeOfButton="cancel" button_label="cancel"/>
            <Button typeOfButton="save" button_label="save"/>
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
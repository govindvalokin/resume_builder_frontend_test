<script>
  import CreateForm from "./components/CreateForm.svelte";
  import ListingPage from "./listingpage/components/ListingPage.svelte";
  import Router from "svelte-spa-router";
  import EditResumeForm from "./Edit/EditResumeForm.svelte";

  let routes = {
    "/": ListingPage,
    "/CreateForm": CreateForm,
    "/EditResumeForm": EditResumeForm,

    // "*": NotFound
  };
</script>

<Router {routes} />

<style>
</style>

<script>
    import EditForm from "./Edit/EditForm.svelte";
    import CreateForm from "./components/CreateForm.svelte";
    import ListingPage from "./listingpage/components/ListingPage.svelte";
    import Router from "svelte-spa-router"

    let routes = {
        "/": ListingPage,
        "/CreateForm": CreateForm,
        "/EditForm" : EditForm,

        // "*": NotFound
    }
    
</script>

	
    <Router {routes}/>
    
<style>
	
</style>

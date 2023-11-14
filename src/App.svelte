<script>
	
    import CreateForm from "./components/CreateForm.svelte";
    import ListingPage from "./listingpage/components/ListingPage.svelte";
    import Router from "svelte-spa-router"

    let routes = {
        "/": ListingPage,
        "/CreateForm": CreateForm,

        // "*": NotFound
    }
    
</script>

	<!-- <CreateForm/>
    <ListingPage/> -->
    <Router {routes}/>
<style>
	
</style>

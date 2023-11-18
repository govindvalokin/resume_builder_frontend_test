<script>
    import Icon from '@iconify/svelte';
    import searchIcon from '@iconify/icons-material-symbols/search';
    export let add_new = "+ Add New Resume";
    
    export let email;
    export let searchData;
    async function apiSearchResumeByEmail(email) {
    try {
      const response = await fetch(`http://127.0.0.1:8000/search-resume/${email}`, {
        method: 'GET'
      });
      const data = await response.json();
      console.log(data);
      searchData = data;
    } catch (error) {
      console.error(error);
    }
}
</script>
<main>
    <h1>Resumes</h1><hr>
    <div class="nav-content">
        <div class="search-bar">
            <input type="search" placeholder="Search by Email" bind:value={email} >
            <div class="search-icon-class" on:click={apiSearchResumeByEmail(email)}>
                <Icon icon={searchIcon} width = "20px"/>
            </div>     
        </div>
        <div class="add-new">
            <a href="#/CreateForm">{add_new}</a>
        </div>
    </div>
</main>
<style>
    input[type="search"]{
        width: 300px;
        height: 33px;
    }
    
    .search-icon-class{
        
        width: 24px;
        height: 27px;
        padding-left: 3px;
        padding-top: 4px;
        border: 1px solid black;
        background-color: #c1bdba;
        border-radius: 3px;
        cursor: pointer;
    }
    .search-bar{
        display: flex;
    }
    .nav-content{
        display: flex;
        justify-content: space-between;
        background-color: #e7ebef;
        padding-top: 9px;
        /* margin-bottom: 5px; */
        height: auto;
        padding-left: 3px;
        padding-right: 6px;
        
    }
    .add-new{
        padding-top: 6px;
    }
    h1{
        margin-bottom: 5px;
        margin-top: 5px;
        font-weight: normal;
        padding-left: 2px;
        font-family: ui-sans-serif;
    }
    main{
        background-color: #e7ebef;
        margin-bottom: 8px;
    }
    hr{
        margin: 0px;
    }
    input[type="search"]{
        background-color: #e7ebef;
        border: 1px solid black;
    }
    
    
</style>
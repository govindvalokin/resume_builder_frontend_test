<script>
    import Icon from '@iconify/svelte';
    import searchIcon from '@iconify/icons-material-symbols/search';
    export let add_new = "+ Add New Resume";
    
    
</script>
<main>
    <h1>Resumes</h1><hr>
    <div class="NavContent">
        <div class="SearchBar">
            <input type="search" placeholder="Search by Name or Email" >
            <div class="SearchIconClass">
                <Icon icon={searchIcon}/>
            </div>     
        </div>
        <div class="AddNew">
            <a href="">{add_new}</a>
        </div>
    </div>
</main>
<style>
    input[type="search"]{
        width: 300px;
    }
    
    .SearchIconClass{
        
        width: 24px;
        height: auto;

        padding-top: 8px;
        margin-left: 4px;
    }
    .SearchBar{
        display: flex;
    }
    .NavContent{
        display: flex;
        justify-content: space-between;
        background-color: #d7d7d7;
        padding-top: 9px;
        /* margin-bottom: 5px; */
        height: auto;
        
    }
    .AddNew{
        padding-top: 6px;
    }
    h1{
        margin-bottom: 5px;
        margin-top: 5px;
        font-weight: normal;
    }
    main{
        background-color: #d7d7d7;
    }
    hr{
        margin: 0px;
    }
    input[type="search"]{
        background-color: #d7d7d7;
        border: 1px solid black;
    }
    
    
</style>
<script>
    import Icon from '@iconify/svelte';
    import searchIcon from '@iconify/icons-material-symbols/search';
    export let add_new = "+ Add New Resume";
    
    
</script>
<main>
    <h1>Resumes</h1><hr>
    <div class="NavContent">
        <div class="SearchBar">
            <input type="search" placeholder="Search by Email" >
            <div class="SearchIconClass">
                <Icon icon={searchIcon}/>
            </div>     
        </div>
        <div class="AddNew">
            <a href="#/CreateForm">{add_new}</a>
        </div>
    </div>
</main>
<style>
    input[type="search"]{
        width: 300px;
    }
    
    .SearchIconClass{
        
        width: 24px;
        height: 27px;

        padding-top: 8px;
        
    }
    .SearchBar{
        display: flex;
    }
    .NavContent{
        display: flex;
        justify-content: space-between;
        background-color: #e7ebef;
        padding-top: 9px;
        /* margin-bottom: 5px; */
        height: auto;
        padding-left: 3px;
        padding-right: 6px;
        
    }
    .AddNew{
        padding-top: 6px;
    }
    h1{
        margin-bottom: 5px;
        margin-top: 5px;
        font-weight: normal;
        padding-left: 2px;
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
<script>
  import Icon from "@iconify/svelte";
  import dotsY from "@iconify/icons-pepicons-pop/dots-y";
  import { onMount } from "svelte";

  import searchIcon from "@iconify/icons-material-symbols/search";
  import SelectInputBlock from "../../BasicComponents/SelectInputBlock.svelte";
  export let add_new = "+ Add New Resume";

  //To handle delete confirmation box
  export let deleteId;
  export let open = false;
  function handleDeleteBox(id) {
    open = !open;
    deleteId = id;
    console.log(deleteId);
  }

  //To handle Edit and Delete menu
  export let show_menu = false;
  let selectedId = null;
  function toggleMenu(id) {
    show_menu = !show_menu;
    selectedId = id;
  }

  export let editId = "";
  //Function to pass individual id to edit page
  function passEditId(id){
    editId = id;
    window.history.pushState({editId}, null, "#/EditResumeForm");
    document.location.reload();
    dispatchEvent(new Event('popstate'))

  }

  //Filter
  export let options = [
        "India",
        "Canada",
        "United Kingdom",
        "United States",
        "Australia",
        "China",
        "Qatar",
    ];
  export let selectValue="";
  export let defaultValue='All';



  //Sort
  export let sortOptions = [
        "Name",
        "Id"        
    ];
  export let selectSortValue="";
  

  
  // GET api for fetching all resumes
    let data = [];
    async function getAllResumes(selectSortValue){
      const response = await fetch("http://127.0.0.1:8000/resumes");
      const parsedData = await response.json();
      console.log(parsedData);
      

      const dataArray = Object.values(parsedData);

      if (selectSortValue === "Name") {
        data = dataArray.sort((a, b) => a.name.localeCompare(b.name));
        console.log(dataArray);
      } else if (selectSortValue === "Id") {
        data = dataArray.sort((a, b) => a.id - b.id);
      } else {
        data = dataArray;
      }
    }
    onMount(getAllResumes)


  //Delete API
  let deleteSuccessMessage = "";
  function apiDeleteFunction() {
    fetch(`http://127.0.0.1:8000/delete-data/${deleteId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    open = false;
    window.location.reload();
    deleteSuccessMessage = "Successfully deleted";
    window.scrollTo(0, 0);
  }


  // Search API
  export let email;
  export let searchData=null;
  async function apiSearchResumeByEmail(email) {
    if (email.trim() != "") {
      const response = await fetch(
        `http://127.0.0.1:8000/search-resume-all/${email}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log(data);
      searchData = data;
    } else {
      // console.error(error);
      searchData = null;
    }
  }

  //Filter API
  export let filterData = "";
  async function apiFilterResumeByCountry(){
    if (selectValue != ""){
      const response = await fetch(`http://127.0.0.1:8000/filter-resumes/${selectValue}`,
      {
        method: "GET",
      }
      );
      const data = await response.json();
      console.log(data);
      // filterData = data;

      const dataArray = Object.values(data);

      if (selectSortValue === "Name") {
        filterData = dataArray.sort((a, b) => a.name.localeCompare(b.name));
        console.log(dataArray);
      } else if (selectSortValue === "Id") {
        filterData = dataArray.sort((a, b) => a.id - b.id);
      } else {
        filterData = dataArray;
      }

      
    }
    else {
      // console.error(error);
      searchData = null;
    }
  }
</script>

<main>
  {#if open}
    <!-- Delete confirmation box -->

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="back-ground" on:click={handleDeleteBox}>
      <div class="content-box">
        <p>Are you sure want to delete?</p>
        <div class="confirm-buttons">
          <!-- svelte-ignore missing-declaration -->
          
          <button class="delete" on:click={apiDeleteFunction}>Delete</button>
          <button class="cancel" on:click={handleDeleteBox}>Cancel</button>
        </div>
      </div>
    </div>
  {/if}
  <!-- delete success message -->
  {#if deleteSuccessMessage != ""}
        <div class="alert-success">
            <p class="success-message">{deleteSuccessMessage}</p>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <p class="close-button" on:click={() => (deleteSuccessMessage = "")} >&times;</p>
        </div>
  {/if}
  <!-- nav-bar -->
  <div class="nav-bar">
    <h1>Resumes</h1>
    <hr />
    <div class="nav-content">
      <div class="search-bar">
        <input type="search" placeholder="Search by Email" bind:value={email} />
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="search-icon-class" on:click={apiSearchResumeByEmail(email)}>
          <Icon icon={searchIcon} width="20px" />
        </div>
      </div>
      <div class="sort-and-filter">
<!-- Country Filter -->
        <div class="country-filter">
          <!-- Select input box -->
          <div class="input-entry">
            <select bind:value={selectValue} on:change={apiFilterResumeByCountry(selectValue)}>
                <option value="" id="country-filter-first-option">Filter</option>
                <option value="">{defaultValue}</option> 
                {#each options as option}
                    <option value={option}>{option}</option>
                {/each}
            </select>
        </div>
        </div>
<!-- Sort Options       -->
        <div class="sort">
          <!-- Select input box -->
          <div class="input-entry">
            <select bind:value={selectSortValue} on:change={() => {getAllResumes(selectSortValue); apiFilterResumeByCountry();}}>
                <option value="">Sort by</option>
                <option value="">None</option> 
                {#each sortOptions as sortOption}
                    <option value={sortOption}>{sortOption}</option>
                {/each}
            </select>
        </div>
        </div>
      </div>


      <!-- add new form button -->
      <div class="add-new">
        <a href="#/CreateForm">{add_new}</a>
      </div>
    </div>
  </div>
  <!-- Listing table -->
  <table>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th id="icon-heading" />
    </tr>
    <!-- for search api call -->
    
    <!-- Search API -->
    {#if searchData != null}
      {#each Object.entries(searchData) as [Key, value]}
        <tr>
          <td>{value.id}</td>
          <td>{value.name}</td>
          <td>{value.email}</td>
          <td>{value.phone}</td>
          <td id="icon-column">
            
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="icon-container" on:click={toggleMenu(value.id)}>
              <Icon icon={dotsY} />
            </div>
            {#if show_menu && selectedId === value.id}
              <div class="dropdown-content">
                <a href="#/EditResumeForm" on:click={() => {
                    show_menu = false; passEditId(value.id);
                  }}>Edit</a>
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a
                  href="#" on:click={() => {
                    show_menu = false;
                    handleDeleteBox(value.id);
                  }}>Delete</a>
              </div>
            {/if}
          </td>
        </tr>
      {/each}    
    <!-- Filter data   -->
    {:else if selectValue != ""}
    {#each Object.entries(filterData) as [Key, Value]}
    <tr>
      <td>{Value.id}</td>
      <td>{Value.name}</td>
      <td>{Value.email}</td>
      <td>{Value.phone}</td>
      <td id="icon-column">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="icon-container" on:click={toggleMenu(Value.id)}>
          <Icon icon={dotsY} />
        </div>
        {#if show_menu && selectedId === Value.id}
          <div class="dropdown-content">
            <a href="#/EditResumeForm" on:click={() => {
                show_menu = false; passEditId(Value.id);
              }}>Edit</a>
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a href="#" on:click={() => {
                show_menu = false;
                handleDeleteBox(Value.id);
              }}>Delete</a>
          </div>
        {/if}
      </td>
    </tr>
    {/each}
    {:else}
    <!-- For list all resumes using API -->
      {#each Object.entries(data) as [Key, Value]}
        <tr>
          <td>{Value.id}</td>
          <td>{Value.name}</td>
          <td>{Value.email}</td>
          <td>{Value.phone}</td>
          <td id="icon-column">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="icon-container" on:click={toggleMenu(Value.id)}>
              <Icon icon={dotsY} />
            </div>
            {#if show_menu && selectedId === Value.id}
              <div class="dropdown-content">
                <a href="#/EditResumeForm" on:click={() => {
                    show_menu = false; passEditId(Value.id);
                  }}>Edit</a>
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a href="#" on:click={() => {
                    show_menu = false;
                    handleDeleteBox(Value.id);
                  }}>Delete</a>
              </div>
            {/if}
          </td>
        </tr>
      {/each}
    {/if}
  </table>
</main>

<style>
  table {
    border: 1px solid black;
    width: 100%;
    border-collapse: collapse;
  }
  table tr:first-child {
    /* border: 1px solid black;  */
    background-color: #d6dde5;
    border-collapse: collapse;
    height: 30px;
  }
  td {
    text-align: left;
    height: 30px;
    font-family: ui-rounded;
  }
  th {
    text-align: left;
    font-family: ui-rounded;
  }
  ul {
    width: 30px;
    height: auto;
  }
  .icon-container {
    /* background-color: green; */
    height: auto;
    position: relative;
    cursor: pointer;
  }
  .dropdown-content {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 62px;
    border-radius: 5px;
    height: 48px;
    padding: 5px;
    /* background-color: gray; */
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
  #icon-column {
    width: 138px;
    height: 37px;
    text-align: center;
  }
  #icon-heading {
    width: 138px;
  }
  .dropdown-content a {
    margin-bottom: 7px;
  }

  .back-ground {
    background: rgba(0, 0, 0, 0.8);
    height: 100%;
    width: 100%;
    position: fixed;
    /* display: none; */
  }
  .confirm-buttons {
    display: flex;
    justify-content: center;
    margin-top: 4px;
  }
  .content-box {
    width: 400px;
    height: 100px;
    background-color: rgb(231 231 231);
    border-radius: 7px;
    text-align: center;
    margin: 0 auto;
    position: relative;
    top: 35%;
  }
  p {
    margin: 0px;
    padding-top: 12px;
  }
  .cancel {
    width: 100px;
    background-color: white;
    color: black;
    border-radius: 5px;
    margin: 10px 5px 10px 5px;
  }


  .delete {
    width: 100px;
    background-color: #209fa4;
    color: white;
    border-radius: 5px;
    margin: 10px 5px 10px 5px;
  }

  input[type="search"] {
    width: 300px;
    height: 33px;
  }

  .search-icon-class {
    width: 24px;
    height: 27px;
    padding-left: 3px;
    padding-top: 4px;
    border: 1px solid black;
    background-color: #c1bdba;
    border-radius: 3px;
    cursor: pointer;
  }
  .search-bar {
    display: flex;
  }
  .nav-content {
    display: flex;
    justify-content: space-between;
    background-color: #e7ebef;
    padding-top: 9px;
    /* margin-bottom: 5px; */
    height: auto;
    padding-left: 3px;
    padding-right: 6px;
  }
  .add-new {
    padding-top: 6px;
  }
  h1 {
    margin-bottom: 5px;
    margin-top: 5px;
    font-weight: normal;
    padding-left: 2px;
    font-family: ui-sans-serif;
  }
  .nav-bar {
    background-color: #e7ebef;
    margin-bottom: 8px;
  }
  hr {
    margin: 0px;
  }
  input[type="search"] {
    background-color: #e7ebef;
    border: 1px solid black;
  }
  .alert-success{
        background-color: #a1e566;
        display: flex;
        padding: 5px;
  }
  .success-message{
        margin: 0;
        text-align: center;
        color: rgb(62, 49, 177);
        width: 95%;
  }
  .country-filter{
    width: 160px;
    /* margin-left: 350px; */
  }
 
  .sort{
    width: 160px;
  }
  .sort select{
    width: 160px;
  }
  .sort-and-filter{
    display: flex;
  }
  .sort select option:first-child{
      display: none;
        
    }
  #country-filter-first-option{
    display: none;
  }
</style>

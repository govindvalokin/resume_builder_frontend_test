<script>
  import Icon from "@iconify/svelte";
  import dotsY from "@iconify/icons-pepicons-pop/dots-y";
  import Button from "../../BasicComponents/Button.svelte";
  // import DeleteBox from './DeleteBox.svelte';
  import { onMount } from "svelte";

  import searchIcon from "@iconify/icons-material-symbols/search";
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

  //API get operation

  //GET api for fetching all resumes
  let data = [];
  onMount(async () => {
    const response = await fetch("http://127.0.0.1:8000/resumes");
    const parsedData = await response.json();
    data = parsedData;
    console.log(data);
  });

  //Delete API
  function apiDeleteFunction() {
    fetch(`http://127.0.0.1:8000/delete-data/${deleteId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    open = false;
    window.location.reload();
  }

  //Search API
  export let email;
  export let searchData;
  async function apiSearchResumeByEmail(email) {
    if (email.trim() != "") {
      const response = await fetch(
        `http://127.0.0.1:8000/search-resume/${email}`,
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
          <!-- <Button typeOfButton="save" type="submit" button_label="Delete"/> -->
          <button class="delete" on:click={apiDeleteFunction}>Delete</button>
          <!-- <input type="submit" class="delete" on:click={apiDeleteFunction} value="Delete"> -->
          <button class="cancel" on:click={handleDeleteBox}>Cancel</button>
        </div>
      </div>
    </div>
  {/if}
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
      <div class="add-new">
        <a href="#/CreateForm">{add_new}</a>
      </div>
    </div>
  </div>
  <table>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th id="icon_heading" />
    </tr>
    {#if searchData != null}
      <tr>
        <td>{searchData.id}</td>
        <td>{searchData.name}</td>
        <td>{searchData.email}</td>
        <td>{searchData.phone}</td>
        <td id="icon_column">
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div class="icon-container" on:click={toggleMenu(searchData.id)}>
            <Icon icon={dotsY} />
          </div>
          {#if show_menu && selectedId === searchData.id}
            <div class="dropdown-content">
              <!-- <a href="#">Edit</a> -->
              <!-- <a href="#" on:click={handleDelete,}>Delete</a> -->

              <a
                href="#"
                on:click={() => {
                  show_menu = false;
                }}>Edit</a
              >
              <a
                href="#"
                on:click={() => {
                  show_menu = false;
                  handleDeleteBox(searchData.id);
                }}>Delete</a
              >

              <!-- <button id="edit_button">Edit</button>
                        <button id="delete_button">Delete</button> -->
            </div>
          {/if}
        </td>
      </tr>
    {:else}
      {#each Object.entries(data) as [Key, Value]}
        <tr>
          <td>{Value.id}</td>
          <td>{Value.name}</td>
          <td>{Value.email}</td>
          <td>{Value.phone}</td>
          <td id="icon_column">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="icon-container" on:click={toggleMenu(Value.id)}>
              <Icon icon={dotsY} />
            </div>
            {#if show_menu && selectedId === Value.id}
              <div class="dropdown-content">
                <!-- <a href="#">Edit</a> -->
                <!-- <a href="#" on:click={handleDelete,}>Delete</a> -->

                <a
                  href="#"
                  on:click={() => {
                    show_menu = false;
                  }}>Edit</a
                >
                <a
                  href="#"
                  on:click={() => {
                    show_menu = false;
                    handleDeleteBox(Value.id);
                  }}>Delete</a
                >

                <!-- <button id="edit_button">Edit</button>
                            <button id="delete_button">Delete</button> -->
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
  #icon_column {
    width: 138px;
    height: 37px;
    text-align: center;
  }
  #icon_heading {
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

  /* #edit_button{
    width: 61px;
    height: 24px;
    padding: 0px;
    margin: 0px;
    background-color: white;
    border: none;
    cursor: pointer;
}
#delete_button{
    width: 61px;
    height: 24px;
    padding: 0px;
    margin: 0px;
    background-color: white;
    border: none;
    cursor: pointer;
} */

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
</style>

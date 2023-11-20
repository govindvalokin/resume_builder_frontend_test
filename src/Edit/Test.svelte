<script>
  //Search API
  export let email="";
  export let searchData;
  export let phoneno;
  async function apiSearchResumeByEmail(email) {
    if (email != "") {
      const response = await fetch(
        `http://127.0.0.1:8000/search-resume/${email}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log(data);
      searchData = data;
      phoneno = searchData.phone
      

    } else {
      console.error(error);
      searchData = null;
    }
  }
  
function update(){
        console.log(phoneno)
      }
  

 
</script>

<main>
  <input type="text" bind:value={email} />
  <button on:click={apiSearchResumeByEmail(email)}>search</button>
  <input type="text" bind:value={phoneno}>
  <button on:click={update(phoneno)}>click</button>
</main>

<style>
</style>

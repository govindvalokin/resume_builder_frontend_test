<script>
import Icon from '@iconify/svelte';
import dotsY from '@iconify/icons-pepicons-pop/dots-y';
    


export let show_menu = false;
function toggleMenu() {
     show_menu = !show_menu;
   }



</script>
<main>
    
    <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th id="icon_heading"></th>
        </tr>
        <tr>
            <td>adsa</td>
            <td>das</td>
            <td>da</td>
            <td>asda</td>
            <td id="icon_column">
                <div class="IconContainer" on:click={toggleMenu}>
                    <Icon icon={dotsY}/>
                </div>
                {#if show_menu}
                    <div class="dropdown-content">
                        <a href="#">Edit</a>
                        <a href="#">Delete</a>
                    </div>
                {/if}
            </td>
        </tr>
    </table>
</main>
<style>
table{
    border: 1px solid black;
    width: 100%;
    border-collapse: collapse;
}
table tr:first-child{
   /* border: 1px solid black;  */
   background-color: #d6dde5;
   border-collapse: collapse;
   height: 30px;
}
td{
    text-align: left;
    height: 30px;
}
th{
    text-align: left;
}
ul{
    width: 30px;
    height: auto;
}
.IconContainer{
    /* background-color: green; */
    height: auto;
    position: relative;
    cursor: pointer;
}
.dropdown-content{
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 62px;
    border-radius: 5px;
    height: 48px;
    padding: 5px;
    /* background-color: gray; */
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}
#icon_column{
    width:138px;
    height: 37px;
    text-align: center;
}
#icon_heading{
    width:138px;

}
.dropdown-content a{
    margin-bottom: 7px;
}

</style>
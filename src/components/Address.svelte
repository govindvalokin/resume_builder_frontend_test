<script>
     let addressValues = {
                    address: '',
                    street:'',
                    city:'',
                    country:'',
                    pincode:'',
                }

</script>

<main>
    <form>
        <div class="contentBox">
            <h3 class="subTitle">Location</h3>
                <div class="formContent">
                    <div class="inputField">
                        <div class="label">
                            <label for="address">Address</label>
                        </div>
                        <div class="inputEntry">
                            <input id="address" type="text" placeholder="Add Address"/>
                        </div>                        
                    </div>
                    <div class="inputField">
                        <div class="label">
                            <label for="street">Street</label>
                        </div>
                        <div class="inputEntry">
                            <input id="street" type="text" placeholder="Add Street"/>
                        </div>    
                    </div>
                    <div class="inputField">
                        <div class="label">
                            <label for="city">City</label>
                        </div>
                        <div class="inputEntry">
                            <input id="city" type="text" placeholder="Add City"/>
                        </div>
                    </div>
                    <div class="inputField">
                        <div class="label">
                            <label for="country">Country</label>
                        </div>
                        <div class="inputEntry">
                            <input id="country" type="text" placeholder="Add Country"/>
                        </div>
                    </div>
                    <div class="inputField">
                        <div class="label">
                            <label for="pincode">Pincode</label>
                        </div>
                        <div class="inputEntry">
                            <input id="pincode" type="text" placeholder="Add Pincode"/>
                        </div>        
                    </div>
                </div>    
        </div>
    </form>
</main>
<style>
    form{
        /* background-color: green; */
        height: auto;
        width: 100%;
        /* margin: 0 auto; */
    }
    h3{
        width: 100%;
    }
    .inputField{
        display: flex;
        border: solid .1px gray; 
        height: 43px;
    }
    .label{
        width: 20%;
        background-color: silver;
        height: 43px;
           
    }
    label{
        padding-left: 12px;
        padding-top: 10px;
    }
    .inputEntry{
        width: 80%;
        height: 43px;
    }
    input[type='text']{
        width:100%;
        height:38px;
        padding-left: 5px;
        border-radius: 0px;
        margin: 0px;
    }
    .subTitle::before{
        content: '+';
        position: absolute;
        right: 25px;
        
    }
    /* .formContent{
        height: 0px;
        overflow: hidden;
    } */

</style>
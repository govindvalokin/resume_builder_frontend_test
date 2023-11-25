<script>
    import InputBlock from "../BasicComponents/TextInputBlock.svelte";
    import SelectComponent from "../BasicComponents/SelectInputBlock.svelte";
    import Icon from '@iconify/svelte';
    export let country_options = [
        "India",
        "Canada",
        "United Kingdom",
        "United States",
        "Australia",
        "China",
        "Qatar",
    ];
    export let open = false;
    import { slide } from "svelte/transition";
    import { validateAddress, validatePincode, validateStreet, validateCity, validateCountry } from "./validation";
    
    // Function for handling accordion
    const handleClick = () => (open = !open);

    export let address = "";
    export let street = "";
    export let city = "";
    export let pincode = "";
    export let country = "";
</script>

<main>
    <!-- Accordion content -->
    <div class="content-box">
        <div class="accordion-heading">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <h3 class="sub-title" on:click={handleClick}>Location Details <span class="mandatory-star">*</span></h3>
            <!-- For controling upward and downward arrows -->
            <div class="upword-arrow">
                {#if open}
                    <Icon icon="ic:baseline-keyboard-arrow-up" width = "24" height= "24" color="black"/>
                {:else}
                <Icon icon="material-symbols:keyboard-arrow-down" width = "24" height= "24" color="black"/>
                {/if}
            </div>
        </div>
        <!-- Accordion content -->
        {#if open}
            <div class="active" transition:slide>
                <InputBlock
                    placeholder="Add Address Line"
                    id="address"
                    label="Address"
                    bind:value={address}
                />
                <!-- Error message display -->
                <div class="errors">{address && validateAddress(address)}</div>

                <InputBlock
                    placeholder="Add Street Name"
                    id="street"
                    label="Street"
                    bind:value={street}
                />
                <!-- Error message display -->
                <div class="errors">{street && validateStreet(street)}</div>

                <InputBlock
                    placeholder="Add City Name"
                    id="city"
                    label="City"
                    bind:value={city}
                />
                <!-- Error message display -->
                <div class="errors">{city && validateCity(city)}</div>

                <SelectComponent
                    label="Country"
                    options={country_options}
                    bind:value={country}
                    defaultValue="Choose your Country"
                />
                <!-- Error message display -->
                <div class="errors">{country && validateCountry(country)}</div>
                
                <InputBlock
                    placeholder="Add Pincode"
                    id="pincode"
                    label="Pincode"
                    bind:value={pincode}
                />
                <!-- Error message display -->
                <div class="errors">{pincode && validatePincode(pincode)}</div>
            </div>
        {/if}
    </div>
</main>

<style>
    h3 {
        width: 95%;
        padding-left: 10px;
        font-family: initial
    }
    h3:hover {
        cursor: pointer;
    }

    /* .subTitle::before {
        content: "+";
        position: absolute;
        right: 25px;
    } */
    .content-box{
        border: 1px solid white;
        margin-top: 10px;
        margin-bottom: 10px;
        /* box-shadow: 0 20px 10px -20px rgba(0,0,0,0.45) inset, 0 -20px 10px -20px rgba(0,0,0,0.45) inset; */
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }
    .accordion-heading{
        display: flex;

    }
    .upword-arrow{
        width: 5%;
        padding-top: 18px;
    }
    .errors{
        color: red;
        /* padding-left: 240px; */
        text-align: start;
        width: 100%;
        font-size: small;
    }
    .mandatory-star{
        color: red;
    }
</style>

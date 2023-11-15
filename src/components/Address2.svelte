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
    const handleClick = () => (open = !open);

    export let address = "";
    export let street = "";
    export let city = "";
    export let pincode = "";
    export let country = "";
</script>

<main>
    <div class="contentBox">
        <div class="AccordionHeading">
            <h3 class="subTitle" on:click={handleClick}>Location Details</h3>
            <div class="UpwordArrow">
                {#if open}
                    <Icon icon="ic:baseline-keyboard-arrow-up" width = "24" height= "24" color="black"/>
                {:else}
                <Icon icon="material-symbols:keyboard-arrow-down" width = "24" height= "24" color="black"/>
                {/if}
            </div>
        </div>
        {#if open}
            <div class="Active" transition:slide>
                <InputBlock
                    placeholder="Add Address Line"
                    id="address"
                    label="Address"
                    bind:value={address}
                />
                <div class="errors">{address && validateAddress(address)}</div>
                <InputBlock
                    placeholder="Add Street Name"
                    id="street"
                    label="Street"
                    bind:value={street}
                />
                <div class="errors">{street && validateStreet(street)}</div>
                <InputBlock
                    placeholder="Add City Name"
                    id="city"
                    label="City"
                    bind:value={city}
                />
                <div class="errors">{city && validateCity(city)}</div>
                <SelectComponent
                    label="Country"
                    options={country_options}
                    bind:value={country}
                    default_value="Choose your Country"
                />
                <div class="errors">{country && validateCountry(country)}</div>
                <InputBlock
                    placeholder="Add Pincode"
                    id="pincode"
                    label="Pincode"
                    bind:value={pincode}
                />
                <div class="errors">{pincode && validatePincode(pincode)}</div>
            </div>
        {/if}
    </div>
</main>

<style>
    h3 {
        width: 95%;
    }
    h3:hover {
        cursor: pointer;
    }

    /* .subTitle::before {
        content: "+";
        position: absolute;
        right: 25px;
    } */
    .contentBox{
        border: 1px solid white;
        margin-top: 10px;
        margin-bottom: 10px;
        /* box-shadow: 0 20px 10px -20px rgba(0,0,0,0.45) inset, 0 -20px 10px -20px rgba(0,0,0,0.45) inset; */
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }
    .AccordionHeading{
        display: flex;

    }
    .UpwordArrow{
        width: 5%;
        padding-top: 18px;
    }
    .errors{
        color: red;
        padding-left: 240px;
        width: 100%
    }
</style>

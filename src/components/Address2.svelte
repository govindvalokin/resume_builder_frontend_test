<script>
    import InputBlock from "../BasicComponents/TextInputBlock.svelte";
    import SelectComponent from "../BasicComponents/SelectInputBlock.svelte";
    export let country_options = [
        "India",
        "Caneda",
        "United Kingdom",
        "United States",
        "Australia",
        "China",
        "Qatar",
    ];
    export let open = false;
    import { slide } from "svelte/transition";
    const handleClick = () => (open = !open);

    export let address = "";
    export let street = "";
    export let city = "";
    export let pincode = "";
    export let country = "";
</script>

<main>
    <div class="contentBox">
        <h3 class="subTitle" on:click={handleClick}>Location Details</h3>
        {#if open}
            <div class="Active" transition:slide>
                <InputBlock
                    placeholder="Add Address Line"
                    id="address"
                    label="Address"
                    bind:value={address}
                />
                <InputBlock
                    placeholder="Add Street Name"
                    id="street"
                    label="Street"
                    bind:value={street}
                />
                <InputBlock
                    placeholder="Add City Name"
                    id="city"
                    label="City"
                    bind:value={city}
                />
                <SelectComponent
                    label="Country"
                    options={country_options}
                    bind:value={country}
                    default_value="Choose your Country"
                />
                <InputBlock
                    placeholder="Add Pincode"
                    id="pincode"
                    label="Pincode"
                    bind:value={pincode}
                />
            </div>
        {/if}
    </div>
</main>

<style>
    h3 {
        width: 100%;
    }
    h3:hover {
        cursor: pointer;
    }

    .subTitle::before {
        content: "+";
        position: absolute;
        right: 25px;
    }
    .contentBox{
        border: 1px solid white;
        margin-top: 10px;
        margin-bottom: 10px;
        box-shadow: 0 20px 10px -20px rgba(0,0,0,0.45) inset, 0 -20px 10px -20px rgba(0,0,0,0.45) inset;
    }
</style>

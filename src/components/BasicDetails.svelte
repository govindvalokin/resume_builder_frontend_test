<script>
    import InputBlock from "../BasicComponents/TextInputBlock.svelte";
    import EmailBlock from "../BasicComponents/EmailInputBlock.svelte";
    import UrlBlock from "../BasicComponents/UrlInputBlock.svelte";
    import {validatePhone, validateEmail, validateUrl, validateName, validateSummary} from "./validation"
    

    import Icon from "@iconify/svelte";

    export let open = false;
    import { slide } from "svelte/transition";
    const handleClick = () => (open = !open);

    export let name = "";
    export let email = "";
    export let phone = "";
    export let image_url = "";
    export let summary = "";

   

   
</script>

<main>
    <div class="content-box">
        <div class="accordion-heading">
            <h3 class="sub-title" on:click={handleClick}>Basic Details</h3>
            <div class="upword-arrow">
                {#if open}
                    <Icon
                        icon="ic:baseline-keyboard-arrow-up"
                        width="24"
                        height="24"
                        color="black"
                    />
                {:else}
                    <Icon
                        icon="material-symbols:keyboard-arrow-down"
                        width="24"
                        height="24"
                        color="black"
                    />
                {/if}
            </div>
        </div>

        {#if open}
            <div class="active" transition:slide>
                <InputBlock
                    placeholder="Add Name"
                    id="name"
                    label="Name"
                    bind:value={name}
                />
                <div class="errors">{name && validateName(name)}</div>
                <EmailBlock
                    placeholder="Add Email"
                    id="email"
                    label="Email"
                    bind:value={email}
                />
                <div class="errors">{email && validateEmail(email)}</div>
                <InputBlock
                    placeholder="Add Phone Number"
                    id="phone"
                    label="Phone"
                    bind:value={phone}    
                />
                <div class="errors">{phone && validatePhone(phone)}</div>
            

                <!-- <InputBlock
                    placeholder="Add Phone Number"
                    id="phone"
                    label="Phone"
                    bind:value = "{phone}"
                    on:KeyUp = {validatePhone(phonr)}   
                /> -->

                <UrlBlock
                    placeholder="Add Image URL"
                    id="image-url"
                    label="Image URL"
                    bind:value={image_url}
                />
                <div class="errors">{image_url && validateUrl(image_url)}</div>
                <InputBlock
                    placeholder="Add Summary"
                    id="summary"
                    label="summary"
                    bind:value={summary}
                />
                <div class="errors">{summary && validateSummary(summary)}</div>
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
        content: "^";
        position: absolute;
        right: 25px;
    } */
    .content-box {
        border: 1px solid white;
        margin-top: 10px;
        margin-bottom: 10px;
        /* box-shadow: 0 20px 10px -20px rgba(0, 0, 0, 0.45) inset,
            0 -20px 10px -20px rgba(0, 0, 0, 0.45) inset; */
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }
    .accordion-heading {
        display: flex;
    }
    .upword-arrow {
        width: 5%;
        padding-top: 18px;
    }
    .errors{
        color: red;
        /* padding-left: 240px; */
        text-align: start;
        width: 100%
    }
</style>

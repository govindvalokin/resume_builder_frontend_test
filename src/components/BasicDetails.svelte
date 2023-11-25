<script>
    import InputBlock from "../BasicComponents/TextInputBlock.svelte";
    import EmailBlock from "../BasicComponents/EmailInputBlock.svelte";
    import UrlBlock from "../BasicComponents/UrlInputBlock.svelte";
    import {validatePhone, validateEmail, validateUrl, validateName, validateSummary} from "./validation"
    

    import Icon from "@iconify/svelte";

    export let open = false;
    import { slide } from "svelte/transition";

    // Function for handling accordion
    const handleClick = () => (open = !open);

    export let name = "";
    export let email = "";
    export let phone = "";
    export let image_url = "";
    export let summary = "";
   
</script>

<main>
    <!-- Basic details accordian -->
    <div class="content-box">
        <div class="accordion-heading">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <h3 class="sub-title" on:click={handleClick}>Basic Details <span class="mandatory-star">*</span></h3>
            <!-- Upword and downward arrows -->
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

        <!-- Accordion Content -->
        {#if open}
            <div class="active" transition:slide>
                <InputBlock
                    placeholder="Add Name"
                    id="name"
                    label="Name"
                    bind:value={name}
                />
                <!-- Error message display block -->
                <div class="errors">{name && validateName(name)}</div>
                <EmailBlock
                    placeholder="Add Email"
                    id="email"
                    label="Email"
                    bind:value={email}
                />
                <!-- Error message display block  -->
                <div class="errors">{email && validateEmail(email)}</div>
                <InputBlock
                    placeholder="Add Phone Number"
                    id="phone"
                    label="Phone"
                    bind:value={phone}    
                />
                <!-- Error message display block -->
                <div class="errors">{phone && validatePhone(phone)}</div>
                <UrlBlock
                    placeholder="Add Image URL"
                    id="image-url"
                    label="Image URL"
                    bind:value={image_url}
                />
                <!-- Error message display block -->
                <div class="errors">{image_url && validateUrl(image_url)}</div>
                <InputBlock
                    placeholder="Add Summary"
                    id="summary"
                    label="Summary"
                    bind:value={summary}
                />
                <!-- Error message display block -->
                <div class="errors">{summary && validateSummary(summary)}</div>
            </div>
        {/if}
    </div>
</main>

<style>
    /* Accordion styles */
    h3 {
        width: 95%;
        padding-left: 10px;
        font-family: initial
    }
    h3:hover {
        cursor: pointer;
    }
    .content-box {
        border: 1px solid white;
        margin-top: 10px;
        margin-bottom: 10px;
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
        text-align: start;
        width: 100%;
        font-size: small;
    }
    .mandatory-star{
        color: red;
    }
</style>

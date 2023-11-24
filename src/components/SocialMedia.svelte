<script>
    import InputBlock from "../BasicComponents/TextInputBlock.svelte";
    import UrlBlock from "../BasicComponents/UrlInputBlock.svelte";
    import Icon from '@iconify/svelte';

    // Function for handling accordion
    export let open = false;
    import { slide } from "svelte/transition";
    const handleClick = () => (open = !open);


    export let social_media = [{ network: "", url: "", user_name: "" }];
    // Function for adding additional social media fields
    function addSocialData() {
        social_media = [
            ...social_media,
            { network: "", url: "", user_name: "" },
        ];
    }
    // Function for removing additional social media fields
    function removeSocialMedia(index) {
        if (social_media.length > 1) {
            social_media = social_media.filter((_, item) => item !== index);
        }
    }

   
</script>
<!-- Accordion -->
<div class="content-box">
    <div class="accordion-heading">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <h3 class="sub-title" on:click={handleClick}>Social Media</h3>
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
        {#each social_media as social_media_data, item}
            <div class="active" transition:slide>
                <InputBlock
                    placeholder="Add Network"
                    id="network"
                    label="Network"
                    bind:value={social_media_data.network}
                />
                <UrlBlock
                    placeholder="Add URL"
                    id="network-url"
                    label="URL"
                    bind:value={social_media_data.url}
                />
                <InputBlock
                    placeholder="Add User Name"
                    id="user-name"
                    label="User Name"
                    bind:value={social_media_data.user_name}
                />
            </div>
            <!-- Buttons for adding or removing additional social media fields -->
            <div class="social-media-buttons">
                <button on:click|preventDefault={addSocialData}
                    >+ Add</button
                >
                {#if item !== 0}
                    <button on:click|preventDefault={() => removeSocialMedia(item)}
                        >- Remove</button
                    >
                {/if}
            </div>
        {/each}
    {/if}
</div>

<style>
    h3 {
        width: 95%;
        padding-left: 10px;
        font-family: initial
    }
    h3:hover {
        cursor: pointer;
    }

    
    .social-media-buttons{
        margin-top: 10px;
   }
   .social-media-buttons button{
        width: 82px;
        background-color: white;
        color: #209FA4;;
        border-radius: 5px;
        cursor: pointer;
        font-family: ui-serif;
        margin-left: 7px;
   }
   .content-box{
        border: 1px solid white;
        margin-top: 10px;
        margin-bottom: 10px;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }
    .accordion-heading{
        display: flex;

    }
    .upword-arrow{
        width: 5%;
        padding-top: 18px;
    }
</style>

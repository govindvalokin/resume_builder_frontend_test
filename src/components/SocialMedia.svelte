<script>
    import InputBlock from "../BasicComponents/TextInputBlock.svelte";
    import UrlBlock from "../BasicComponents/UrlInputBlock.svelte";
    import Icon from '@iconify/svelte';

    export let open = false;
    import { slide } from "svelte/transition";
    const handleClick = () => (open = !open);

    export let social_media = [{ network: "", url: "", user_name: "" }];
    function addSocialData() {
        social_media = [
            ...social_media,
            { network: "", url: "", user_name: "" },
        ];
    }
    function removeSocialMedia(index) {
        if (social_media.length > 1) {
            social_media = social_media.filter((_, i) => i !== index);
        }
    }

    // export let network = '';
    // export let url = '';
    // export let user_name = '';
</script>

<div class="content-box">
    <div class="accordion-heading">
        <h3 class="sub-title" on:click={handleClick}>Social Media</h3>
        <div class="upword-arrow">
            {#if open}
                <Icon icon="ic:baseline-keyboard-arrow-up" width = "24" height= "24" color="black"/>
            {:else}
            <Icon icon="material-symbols:keyboard-arrow-down" width = "24" height= "24" color="black"/>
            {/if}
        </div>
    </div>
    {#if open}
        {#each social_media as social_media_data, i}
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
            <div class="social-media-buttons">
                <button on:click|preventDefault={addSocialData}
                    >Add New Social Media</button
                >
                {#if i !== 0}
                    <button on:click|preventDefault={() => removeSocialMedia(i)}
                        >Remove Social Media</button
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

    /* .subTitle::before {
        content: "+";
        position: absolute;
        right: 25px;
    } */
    .social-media-buttons{
        margin-top: 10px;
   }
   .social-media-buttons button{
        width: 175px;
        background-color: white;
        color: blue;
        border-radius: 5px;
        border-color: white;
        cursor: pointer;
   }
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
</style>

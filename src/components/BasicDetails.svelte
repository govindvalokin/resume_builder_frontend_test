<script>
    import InputBlock from "../BasicComponents/TextInputBlock.svelte";
    import EmailBlock from "../BasicComponents/EmailInputBlock.svelte";
    import UrlBlock from "../BasicComponents/UrlInputBlock.svelte";
    export let open = false;
    import { slide } from "svelte/transition";
    const handleClick = () => (open = !open);
    
    export let name = '';
    export let email = '';
    export let phone = '';
    export let image_url = '';
    export let summary = '';
    
</script>

<main>
    <div class="contentBox">
        <h3 class="subTitle" on:click={handleClick}>Basic Details</h3>
        {#if open}
            <div class="Active" transition:slide>
                <InputBlock
                    placeholder="Add Name"
                    id="name"
                    label="Name"
                   
                    bind:value = "{name}"
                />
                <EmailBlock placeholder="Add Email" id="email" label="Email"  bind:value = "{email}"/>
                <InputBlock
                    placeholder="Add Phone Number"
                    id="phone"
                    label="Phone"
                    
                    bind:value = "{phone}"
                />
                <UrlBlock
                    placeholder="Add Image URL"
                    id="image-url"
                    label="Image URL"
                    
                    bind:value = "{image_url}"
                />
                <InputBlock
                    placeholder="Add Summary"
                    id="summary"
                    label="summary"
                    
                    bind:value = "{summary}"
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
</style>

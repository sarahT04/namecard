<script lang="ts" context="module">
    export type DetailsTypes = {
        icon: string;
        display: string;
        link: string;
        title: string;
    };
</script>

<script lang="ts">
    import Phone from "$lib/assets/svg/Phone.svelte";
    import Email from "$lib/assets/svg/Email.svelte";
    import Instagram from "$lib/assets/svg/Instagram.svelte";
    import Website from "$lib/assets/svg/Website.svelte";
    import Github from "$lib/assets/svg/Github.svelte";
    export let details: DetailsTypes;
    const { icon, display, link, title } = details;
</script>

<section class="inline-flex gap-4 items-center px-3 text-xl pb-2">
    <div
        style="background-color: var(--tertiary); color: var(--secondary);"
        class="w-fit p-2 rounded-3xl"
    >
        {#if icon === "phone"}
            <Phone />
        {:else if icon === "website"}
            <Website />
        {:else if icon === "instagram"}
            <Instagram />
        {:else if icon === "github"}
            <Github />
        {:else}
            <Email />
        {/if}
    </div>
    <a href={link} title={title ?? "Check it out"}>{display}</a>
</section>

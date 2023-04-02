<script lang="ts">
    import Background from "./background.svelte";
    import Details from "./details.svelte";
    import Foreground from "./foreground.svelte";

    export let data;
    const {
        name,
        role,
        abbreviation,
        place,
        image,
        detailsArray,
        colors,
        backgroundCSS,
    } = data;
</script>

<div style="{colors} {backgroundCSS}" class="centered">
    <main
        style="width: 320px; height: 610px; background-color: var(--foreground); border: 2px solid var(--background);"
        class="relative overflow-hidden m-auto pb-3 rounded-lg"
    >
        <Background {name} {role} {abbreviation} {place} />
        <img
            class="absolute h-40 rounded-3xl -right-2 top-20"
            src={image}
            alt={name}
        />
        <Foreground />
        {#each detailsArray as details, i}
            <Details {details} /> <br />
        {/each}
    </main>
</div>

<style>
    .centered {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
</style>

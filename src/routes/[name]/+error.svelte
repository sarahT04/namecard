<script>
    // @ts-nocheck
    import { page } from "$app/stores";
    import Scribble from "$lib/assets/img/scribble.jpg";
    import Favicon from "$lib/assets/img/scribble_favicon.png";
</script>

<svelte:head>
    <title>{$page.status}: {$page.error.message}</title>
    <link rel="icon" type="image/svg" href={Favicon} />
</svelte:head>

<figure style="max-width: 320px;" class="relative md: m-auto">
    <figcaption class="absolute right-0 px-2 py-8">
        <h1 class="text-right text-8xl">
            {$page.status}:
            <br />
            <small class="text-6xl font-bold">{$page.error.message}</small>
            <br />
            <a href="/" class="text-4xl underline">&larr; Go back</a>
        </h1>
        <img
            src={Scribble}
            alt="Scribble"
            class="w-3/5 absolute -left-2 -bottom-24"
        />
    </figcaption>
</figure>

<style>
    @import url("https://fonts.googleapis.com/css?family=Cabin+Sketch");

    * {
        font-family: "Cabin Sketch", cursive;
    }
</style>

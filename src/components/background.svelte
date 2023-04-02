<script lang="ts">
    export let name: string;
    export let role: string;
    export let abbreviation: string;
    export let place: string;
</script>

<header
    style="background-color: var(--background);"
    class="clip-path h-56 relative text-slate-50 [&>*]:pl-5"
>
    <h1 class="text-4xl pt-6">
        {name}<span class="text-base pl-2">{abbreviation ?? ""}</span>
    </h1>
    <h3 class="pt-4 text-lg"><i>{role}</i></h3>
    <h3>{place}</h3>
</header>

<style>
    .clip-path {
        -webkit-clip-path: polygon(0 0, 100% 0, 100% 66%, 0 100%);
        clip-path: polygon(0 0, 100% 0, 100% 66%, 0 100%);
    }
</style>

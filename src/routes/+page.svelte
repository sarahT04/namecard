<script lang="ts">
    import type { Datas } from "$lib/database/names";
    import Main from "../components/main.svelte";
    export let data: Datas;
</script>

<Main {data} />

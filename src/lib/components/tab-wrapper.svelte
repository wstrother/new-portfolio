<script>
    import { TabGroup } from "@skeletonlabs/skeleton"
    
    export let listBG, panelBG
    console.log(listBG)
</script>

<TabGroup
    regionList={`tab__regionList ${listBG}`}
    active="tab__active"
    border="" rounded=""
    hover="tab__hover"
    regionPanel={`tab__regionPanel ${panelBG}`}
>

    <slot />

    <svelte:fragment slot="panel">
        <slot name="panel" />
    </svelte:fragment>

</TabGroup>
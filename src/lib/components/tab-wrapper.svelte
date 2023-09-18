<script>
    import { TabGroup } from "@skeletonlabs/skeleton"
    
</script>

<TabGroup
    regionList="tab__regionList"
    active="tab__active"
    border="" rounded=""
    hover="tab__hover"
    regionPanel="tab__regionPanel"
>

    <slot />

    <svelte:fragment slot="panel">
        <slot name="panel" />
    </svelte:fragment>

</TabGroup>
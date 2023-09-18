<script>
    import {page} from '$app/stores'
    import {onMount} from 'svelte'

    let number = 0

    onMount(() => {
        number = $page.url.searchParams.get("number") ?? 0
    })

</script>

<p>
    {number * 5}
</p>

<p>{$page.data.msg}</p>



<script>
    import {page} from '$app/stores'
</script>

<div>
    <span class="error">{$page.url.pathname}</span> was not found. Sorry about that.
</div>

<style lang='postcss'>
    .error {
        @apply text-2xl;
    }
</style>
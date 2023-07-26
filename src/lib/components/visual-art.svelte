<script>
    import Zebra from "../svg/zebra.svelte";
    import Owl from "../svg/owl.svelte";
    import Quail from "../svg/quail.svelte";
    import Monster from "../svg/monster.svelte";
    import Turtle from "../svg/turtle.svelte";

    let elemCarousel;

    function carouselLeft() {
        const x =
            elemCarousel.scrollLeft === 0
                ? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
                : elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
        elemCarousel.scroll(x, 0);
    }

    function carouselRight() {
        const x =
            elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
                ? 0 // loop
                : elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
        elemCarousel.scroll(x, 0);
    }


</script>

<div class="card p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center">
	<!-- Button: Left -->
	<button type="button" class="btn-icon variant-filled" on:click={carouselLeft}>
		back
	</button>
	<!-- Full Images -->
	<div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
	
        <div class="snap-center bg-red-500 w-[500px] h-[500px]">
            <Zebra />
        </div>
        <div class="snap-center bg-red-500 w-[500px] h-[500px]">
            <Owl />
        </div>
        <div class="snap-center bg-red-500 w-[500px] h-[500px]">
            <Quail />
        </div>
        <div class="snap-center bg-red-500 w-[500px] h-[500px]">
            <Monster />
        </div>
        <div class="snap-center bg-red-500 w-[500px] h-[500px]">
            <Turtle />
        </div>
        
	</div>
	<!-- Button: Right -->
	<button type="button" class="btn-icon variant-filled" on:click={carouselRight}>
		right
	</button>
</div>
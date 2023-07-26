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

<div class="p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center">
	<!-- Button: Left -->
	<button type="button" class="btn-icon variant-filled" on:click={carouselLeft}>
		back
	</button>
	<!-- Full Images -->
	<div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
	
        <div class="snap-center min-w-[100%] h-[500px] flex justify-center items-center">
            <Zebra />
        </div>
        <div class="snap-center min-w-[100%] h-[500px] flex justify-center items-center">
            <Owl />
        </div>
        <div class="snap-center min-w-[100%] h-[500px] flex justify-center items-center">
            <Quail />
        </div>
        <div class="snap-center min-w-[100%] h-[500px] flex justify-center items-center">
            <Monster />
        </div>
        <div class="snap-center min-w-[100%] h-[500px] flex justify-center items-center">
            <Turtle />
        </div>
        
	</div>
	<!-- Button: Right -->
	<button type="button" class="btn-icon variant-filled" on:click={carouselRight}>
		right
	</button>
</div>
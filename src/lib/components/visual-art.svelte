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

<div class="carousel">
	<!-- Button: Left -->
	<button type="button" class="btn-icon variant-filled" on:click={carouselLeft}>
		&lt;
	</button>
	<!-- Full Images -->
	<div bind:this={elemCarousel} class="carousel-inner">
	
        <div class="scroll-card">
            <Zebra />
        </div>
        <div class="scroll-card">
            <Owl />
        </div>
        <div class="scroll-card">
            <Quail />
        </div>
        <div class="scroll-card">
            <Monster />
        </div>
        <div class="scroll-card">
            <Turtle />
        </div>
        
	</div>
	<!-- Button: Right -->
	<button type="button" class="btn-icon variant-filled" on:click={carouselRight}>
		&gt;
	</button>
</div>

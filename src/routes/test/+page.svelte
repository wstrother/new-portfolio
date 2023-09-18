
<div class="quote-container @container">
    <div class="quote">i already am eating from the trashcan all the time...
        <div class="quote-source">-Slavoj Zizek</div>
    </div>
</div>


<div class="page-main2">
    <div class="heading">Some Heading Here</div>
    <div class="body">
        <p>
            The dance of electrons in the atomic disco is like a mosh pit of quarks, where particles slam-dance their way to chaos.
            Life is a never-ending game of musical chairs, and we're all searching for a seat in the cosmic symphony of chairs.
            In the carnival of consciousness, the carousel of thoughts spins endlessly, while clowns of reason juggle existential paradoxes.
        </p>
        <p>
            The universe is a cosmic library, and we are the overdue books, waiting for the librarian of destiny to fine-tune our due dates.
        </p>
        <p>
            Hope is the firefly of the soul, blinking in the twilight of uncertainty, illuminating the night with its ephemeral dreams.
            "Life's like a cosmic vending machine you put in your hopes, press the button of fate, and sometimes you get a snack, other times a rubber duck."
            "The journey of life is a rollercoaster made of spaghetti, with loop-de-loops of logic and meatball pits of absurdity."
        </p>
        <p>
            "Wisdom is a treehouse in the forest of knowledge, accessible only by the zipline of curiosity, and guarded by the squirrel of enlightenment."
            Remember, these quotes are entirely fictional and nonsensical, meant for entertainment purposes only!
        </p>
    </div>
</div>


<style lang='postcss'>
    .page-main2 {
        @apply md:w-1/2 w-full px-4 mx-auto
    }

    .quote-container {
        @apply  relative mx-auto my-2 w-[100%]
        ;
    }
    .quote {
        @apply bg-clip-text text-transparent box-decoration-clone;
        @apply bg-gradient-to-br;
        @apply from-secondary-400 to-secondary-700;

        @apply  relative w-fit mb-6 left-[50%] translate-x-[-50%]
                font-medium tracking-tight select-none
                @[1500px]:text-7xl 
                @[1200px]:text-6xl 
                @[1000px]:text-5xl 
                @[800px]:text-4xl 
                @[600px]:text-3xl
                @sm:text-2xl @sm:px-0
                text-lg px-2
                whitespace-nowrap
        ;
        font-variant: small-caps;
    }
    .quote-source {
        @apply  self-end absolute bottom-0 right-0
                text-secondary-500 select-none
                font-medium 
                @md:text-xl
                @sm:text-base
                text-sm px-5 
                translate-y-[100%]
        ;
    }

</style>
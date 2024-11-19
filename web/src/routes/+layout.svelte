<script>
    import "../app.css";
    import { onMount } from "svelte";
    import Icon from "@iconify/svelte";

    let menuOpen = false;

    function toggleMenu() {
        menuOpen = !menuOpen;
    }
</script>

<nav
    class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg text-white"
>
    <div class="container mx-auto flex items-center justify-between">
        <div class="text-xl text-gray-700">FATHER'S BUSINESS MINISTRY</div>
        <div class="hidden md:flex space-x-4">
            <a href="/" class="hover:underline">Home</a>
            <a href="/media" class="hover:underline">Listen</a>
            <a href="/support" class="hover:underline">Support</a>
            <a href="/about" class="hover:underline">About</a>
        </div>
        <div class="md:hidden flex items-center">
            <button on:click={toggleMenu}>
                <!-- Hamburger Icon -->
                <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
        </div>
    </div>
    {#if menuOpen}
        <div class="md:hidden bg-gray-700 dark:bg-gray-800">
            <a href="/" class="block px-4 py-2 hover:underline">Home</a>
            <a href="/projects" class="block px-4 py-2 hover:underline"
                >Project</a
            >
            <a href="/support" class="block px-4 py-2 hover:underline"
                >Support</a
            >
            <a href="/about" class="block px-4 py-2 hover:underline">About</a>
        </div>
    {/if}
</nav>

<slot />

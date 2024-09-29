<script>
    import "../app.css";
    import { onMount } from "svelte";
    import Icon from "@iconify/svelte";

    let darkMode = false;
    let menuOpen = false;

    onMount(() => {
        darkMode = localStorage.getItem("theme") === "dark";
        document.documentElement.classList.toggle("dark", darkMode);
    });

    function toggleDarkMode() {
        darkMode = !darkMode;
        localStorage.setItem("theme", darkMode ? "dark" : "light");
        document.documentElement.classList.toggle("dark", darkMode);
    }

    function toggleMenu() {
        menuOpen = !menuOpen;
    }
</script>

<nav class="bg-gray-800 dark:bg-gray-900 text-white px-4 py-2">
    <div class="container mx-auto flex items-center justify-between">
        <div class="text-xl font-bold">Father's Business Ministry</div>
        <div class="hidden md:flex space-x-4">
            <a href="/" class="hover:underline">Home</a>
            <a href="/about" class="hover:underline">About</a>
            <a href="/giving" class="hover:underline">Giving</a>
            <a href="/projects" class="hover:underline">Projects</a>
            <a href="/book" class="hover:underline">Book</a>
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
        <button on:click={toggleDarkMode} class="ml-4">
            {#if darkMode}
                <!-- Sun Icon -->
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15a5 5 0 100-10 5 5 0 000 10z" />
                    <path
                        fill-rule="evenodd"
                        d="M10 0a1 1 0 011 1v1a1 1 0 01-2 0V1a1 1 0 011-1zM10 17a1 1 0 011 1v1a1 1 0 01-2 0v-1a1 1 0 011-1zM3.22 3.22a1 1 0 011.42 0l.7.7a1 1 0 01-1.42 1.42l-.7-.7a1 1 0 010-1.42zM15.66 15.66a1 1 0 011.42 0l.7.7a1 1 0 01-1.42 1.42l-.7-.7a1 1 0 010-1.42zM0 10a1 1 0 011-1h1a1 1 0 110 2H1a1 1 0 01-1-1zM17 9a1 1 0 100 2h1a1 1 0 100-2h-1zM3.22 16.78a1 1 0 010-1.42l.7-.7a1 1 0 011.42 1.42l-.7.7a1 1 0 01-1.42 0zM15.66 4.34a1 1 0 010 1.42l-.7.7a1 1 0 11-1.42-1.42l.7-.7a1 1 0 011.42 0z"
                        clip-rule="evenodd"
                    />
                </svg>
            {:else}
                <!-- Moon Icon -->
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M17.293 13.293a8 8 0 11-10.586-10.586 7 7 0 1010.586 10.586z"
                    />
                </svg>
            {/if}
        </button>
    </div>
    {#if menuOpen}
        <div class="md:hidden bg-gray-700 dark:bg-gray-800">
            <a href="/" class="block px-4 py-2 hover:underline">Home</a>
            <a href="/about" class="block px-4 py-2 hover:underline">About</a>
            <a href="/giving" class="block px-4 py-2 hover:underline">Giving</a>
            <a href="/projects" class="block px-4 py-2 hover:underline"
                >Projects</a
            >
            <a href="/book" class="block px-4 py-2 hover:underline">Book</a>
        </div>
    {/if}
</nav>

<slot />

<footer class="bg-gray-800 dark:bg-gray-900 text-white px-4 py-6 mt-8">
    <div
        class="container mx-auto flex flex-col md:flex-row items-center justify-between"
    >
        <div class="text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Father's Business Ministry
        </div>
        <div class="flex space-x-4">
            <a
                href="https://www.youtube.com/YourChannel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                class="hover:text-red-500"
            >
                <Icon icon="mdi:youtube" class="w-6 h-6" />
            </a>
            <a
                href="https://www.tiktok.com/@YourProfile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                class="hover:text-pink-500"
            >
                <Icon icon="ant-design:tik-tok-filled" class="w-6 h-6" />
            </a>
        </div>
    </div>
</footer>

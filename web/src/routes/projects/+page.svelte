<script>
    import PocketBase from "pocketbase";

    let projects = [];
    const pb = new PocketBase("http://127.0.0.1:8090"); // Update with your PocketBase URL

    // Fetch projects from PocketBase
    $: (async () => {
        try {
            projects = await pb.collection("projects").getFullList();
        } catch (error) {
            console.error("Error fetching projects:", error);
        }
    })();
</script>

<section class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-4">Our Projects</h1>
    {#if projects.length}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each projects as project}
                <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded">
                    <h2 class="text-2xl font-semibold mb-2">{project.title}</h2>
                    <p>{project.description}</p>
                </div>
            {/each}
        </div>
    {:else}
        <p>No projects available at the moment.</p>
    {/if}
</section>

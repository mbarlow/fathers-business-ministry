<script>
    import PocketBase from "pocketbase";

    let books = [];
    const pb = new PocketBase("http://127.0.0.1:8090");

    // Fetch books from PocketBase
    $: (async () => {
        try {
            books = await pb.collection("books").getFullList();
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    })();
</script>

<section class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-4">Our Book</h1>
    {#if books.length}
        <div>
            {#each books as book}
                <div class="mb-6">
                    <h2 class="text-2xl font-semibold">{book.title}</h2>
                    <p>{book.description}</p>
                    <a href={book.link} class="text-blue-500 hover:underline"
                        >Learn More</a
                    >
                </div>
            {/each}
        </div>
    {:else}
        <p>No books available at the moment.</p>
    {/if}
</section>

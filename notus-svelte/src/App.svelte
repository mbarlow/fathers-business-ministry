<!-- App.svelte -->
<script>
    import { Router, Route } from "svelte-routing";

    // No Layout Pages
    import Index from "./views/Index.svelte";
    import Landing from "./views/Landing.svelte";
    import Profile from "./views/Profile.svelte";

    export let url = "";
</script>

<Router {url}>
    <!-- no layout pages -->
    <Route path="landing" component={Landing} />
    <Route path="profile" component={Profile} />
    <Route path="/" component={Index} />
</Router>

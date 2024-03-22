<script lang="ts">
export let left: boolean = false;
</script>

<h1 style={left ? "text-aling: left" : null}><slot /></h1>
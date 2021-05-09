<template>
  <div class="hello">
    <My-Terminal></My-Terminal>
  </div>
</template>

<script>
import Terminal from "./terminal";
export default {
  name: "reactTerminal",
  components: {
    "My-Terminal": Terminal,
  }
};
</script>
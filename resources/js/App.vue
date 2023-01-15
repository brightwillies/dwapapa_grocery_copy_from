<template>
  <div>
    <router-view  :key="$route.fullPath"/>
  </div>
</template>

<script>
// import appConfig from "./app.config.json";

export default {
  name: "app",
  // page: {
  //   // All subcomponent titles will be injected into this template.
  //   titleTemplate(title) {
  //     title = typeof title === "function" ? title(this.$store) : title;
  //     return title ? `${title} | ${appConfig.title}` : appConfig.title;
  //   }
  // }

  mounted() {
  }
};
</script>
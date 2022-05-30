<template>
  <div
    class="
      text
      m-2
      ml-auto
      mr-auto
      flex
      h-auto
      w-3/4
      flex-row
      rounded-lg
      border-2 border-white
      bg-transparent
      px-11
      py-3
      text-center
      font-Anton
      text-3xl
      font-bold
      uppercase
      tracking-wide
      text-white
      sm:py-4 sm:text-4xl
    "
  >
    {{ bouton }}
    <div class="text-red-400">
      {{ boutonred }}
    </div>
    <div class="text-purple-400">
      {{ boutonpurple }}
    </div>

    <slot />
  </div>
</template>


<script>
export default {
  props: {
    bouton: {
      type: String,
      required: true,
    },
    boutonpurple: {
      type: String,
      required: true,
    },
    boutonred: {
      type: String,
      required: true,
    },
  },
};
</script>

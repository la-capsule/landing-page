<template>
  <section>
    <Countdown date="December 30, 2018"></Countdown>
  </section>
</template>

<script>
import Countdown from './partials/Countdown';

export default {
  components: { Countdown },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
colors = '#8EE3CA', '#88CFDA', '#82BAE9', '#7CA6F9', '#C18EBB', '#E5737E', '#FC5143', '#E98C6E', '#C9BA9B'

@keyframes backgroundColor
  for color, i in colors
    {i/(length(colors) - 1)*100 + '%'}
      background unquote(color)

section
  top 0
  height 100vh
  animation backgroundColor 30s infinite
</style>

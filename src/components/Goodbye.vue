<template>
  <section>
    <img src="../assets/logo.svg" alt="Logo Capsule Bordeaux - E-shop éphémère des créateurs Bordelais" id="logo">
    <h2 class="comingSoon">Capsule c'est fini ☹️</h2>
    <div class="description">
      <p>Merci de nous avoir suivi durant notre projet de fin d'études en DUT MMI à Bordeaux.</p>
      <p>Vous pouvez toujours retrouver les membres de l'équipe : <a href="https://www.emelinebailleul.com/" target="_blank">Emeline</a>, <a href="https://joshuarichard.fr/" target="_blank">Joshua</a> et <a href="https://bastienrobert.fr" target="_blank">Bastien</a>.</p>
    </div>
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
colors = '#FC5143', '#E5737E', '#C18EBB', '#7CA6F9', '#82BAE9', '#88CFDA', '#8EE3CA', '#C9BA9B', '#E98C6E', '#FC5143'

@require '~rupture/rupture/index'

@keyframes backgroundColor
  for color, i in colors
    {i/(length(colors) - 1)*100 + '%'}
      background unquote(color)

#logo
   width 100%
   max-width 400px
   margin 2.5vh auto 10vh
   +below(800px)
     width 85%

.comingSoon
   font-weight 900
   font-size 2.5em
   color black
   +below(800px)
     font-size 1.8em
   +below(450px)
     font-size 1.2em

.description
  font-size 16px
  margin-top 20px
  p
    margin-bottom 5px
  a
    font-weight 600
    color black

section
   letter-spacing 1px

section
  top 0
  min-height 100vh
  animation backgroundColor 30s infinite
  padding 0 5vh 5vh 5vh
</style>

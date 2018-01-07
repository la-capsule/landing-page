<template>
  <section>
    <img src="../assets/logo.svg" alt="Logo Capsule Bordeaux - E-shop éphémère des créateurs Bordelais" id="logo">
    <h2 class="comingSoon">Capsule arrive dans</h2>
    <Countdown date="January 28, 2018"></Countdown>

    <div class="newsletter">
      <h3>Inscrivez-vous à notre newsletter pour être notifiez lors de sa sortie !</h3>
      <a href="mailto:hello@capsule.com"></a>
      <div id="mc_embed_signup">
        <form action="https://capsule-bordeaux.us17.list-manage.com/subscribe/post?u=f97ac435228f8c10b44f0c321&amp;id=ae4e615f48" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <div id="mc_embed_signup_scroll">
            <div class="mc-field-group">
            	<input type="email" value="" name="EMAIL" class="required email" placeholder="Votre e-mail" id="mce-EMAIL">
            </div>
          	<div id="mce-responses" class="clear">
          		<div class="response" id="mce-error-response" style="display:none"></div>
          		<div class="response" id="mce-success-response" style="display:none"></div>
          	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_f97ac435228f8c10b44f0c321_ae4e615f48" tabindex="-1" value=""></div>
            <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
          </div>
        </form>
      </div>
    </div>

    <!-- <h3 class="social-title">Vous pouvez également nous suivre sur</h3> -->
    <div class="social-container">
      <a href="#" class="socialLink">instagram</a>
      <a href="#" class="socialLink">facebook</a>
      <a href="#" class="socialLink">twitter</a>
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

@keyframes backgroundColor
  for color, i in colors
    {i/(length(colors) - 1)*100 + '%'}
      background unquote(color)

#logo
   width 100%
   max-width 400px
   margin 2.5vh auto 10vh

.comingSoon
   font-weight 900
   font-size 2.5em
   color black

section
   letter-spacing 1px

.newsletter
   margin 10vh auto 5vh
   h3
      font-size 1em
      line-height 1.5
      font-weight 400
   input
      background transparent
      border 2px solid white
      border-radius 25px
      color white
      margin-top 2.5vh
      font-family HKConcentrate
   input::placeholder
      color white
      font-size .85em
      font-weight 100
   input[type=email]
      width 60%
      max-width 350px
      font-size 1em
      padding 10px 15px
      font-weight 400
   input[type=submit]
      font-weight 900
      font-size 1em
      padding 12px 9px 10px
      transition .25s ease-out
      &:hover
         background white
         cursor pointer
         color black

   input:focus
      outline none

.social-title
   margin 5vh auto 2.5vh
   font-weight 700
   line-height 1.5
   border-top 2px solid white
   max-width 500px
   padding-top 2.5vh
.social-container
   margin 1vh auto 10vh
   max-width 400px
   width 100%
   display flex
   justify-content space-between
   .socialLink
      color white
      line-height 1.5
      text-align center
      text-decoration underline
      font-weight 100

section
  top 0
  min-height 100vh
  animation backgroundColor 30s infinite
  padding 0 5vh 5vh 5vh
</style>

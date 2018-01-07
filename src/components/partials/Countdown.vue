<template>
  <div id="countdown">
    <p>
      <b>{{ days | two_digits }}</b>
      <em>j</em>
      <b>{{ hours | two_digits }}</b>
      <em>h</em>
      <b>{{ minutes | two_digits }}</b>
      <em>m</em>
      <b>{{ seconds | two_digits }}</b>
      <em>s</em>
    </p>
  </div>
</template>


<script>
/* eslint-disable */

export default {

  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000);
    }, 1000)
  },

  props: {
    date: {
      type: String
    }
  },

  data() {
    return {
      now: Math.trunc((new Date()).getTime() / 1000)
    }
  },

  computed: {
    dateInMilliseconds() {
      return Math.trunc(Date.parse(this.date) / 1000);
    },
    seconds() {
      return (this.dateInMilliseconds - this.now) % 60;
    },
    minutes() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
    },
    days() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24);
    }
  }

};
</script>

<style lang="stylus" scoped>

@require '~rupture/rupture/index'

#countdown
  padding-top 2.5vh
  p
    font-family HKConcentrate
    em
      margin-right .7em
      font-size 2em
      font-weight 400
      color black
      +below(450px)
        margin-right .3em
    b
      display inline-block
      font-size 3.5em
      min-width 74px
      margin-right .1vw
      font-weight 100
      color black
      +below(450px)
        margin-right .1em
        min-width 40px
  +below(800px)
    font-size .8em
  +below(450px)
    font-size .5em
</style>

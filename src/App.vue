<template>
  <div class="app">
    <div class="app__btn-block">
      <button class="app__btn"
        v-bind:class="{ app__btn_state_1: !state }"
        v-on:click="setState">{{ text }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      state: 0,
      text: 'medved'
    }
  },
  created () {
    this.getStat()
    this.render()
  },
  methods: {
    render () {
      this.state === 1 ? this.text = 'preved' : this.text = 'medved'
    },
    setState () {
      this.state = this.state === 0 ? 1 : 0
      this.$socket.sendObj({state: this.state})
    },
    getStat () {
      this.$options.sockets.onmessage = data => {
        this.state = JSON.parse(data.data).state
        this.render()
      }
    }
  }
}
</script>

<style lang="stylus">
.app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 360px

  &__btn-block
    margin auto
    width 300px

  &__btn
    width 300px
    height 150px
    font-size 40px
    color gold
    background crimson
    outline none
    border none
    border-radius 10px

    &:hover
      opacity .8

    &_state_1
      background orangered
</style>

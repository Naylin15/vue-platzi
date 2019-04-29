<template>
  <div id="app">
    <img src="./assets/logo.png">
    <select v-model="selectedCountry">
      <option v-for="country in countries" :value="country.value">
        {{ country.name }}
      </option>
    </select>
      <ul>
        <artist v-for="artist in artists" 
          v-bind:artist="artist"
          v-bind:key="artist.mbid"
          ></artist>
      </ul>
  </div>
</template>

<script>
import Artist from './components/Artist.vue'
import getArtists from './api'
export default {
  name: 'app',
  data () {
    return {
      artists: [],
      countries: [
        { name: 'Argentina', value: 'argentina' },
        { name: 'Australia', value: 'australia' },
        { name: 'Chile', value: 'chile'},
        { name: 'New Zealand', value: 'newzealand' },
        { name: 'Venezuela', value: 'venezuela' }
      ],
      selectedCountry: 'australia',
    }
  },
  components: {
    Artist
  },
  methods: {
    refreshArtists() {
      const self = this
      console.log('1')
      getArtists(this.selectedCountry)
        .then(function (artists) {
          self.artists = artists
      })
    }
  },
  mounted() {
    this.refreshArtists()
    console.log('2')
  },
  watch: {
    selectedCountry() {
      this.refreshArtists()
    }
  }
}

</script>

<style lang="stylus">
#app 
	font-family 'Avenir', Helvetica, Arial, sans-serif
	-webkit-font-smoothing antialiased
	-moz-osx-font-smoothing grayscale
	text-align center
	color #2c3e50
	margin-top 60px
h1, h2 
	font-weight normal
ul 
	list-style-type none
	padding 0
li 
	display inline-block
	margin 0 10px
a 
	color #42b983
</style>

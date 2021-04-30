<template>
  <div class="container mx-auto">
    <div class="flex flex-row">
        <input type="text" v-model="search" placeholder="Search">
        <select v-model="showType">
          <option value="Anime|Movie">All</option>
          <option value="Anime">Anime</option>
          <option value="Movie">Movies</option>
        </select>

    </div>
    <h5>Total Time Watched: {{hoursWatched}} Hours</h5>
    <div v-if="noSearch">
    <h2>Recently Watched</h2>
    <div class="flex flex-wrap justify-center">
      <div v-for="show in recentlyWatched" :key="show.slug">
        <Show :show="show" />
      </div>
    </div>
    </div>
    <h2>All Shows Watched</h2>
    <div class="flex flex-wrap justify-center">
      <div v-for="show in shows" :key="show.slug">
        <Show :show="show" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
      showType: "Anime|Movie",
      search: "",
    }
  },
  computed: {
    shows(){
      var _shows = [...this.$nuxt.$store.state.shows];

      // sort
      _shows.sort((s1, s2) => s2.score - s1.score);

      // type filter
      _shows = _shows.filter(s => s.type.match(this.showType));

      // keyword filter
      if(this.search.length != 0){
        var keyword = this.search.toLowerCase();
        _shows = _shows.filter(s => s.name.toLowerCase().match(`(${keyword})+`));
      }

      return _shows;
    },
    recentlyWatched(){
      var _shows = [...this.$nuxt.$store.state.shows];
      _shows.sort((s1, s2) => Date.parse(s2.createdAt) - Date.parse(s1.createdAt));
      return _shows.slice(0,6);
    },
    hoursWatched(){
      if(this.shows.length != 0){
        return (this.shows.map(s => s.episodeCount * s.episodeLength ).reduce((m, mt) => m + mt) / 60).toFixed(1);
      } else {
        return 0.0;
      }
    },
    noSearch(){
      return this.search.length == 0;
    }
  }
}
</script>
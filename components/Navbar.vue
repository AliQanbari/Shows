<template>
    <div class="flex flex-row">
        <input type="text" v-model="search" placeholder="Search">
        <select v-model="showType">
          <option value="Anime|Movie">All</option>
          <option value="Anime">Anime</option>
          <option value="Movie">Movies</option>
        </select>
    </div>
</template>
<script>
export default {
    
}
</script>
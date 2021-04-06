export const state = () => ({
    shows: []
})

export const mutations = {
  setShows(state, shows) {
    state.shows = shows;
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    let files = await require.context(
      '~/content/shows/',
      false,
      /\.json$/
    )
    let shows = files.keys().map(key => {
      return files(key)
    })
    await commit('setShows', shows)
  }
}
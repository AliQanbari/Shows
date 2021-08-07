export type ShowType = 'Anime' | 'Movie';

export type Show = {
  slug: string,
  name: string,
  type: ShowType,
  episodeCount: number,
  episodeLength: number,
  score: number,
  createdAt: Date,
  updatedAt: Date,
};

export function getShowList() : string[] {
  const exp = /.\/|.json/g;
  const contentContext = require.context('content/shows', true, /\.json$/);
  const keys = contentContext.keys().filter(k => k.startsWith("./"));
  const data = keys.map(p => p.replaceAll(exp, ""))
  return data;
}

export async function getShow(slug: String) : Promise<Show> {
  const content = await import(`content/shows/${slug}.json`);
  return {...content};
}

export async function getShows(): Promise<Show[]> {
  const shows : Promise<Show>[] = getShowList().map(slug => getShow(slug));
  return Promise.all(shows);
}
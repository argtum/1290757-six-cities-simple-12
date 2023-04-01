export enum AppRoute {
  Main = '/',
  Login = '/login',
  Offer = '/offer/:id'
}

export enum SortingTypes {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRates = 'Top rated first'
}

export enum APIRoute {
  Offer = '/hotels',
  Comment = '/comments',
}

export const TIMEOUT_SHOW_ERROR = 2000;
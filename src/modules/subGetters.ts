import * as Vuex from 'vuex'
import { Query, Item, Collection } from '../query'
import EntityState from './EntityState'

export type SubGetters = Vuex.GetterTree<any, EntityState>

const subGetters: SubGetters = {
  /**
   * Create a new Query instance.
   */
  query: (state, _getters, _rootState, rootGetters) => (wrap?: boolean): Query => {
    return rootGetters[`${state.$connection}/query`](state.$name, wrap)
  },

  /**
   * Get all data of given entity.
   */
  all: (state, _getters, _rootState, rootGetters) => (wrap?: boolean): Collection => {
    return rootGetters[`${state.$connection}/all`](state.$name, wrap)
  },

  /**
   * Find a data of the given entity by given id.
   */
  find: (state, _getters, _rootState, rootGetters) => (id: string | number, wrap?: boolean): Item => {
    return rootGetters[`${state.$connection}/find`](state.$name, id, wrap)
  }
}

export default subGetters

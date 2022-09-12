import { useState } from "react";
import { getMyList, saveMyList } from '../utils/localStorage';

const initialState = {
  player: {},
  search: {
    input: false,
    title: 'Busqueda',
    playlist: [],
  },
  myList: {
    title: 'Mi Lista',
    playlist: getMyList() || [],
  },
  categories: [],
}

const useInitialState = () => {
  const [state, setState] = useState(initialState)

  const { myList, search } = state;
  const { playlist } = myList;

  const addMedia = (media) => {
    // (!playlist.includes( item => item.id === media.id ))
    //   ? playlist.push(newMedia)
    //   : null
    // debugger

    const itsNotAdded = !playlist.find(item => {
      // debugger
      return item.id === media.id
    })

    if (itsNotAdded) {
      playlist.push(media)
    }

    saveMyList(playlist)
    setState({
      ...state,
      myList: { ...myList, playlist }
    })
  }

  const removeMedia = (media) => {
    const newPlaylist = playlist.filter(item => item.id !== media.id)

    saveMyList(newPlaylist)
    setState({
      ...state,
      myList: {
        ...myList, playlist: newPlaylist
      }
    })
  }

  const searchMedia = (newSearch) => {
    const { categories } = state;
    const searchLowerCase = newSearch.toLowerCase()

    const searchResult = categories.map(({ playlist }) => {
      // debugger
      return playlist.filter(media => {
        const titleLowerCase = media.title.toLowerCase()
        return titleLowerCase.includes(searchLowerCase)
      })
    }).flat()

    // debugger
    setState({
      ...state,
      search: {
        ...search,
        input: !!searchLowerCase,
        playlist: !!searchLowerCase ? searchResult : []
      }
    })
  }

  const setCategoriesStore = (categories) => {
    // debugger
    setState({ ...state, categories })
  }

  const findVideo = (id) => {
    // debugger

    const player = state.categories.map(({ playlist }) => {
      return playlist.filter(media => media.id === parseInt(id, 10))
    }).flat()[0]

    console.log(player)

    setState({ ...state, player })
  }

  const unsetVideo = () => {
    setState({ ...state, player: {} })
  }

  return {
    state,
    addMedia,
    removeMedia,
    searchMedia,
    setCategoriesStore,
    findVideo,
    unsetVideo,
  }
}

export default useInitialState;
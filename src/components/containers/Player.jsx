import React, { useEffect, useContext} from 'react';
import Layout from '../../components/UI/Layout';
import Button from '../widgets/Button';
import { withRouter } from 'react-router';
import NotFound from '../../pages/NotFound';
import { getCategories } from '../../utils/Api';
import AppContext from '../../context/AppContext';

const Player = (props) => {

  const { findVideo, unsetVideo, setCategoriesStore } = useContext(AppContext)
  const { player, categories } = useContext(AppContext).state

  useEffect(() => {
    const { match } = props
    const videoId = match.params.id
    // console.log(videoId)
    const thereAreCategories = !!categories.length
    const isVideo = !!Object.keys(player).length

    // debugger

    if (thereAreCategories && !isVideo) {

      console.log('there are')
      findVideo(videoId)

    } else if (!isVideo) {
      console.log('there are not')
      fetchCategories(videoId)
    }
  }, [])

  const fetchCategories = async (videoId) => {
    const categories = await getCategories()
    console.log('hola')
    setCategoriesStore(categories)
    // debugger
    findVideo(videoId)
  }

  const goBack = () => {
    const { history } = props
    unsetVideo()
    history.goBack()
  }

  const isVideo = !!Object.keys(player).length
  console.log(player)

  return (
    isVideo
      ? <Layout>
        <div className="Player">
          <video poster={player.image} className="Player__video" autoPlay controls>
            <source src={player.source} />
          </video>
          <div className="Player__back">
            <Button handleClick={goBack} type="bold">
              Regresar
            </Button>
          </div>
        </div>
      </Layout>
      :
      <NotFound />
  )
}

export default withRouter(Player);
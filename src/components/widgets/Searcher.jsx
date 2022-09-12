import React, { useContext } from 'react';
import { useState } from 'react';
import InputNoLabel from '../../components/widgets/InputNoLabel';
import AppContext from '../../context/AppContext';

const Searcher = () => {
  const {searchMedia} = useContext(AppContext)
  
  const [search, setSearch] = useState("")
  
  const handleChange = ({ target }) => {
    setSearch(target.value)
    searchMedia(target.value)
  }

  return (
    <section className="Searcher">
      <h2 className="Searcher__title">¿Qué quieres ver hoy?</h2>
      <InputNoLabel
        name="search"
        type="text"
        value={search}
        className="Searcher__input"
        handleChange={handleChange}
        placeholder="Buscar..."
      />
    </section>
  )
}

export default Searcher;
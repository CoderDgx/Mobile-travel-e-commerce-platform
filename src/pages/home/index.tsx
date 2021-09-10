import React from 'react';
import Header from './components/header'
import Search from './components/search';
import Hot from './components/hot'

import './index.less'


const Home: React.FC = props => {
  return (
    <div className="home">
      <Header />
      <Search />
      <Hot />
    </div>
  )
}

export default Home

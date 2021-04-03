import React from 'react';
import Category from '@components/UI/Category';

const MyList = ({myList}) =>(
  <>
    {
      !!myList.playlist.length &&
      <Category type='user' {...myList} />
    }
  </>
)

export default MyList;
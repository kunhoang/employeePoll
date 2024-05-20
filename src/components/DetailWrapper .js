import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Detail from './Detail';

const DetailWrapper = (props) => {
  const { id } = useParams();
  return <Detail {...props} id={id} />;
};

export default connect()(DetailWrapper);
import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import {connect} from 'react-redux'
import {addFeature,removeFeature} from './redux/actions'
const App = (props) => {

  const removeFeature = item => {
    // ! d i s p a t c h a n a c t i o n h e r e t o r e m o v e a n i t e m
    props.removeFeature(item)
  };

  const buyItem = item => {
    props.addFeature(item)
  };
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.state.car} />
        <AddedFeatures car={props.state.car} removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.state.additionalFeatures} buyItem={buyItem} />
        <Total car={props.state.car} additionalPrice={props.state.additionalPrice} />
      </div>
    </div>
  );
};

const mapToProps = state => ({
  state: state.featureFunc
})
export default connect(mapToProps,{addFeature,removeFeature})(App);
import React, {useEffect} from 'react'
import { getCatData } from '../actions/index'
import {connect} from 'react-redux'

const CatCards = (props) => {

    useEffect(() => {
        props.getCatData()
        //eslint-disable-next-line
      }, []);

    const handleClick = () => {
        props.getCatData()
    }
   console.log(props.catData)


    return (
        <div>
            <button onClick={handleClick}>Next Cat</button>
            <div className='cat-image'>
                { props.isLoading ? <div>Loading...</div> : ''}
                <img src={props.catData.map(cat => cat.url)} alt='fun'/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        catData: state.catData,
        error: state.error
    }
}

export default connect(mapStateToProps, {getCatData})(CatCards)
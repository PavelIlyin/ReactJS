import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchData, setIdleStatus } from '../Store/Action/gists';
import '../App.css';


const Gists = () => {

    const dispatch = useDispatch()

    const [pageData, setPageData] = useState([])

    const getData = () => {
        dispatch(fetchData())
        setPageData(list)
    }

    const clearData = () => {
        setPageData([])
    }

    const repeateGetData = () => {
        dispatch(setIdleStatus())
        dispatch(fetchData())
    }

    const { list, status } = useSelector(state => state.testAPI)

    return (
        <div className="App-header">
            <div>
                <div >
                    <div className="gists__btn-block">
                        <button onClick={getData} className="form__button margin_btn">GET</button>
                        <button onClick={clearData} className="form__button margin_btn">CLEAR</button>
                    </div>

                    <div className="gists__loading">{status === 'loading' ? <div>Loading...</div> : null}</div>

                    <div className="gists__loading">
                        {status === 'error' ? <div>
                            <button onClick={repeateGetData} className="form__button">ONE MORE TIME</button></div> : null}
                    </div>
                </div>
                <div className="gists__block">
                    {pageData.map((item, index) => (<div className="gists__item" key={index}>{item.string}</div>))}
                </div>
            </div>
        </div>
    )
}

export default Gists;
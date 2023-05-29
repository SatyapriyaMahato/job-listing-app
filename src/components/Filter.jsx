import React from 'react';

const Filter = ({ filterTags, removeFIlterTag, removeAll }) => {
    console.log(filterTags);
    return (
        <>
            <div className="filter div-shadow">
                <div className="filter-tags" id="fiter-tags">

                    {/*  iterating over filter tags */}
                    {filterTags.map((tag, index) => {
                        return (

                            <button type="button" className="filter-button" key={index}>
                                <span className="button__text">{tag}</span>
                                <span className="button__icon" onClick={() => { removeFIlterTag(tag) }}>
                                    <img src="./images/icon-remove.svg" alt="cross icon" />
                                </span>
                            </button>
                        )
                    })}

                </div>

                <div className="clear-button">
                    <button className='btn clear' onClick={() => { removeAll() }}>Clear</button>
                </div>
            </div>

        </>
    )
}

export default Filter
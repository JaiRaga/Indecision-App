import React from 'react'
import Option from './Option'

const Options = (props) => (
        <div>
            <div className="widget-header">
                <p className="widget-header__title">Your Options</p>
                <button
                    className="button button--link" 
                    onClick={props.handleDeleteOptions}
                >
                Remove All</button>
            </div>
            {props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
            {props.options.map((option, index) => {
                return (
                    <Option 
                        key={option} 
                        text={option}
                        count={index+1} 
                        handleDeleteOption={props.handleDeleteOption}
                    />
                )
            })}
            {props.options.length > 5 && <div className="widget-header widget__footer">
                <button
                    className="button button--link" 
                    onClick={props.handleDeleteOptions}
                >
                Remove All</button>
            </div>}         
        </div>
    )

export default Options
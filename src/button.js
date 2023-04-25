import './button.css'


export default function Button (props) {



    function handleClick () {
        alert('Ashlesha bandgar')
    }

    return (
        <button 
            // className='clickBtn' 
            className={props.externalClassName || 'clickBtn'}
            onClick={ props.onClickFunction || handleClick} 
            style={props.buttonStyle}
        >
            {props.buttonText || 'Card1' }
        </button>
    )
}
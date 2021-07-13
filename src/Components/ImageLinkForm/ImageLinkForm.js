import './ImageLinkForm.css';

function ImageLinkForm(props) {
    return(
        <div>
            <p className="f3 tc">
                {"Give me an image with a face on it and I shall detect it."} 
            </p>
            <div className="center">
                <div className="center pa4 br3 shadow-5 container">
                    <input onChange={props.onInputChange} className="f4 pa2 w-70 center" type="tex" />
                    <button onClick={props.onButtonSubmit} className="w-30 grow f4 link ph3 pv2 dib white">Detect</button>
                </div>
            </div>
        </div>
    )
}
export default ImageLinkForm;
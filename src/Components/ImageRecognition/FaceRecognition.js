import "./FaceRecognition.css";

function FaceRecognition({ imageUrl, box }) {
    return(
        <div className="center ma">
            <div className="absolute mt2">
                <img id="inputImg" alt="" src={imageUrl} width="500px" height="auto" />
                <div className="bound" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    )
}

export default FaceRecognition;
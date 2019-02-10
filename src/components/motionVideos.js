import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


class MotionVideos extends React.Component {

componentDidMount() {
    this.props.motionVideos();
}
render () {
    const {Videos} = this.props;
    
    return (
        <React.Fragment> 
        <h4><i className="fas fa-film"></i>Trailers</h4>
        <div className="row">
            {Videos && Videos.map ((video, id) => {
               return (
                <div key={video.id} className="col-sm-3 spacing">
                    <div className="card">
                    <img className="card-img-top image" data-toggle="modal" data-target={"#motion" + id} src={video.img}></img>
                    <div className="modal fade" id={"motion" +id}>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                <div class="modal-header">                                   
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                </div>
                                    <div className="modal-body">
                                        <video src={video.src} id="video"
                                            poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
                                            controls muted autoPlay>
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" card-body">
                            <h5 className="card-title">{video.title}</h5>
                            <p className="card-text">{video.description}</p>
                        </div>
                    </div>
                </div>
               ) 
            })}
        </div>
        </React.Fragment>
    )
}
}
const mapStateToProps = (state) => {
    return {
        Videos: state.videos.motionVideos
    };
}
export default connect(mapStateToProps, actions)(MotionVideos);
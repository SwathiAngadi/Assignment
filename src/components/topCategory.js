import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

class TopCategory extends React.Component {

componentDidMount() {
this.props.topCategoryVideos();
//console.log(res);
}

stopVideo = () => {
    console.log("pointer");
    var video = document.getElementById("video");
    video.pause();
}

render () {
    const {categoryVideos} = this.props;
    return (
        <React.Fragment> 
        <h4><i className="fas fa-music"></i>Top Category</h4>
        <div className="row">        
        {categoryVideos && categoryVideos.map ((video, id) => {           
           return (
            <div key={video.id} className="col-sm-3 spacing">
          
                <div className="card">
                    <img className="card-img-top image" data-toggle="modal" data-target={"#myModal" + id} src={video.img}></img>
                    <div className="modal fade" id={"myModal" +id}>
                        <div className="modal-dialog">
                            <div className="modal-content">                            
                                <div class="modal-header">                                   
                                    <button type="button" class="close" data-dismiss="modal" onClick = {this.stopVideo}>&times;</button>
                                </div>
                                <div className="modal-body">
                                    <video src={video.src} id="video"
                                        poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
                                        controls  autoPlay muted>
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
        categoryVideos: state.videos.categoryVideos
    };
}
export default connect(mapStateToProps, actions)(TopCategory);
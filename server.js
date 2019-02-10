var express = require("express");
var app = express();
const cors = require('cors');

app.use(cors());

app.get("/topCategory", (req,res,next) => {
    res.send({
        category: [
            {   
                "img": "https://images.pexels.com/photos/269561/pexels-photo-269561.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "src": "http://yt-dash-mse-test.commondatastorage.googleapis.com/media/car-20120827-85.mp4",
                "title": "Dreams",
                "description": "Follow your dreams"
            },
            {
                "img": "https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "src": "http://yt-dash-mse-test.commondatastorage.googleapis.com/media/oops-20120802-85.mp4",
                "title": "Happy Holi",
                "description": "Celebration of Colours, happiness"
            },
            {
                "img": "https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "src": "http://yt-dash-mse-test.commondatastorage.googleapis.com/media/oops_cenc-20121114-150.mp4",
                "title": "Fun",
                "description": "Childhood fun filled stage"
            },
            {
                "img": "https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "src": "http://yt-dash-mse-test.commondatastorage.googleapis.com/media/car-20120827-8b.mp4",
                "title": "Caring",
                "description": "Sharing is caring"
            },
            {
                "img": "https://images.pexels.com/photos/1369642/pexels-photo-1369642.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "src": "http://yt-dash-mse-test.commondatastorage.googleapis.com/media/motion-20120802-8b.mp4",
                "title": "Marathon",
                "description": "Run for fitness"
            },
            {
                "img": "https://images.pexels.com/photos/234541/-ancient-meditation-architecture-234541.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "src": "http://yt-dash-mse-test.commondatastorage.googleapis.com/media/feelings_vp9-20130806-245.webm",
                "title": "Buddhist",
                "description": "Achieving peace, finding inner strength"
            }
        ]
    });
});
app.get("/carVideos", (req, res, next) => {
    res.send({
        car: [
            {   "id": 1,
                "img": "https://images.pexels.com/photos/1174103/pexels-photo-1174103.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "src": "http://yt-dash-mse-test.commondatastorage.googleapis.com/media/car-20120827-85.mp4",
                "title": "Travelling",
                "description": "Travel teaches lot many things"
            },
            {   "id": 1,
                "img": "https://images.pexels.com/photos/1257836/pexels-photo-1257836.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "src": "http://yt-dash-mse-test.commondatastorage.googleapis.com/media/car-20120827-86.mp4",
                "title": "Time",
                "description": "Time is everything"
            },
            {   "id": 1,
                "img": "https://images.pexels.com/photos/399672/pexels-photo-399672.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "src": "http://yt-dash-mse-test.commondatastorage.googleapis.com/media/car-20120827-87.mp4",
                "title": "Friendship",
                "description": "Friends for life"
            },
            {   "id": 1,
                "img": "https://images.pexels.com/photos/159745/hurdles-track-race-competition-159745.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "src": "http://yt-dash-mse-test.commondatastorage.googleapis.com/media/car-20120827-88.mp4",
                "title": "Goals",
                "description": "Towards the goal"
            },
            {   "id": 1,
                "img": "https://images.pexels.com/photos/736505/pexels-photo-736505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "src": "http://yt-dash-mse-test.commondatastorage.googleapis.com/media/car-20120827-89.mp4",
                "title": "Freedom",
                "description": "Finding happiness in small things"
            }
        ]
    });
});
app.get("/motionVideos", (req, res, next) => {
    res.send({
        motion: [
            {   "id": 1,
                "img": "https://images.pexels.com/photos/227674/pexels-photo-227674.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "src": "http://yt-dash-mse-test.commondatastorage.googleapis.com/media/feelings_vp9-20130806-242.webm",
                "title": "Carefree",
                "description": "Set yourself free from all the boundaries"
            },
            {   "id": 2,
                "img": "https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "src": "http://yt-dash-mse-test.commondatastorage.googleapis.com/media/feelings_vp9-20130806-245.webm",
                "title": "Family",
                "description": "Love and care"
            },
            {   "id": 3,
                "img": "https://images.pexels.com/photos/1688501/pexels-photo-1688501.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "src": "http://yt-dash-mse-test.commondatastorage.googleapis.com/media/motion-20120802-87.mp4",
                "title": "Kids",
                "description": "Pure and happy soul"
            },
            {   "id": 4,
                "img": "https://images.pexels.com/photos/705771/pexels-photo-705771.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "src": "http://yt-dash-mse-test.commondatastorage.googleapis.com/media/motion-20120802-88.mp4",
                "title": "Gaint Wheel",
                "description": "Life is like a circle"
            },
            {   "id": 5,
                "img": "https://images.pexels.com/photos/1501949/pexels-photo-1501949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "src": "http://yt-dash-mse-test.commondatastorage.googleapis.com/media/motion-20120802-89.mp4",
                "title": "Independent Women",
                "description": "Wome with a red outfit"
            }
        ]
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
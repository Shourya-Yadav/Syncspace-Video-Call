let IS_PROD = true;
const server = IS_PROD ?
    "https://syncspace-video-call-backend.onrender.com" :

    "http://localhost:8000"


export default server;
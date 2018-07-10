module.exports = {
  title: 'Ninja: Anonymous Peer-to-Peer Prediction Exchange.',
  BASE_API_URL: "${BASE_API_URL}",
  PUBLIC_URL: "${PUBLIC_URL}",
  GOOGLE_API_KEY: '${GOOGLE_API_KEY}',
  apikeyEtherscan: '${apikeyEtherscan}',
  firebase: {
    apiKey: '${firebase_apiKey}',
    authDomain: '${firebase_authDomain}',
    databaseURL: '${firebase_databaseURL}',
    projectId: '${firebase_projectId}',
    storageBucket: '${firebase_storageBucket}',
    messagingSenderId: '${firebase_messagingSenderId}',
  },
  ipfindKey: '${ipfindKey}',
  ipapiKey: '${ipapiKey}',
  social: {
    isUseSocial: ${social_isUseSocial},
    googleAnalyticId: '${social_googleAnalyticId}',
    facebookPixelId: '${social_facebookPixelId}',
    facebookAppId: '${social_facebookAppId}',
  },
  PredictionHandshakeFileName: '${PredictionHandshakeFileName}',
  dropConsole: false,
  isStaging: true,
  caches: false,
};

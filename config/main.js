module.exports = {
    // Secret key for JWT signing and encryption
    'secret': 'super secret passphrase',
    // Database connection information
    'database': 'mongodb://pipyala:pippeep@ds129374.mlab.com:29374/pipyalah',
    // Setting port for server
    'port': process.env.PORT || 3000
}
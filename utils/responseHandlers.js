const handleError = (res, error, message) => {
    let _msg = error.errors[0].message;
    res.status(500).json({
        success: false, 
        message: _msg ? _msg : message
    })
}

const handleSuccess = (res, data, message) => {
    res.status(200).json({ success: true, message, data})
}

module.exports = {
    handleError,
    handleSuccess
}
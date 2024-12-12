const handleError = (res, error, message = 'Internal Server Error') => {
    console.error(error);
    res.status(500).send(message);
  };
  
  const handleSuccess = (res, data, message = 'Operation successful') => {
    res.status(200).send(data || message);
  };
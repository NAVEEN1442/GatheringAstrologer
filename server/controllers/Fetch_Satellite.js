const Satellite = require("../models/Satellite");
const apiURL = process.env.SATELLITE_API_URL;
const axios = require("axios");

exports.Fetch_Satellite = async (req, res) => {

    const satelliteID = req.params.id || null;
    let url;

  try {
    // Making the API request with endpoint

    satelliteID ? (url = `${apiURL}/${satelliteID}`) : (url = `${apiURL}`)

    const response = await axios.get(url);

    // Extracting the data from the response
    const data = response.data;

    // Sending a successful response
    return res.status(200).json({
      success: true,
      data,
      message: "Data fetched successfully",
    });

  } catch (error) {
    // Sending an error response with detailed error message
    return res.status(500).json({
      success: false,
      message: `Error fetching data from satellite API: ${error.message}`,
    });
  }
};

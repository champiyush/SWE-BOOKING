if(failed) return next(error);// -> next(error) is a function call that passes an error object error to the next middleware function in the middleware chain.

export const getHotels = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
      const hotels = await Hotel.find({
        ...others,
        cheapestPrice: { $gt: min | 1, $lt: max || 999 },
      }).limit(req.query.limit);
      res.status(200).json(hotels);
    } catch (err) {
      next(err);
    }
  }; // -> const { min, max, ...others } = req.query;: This line uses destructuring assignment to extract the min and max query parameters from the req.query object, and stores any other query parameters in the others object. const hotels = await Hotel.find({ ...others, cheapestPrice: { $gt: min | 1, $lt: max || 999 } }).limit(req.query.limit);: This line performs a database query using the Mongoose library to find hotels that match the query parameters. The ...others syntax spreads any other query parameters passed to the function as separate key-value pairs. The query also filters hotels based on the cheapestPrice field, which must be greater than min (or 1 if min is not provided), and less than max (or 999 if max is not provided). Finally, the query is limited to a maximum number of results based on the limit query parameter. res.status(200).json(hotels);: This line sends a JSON response to the client with a 200 status code, indicating that the request was successful, and the hotels data retrieved from the database is sent as the response payload. } catch (err) { next(err); }: This code block catches any errors that occurred during the execution of the try block and passes them to the next middleware function in the middleware chain through the next function.

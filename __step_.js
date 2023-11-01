/**
 * --------------------------
 *      Make API Secure
 * --------------------------
 *
 * The person who should have
 *
 * concept:
 * 1. assign to token for person (assess token, refresh token)
 * 2. access token contains: user identification (email, role etc). valid for a shorter duration
 * 3. refresh token is used: to recreate an access token that was expired.
 * 4. if refresh is invalid then logout the user
 */
/**
 * ----------------------------
 *     jwt- json web token
 * ----------------------------
 * server-->
 * 1. generate a token by using jwt.sing
 * 2. create api set cookie. http only, secure, sameSite
 * 3. cors setup origin and credential: true
 *  app.use(cors({
        origin: ['http://localhost:5173', 'http://localhost:5174'],
        credentials: true
    }));
 * 
 * client-->
 * 1. axios withCredentials: true
 */

/**
 *  ----------------------------
 *      For server api calls
 * ----------------------------
 * server-->
 * 1. install cookie parser and use it as a middleware
 * client-->
 * 1. make api call using axios withCredentials: true
 * or. credentials: 'include' when using fetch
 */



// require('crypto').randomBytes(64).toString('hex')

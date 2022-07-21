const middleware = {}

middleware['loggedIn'] = require('../middleware/loggedIn.js')
middleware['loggedIn'] = middleware['loggedIn'].default || middleware['loggedIn']

export default middleware

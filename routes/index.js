import express from 'express';
const router = express.Router();

// Define the GET route for the root URL
router.get('/', (request, response, next) => {
    response.json({ message: "Hello World" });
});

router.get('/redirect-to-google', function (req, res) {
    res.redirect('https://google.com')
});


// Export the router
export default router;

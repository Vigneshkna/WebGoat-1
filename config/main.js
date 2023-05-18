const axios = require('axios');
const { githubToken1, githubToken2 } = require('./config');

const validateToken = async () => {
    try {
      const response = await axios.get('https://api.github.com/user', {
        headers: {
          Authorization: `token ${githubToken1}`
        }
      });
  
      if (response.status === 200) {
        console.log('Token is valid.');
        // Additional logic or actions after successful token validation
      }
    } catch (error) {
      console.error('Token validation failed:', error.message);
      // Additional error handling or actions
    }
  };
  
  // Call the function to validate the token
  validateToken();
  
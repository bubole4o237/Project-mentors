const signup = async (email, password) => {
  try {
    const response = await fetch(`http://n2j-api.herokuapp.com/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    return data.success;
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
};

const exports = {
  signup,
}

export default exports;


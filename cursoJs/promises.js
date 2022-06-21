const loginUserPromise = (email, password) => {
  return new Promise((resolve, reject) => {
    const error = false;

    if (error) {
      reject(new Error("Falha no login"));
    }

    console.log("user logged");
    resolve({ email });
  });
};

const getUserVideos = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["video1", "video2", "video3"]);
      console.log("getUserVideos");
    }, 2000);
  });
};

const getVideoDetails = (video) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ title: "video title" });
      console.log("getVideoDetails");
    }, 2500);
  });
};

loginUserPromise("renan@gmail.com", "12345")
  .then((user) => getUserVideos(user.email))
  .then((video) => getVideoDetails(video[0]))
  .catch((error) => console.log({ error }));

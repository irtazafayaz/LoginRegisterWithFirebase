import admin from "../firebase";
import User from "../model/user";

export const isUserLoggedInMiddleWare = async (req, res,next) => {
  try {
    console.log("/server/isUserLoggedInMiddleWare - Token\n", req.headers.token);
    // console.log("/server/isUserLoggedInMiddleWare - Reqiest\n", req.headers.token);
    const firebaseUser = await admin.auth().verifyIdToken(req.headers.token);
    const user = await User.findOne({ email: firebaseUser.email });
    if (user) {
      console.log("/server/isUserLoggedInMiddleWare - Found User \n", user);
      req.currentUser = user;
      next();
    } else {
      const newUser = await new User({
        email: firebaseUser.email,
        name: firebaseUser.name
          ? firebaseUser.name
          : firebaseUser.email.split("@")[0],
        picture: firebaseUser.picture ? firebaseUser.picture : "/avatar.jpg",
      }).save();
      console.log("User added in Mongoose DB \n", newUser);
      req.currentUser = user;
      next();
    }
  } catch (err) {
    console.log("/server/isUserLoggedInMiddleWare - Error Caught \n", err);
    // console.log("ERROR !!! \n", err);
    res.status(401).json({
      err,
    });
  }
};

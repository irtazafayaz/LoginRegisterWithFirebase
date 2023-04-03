import admin from "../firebase";

export const currentUser = async (req, res) => {

    try {
        const firebaseUser = await admin.auth().verifyIdToken(req.headers.token);
        res.json(firebaseUser);
        console.log("Firebase User - ", firebaseUser);
    } catch (err) {
        console.log("ERROR !!! ", err);
        res.status(401).json({
            err
        });
    }

}
const auth = (req, res, next) => {
  if (!req.session.user_id) {
    return res.redirect("/homepage");
  }
  next();
};

export { auth };

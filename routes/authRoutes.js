const router = require('express').Router();
const passport = require('passport');

router.get(
    '/github',
    passport.authenticate('github', { scope: ['user:email'] })
);

router.get(
    '/github/callback',
    passport.authenticate('github', {
        failureRedirect: '/'
    }),
    (req, res) => {
        res.redirect('/api-docs');
    }
);

router.get('/logout', (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }

        res.redirect('/');
    });
});

module.exports = router;
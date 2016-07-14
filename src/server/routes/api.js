// /* eslint-disable no-console*/
// import { Router } from 'express';
// import userController from '../controllers/userController';
// import refresh from 'passport-oauth2-refresh';
// import Users from '../../../mysql.config';
// import bcrypt from 'bcrypt';
// import passport from 'passport';
// import LocalStrategy from 'passport-local';

// const router = new Router();

// const saltRounds = 10;

// // Middleware that checks if user is already authenticated
// const isAuthenticated = (req, res, next) => {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   return res.redirect('/');
// };

// /* Users */
// router.route('/api/user').get(userController.getAll);
// /* Authentication */

// // Generating new access tokens using refresh token
// router.route('/api/token').get(isAuthenticated, (req, res) => { /* If user is authenticated */
//   // Finding user that is currently logged in based on their email
//   Users.findOne({
//     where: {
//       email: req.user.email,
//     },
//   })
//   .then(result => result.refreshToken)
//   .then(token => {
//     // This method gets a new access token upon expiration of token every hour
//     refresh.requestNewAccessToken('google', token, (err, accessToken) => {
//       // eslint-disable-next-line
//       req.user.accessToken = accessToken;
//       res.send({ accessToken });
//     });
//   });
// });

// // Handle SignUp routing/authentication
// router.route('/signup')
//   .post((req, res) => {
//     const userInfo = req.body;
//     // Validation of user information
//     req.checkBody('firstname', 'First name is required').notEmpty();
//     req.checkBody('lastname', 'Last name is required').notEmpty();
//     req.checkBody('email', 'Email is required').notEmpty();
//     req.checkBody('email', 'Email is not valid').isEmail();
//     req.checkBody('password', 'Password is required').notEmpty();
//     req.checkBody('passwordConfirm', 'Passwords do not match').equals(req.body.password);

//     const errors = req.validationErrors();

//     if (errors) {
//       console.log('ERRORS: ', errors);
//       res.send(JSON.stringify({
//         response: errors,
//       }));
//     } else {
//     // Check database to see if email already exist
//       Users.findAll({
//         where: {
//           email: userInfo.email,
//         },
//       })
//       .then(result => {
//         // If email already exist in database, send error message back to client
//         if (result.length > 0) {
//           res.send(JSON.stringify({
//             response: 'Email already exists',
//           }));
//         } else { /* If email doesn't exist in our database */
//           // Salt user password
//           bcrypt.genSalt(saltRounds, (err, salt) => {
//             if (err) {
//               console.log(err);
//             }
//             bcrypt.hash(userInfo.password, salt, (error, hash) => {
//               if (error) {
//                 console.log(error);
//               }
//               // Save userinfo to database
//               Users.create({
//                 firstname: userInfo.firstname,
//                 lastname: userInfo.lastname,
//                 password: hash,
//                 email: userInfo.email,
//               })
//               .then(() => {
//                 res.send(JSON.stringify({
//                   redirect: '/dashboard',
//                 }));
//               })
//               .catch(error1 => {
//                 console.error('Error: ', error1);
//               });
//             });
//           }); // Close hash
//         } // Close else
//       })
//       .catch(error2 => {
//         console.err('Error: ', error2);
//       });
//     } // Close else
//   }); /* Closes our post */

// // Passport Local Authentication
// passport.use('local', new LocalStrategy({
//   usernameField: 'email',
//   passwordField: 'password',
// }, (userEmail, password, done) => {
//   // Query database
//   Users.findOne({
//     where: {
//       email: userEmail,
//     },
//   })
//   .then(user => { // Check user credentials
//     if (!user) {
//       done(null, false, { message: 'Unknown User' });
//     }
//     bcrypt.compare(password, user.dataValues.password, (err, samePW) => {
//       if (err) {
//         throw err;
//       }
//       if (!samePW) {
//         return done(null, false, { message: 'Invalid password' });
//       }
//       return done(null, user);
//     });
//   })
//   .catch(error => {
//     console.error(error);
//   });
// }));

// // Serialize user for session
// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// // Deserialize user from session
// passport.deserializeUser((id, done) => {
//   Users.findOne({
//     where: {
//       id,
//     },
//   })
//   .then((err, user) => {
//     if (user === null) {
//       done(new Error('Wrong user id'));
//     }
//     done(err, user);
//   });
// });

// router.post('/signin',
//   passport.authenticate('local'), (req, res) => {
//     req.session.save(err => {
//       if (err) {
//         console.log('ERROR: ', err);
//       } else {
//         res.send({
//           email: req.body.email,
//           redirect: '/dashboard',
//           session: req.session,
//         });
//       }
//     });
//   });

// router.get('/logout', (req, res) => {
//   req.logout();
//   res.redirect('/');
// });

// export default router;

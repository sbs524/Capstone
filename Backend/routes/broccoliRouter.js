const broccoliCtrl = require('../controllers/broccoliCtrl');
const router = require('express').Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
  });
const upload = multer({ storage: storage });


router.route('/')
    .get(broccoliCtrl.getBroccoli)
    .post(upload.array('images', 10), broccoliCtrl.insertBroccoli)
router.route('/:id')
    .delete(broccoliCtrl.deleteBroccoli)

router.route('/like')
    .post(broccoliCtrl.addLike)

router.route('/log')
    .get(broccoliCtrl.getLog)
    .post(upload.single('bidder_image'),  broccoliCtrl.insertLog)

router.route('/users')
    .get(broccoliCtrl.getUsers)
    .post(upload.single('profile_image'), broccoliCtrl.insertUser)
router.route('/users/:id/:pw')
    .delete(broccoliCtrl.deleteUser)

router.route('/end')
    .get(broccoliCtrl.checkBoard)
    .post(broccoliCtrl.endBoard)
    
module.exports=router;
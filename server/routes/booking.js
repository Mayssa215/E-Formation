import express from 'express';
import {Reserverformation, Getreservationbyid,getreservedtraining,CancelReservation, Reservationcancled,getSearchBooking,getBooking} from '../controllers/booking.js';
const router = express.Router();
router.post ('/reserver',Reserverformation)
router.get ('/getbyid',Getreservationbyid)
router.get ('/getvalider',getreservedtraining)
router.delete ('/annuler', CancelReservation)
router.delete ('/delete', Reservationcancled)
router.get('/',getSearchBooking);
router.get('/booking', getBooking);



export default router ;

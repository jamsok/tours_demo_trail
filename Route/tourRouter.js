const express = require("express");
const tourController = require("../controller/tourController");

// read fs for get and write

/*ROUTES
api for get all tours route
app.get("/tours", Alltours);
resonding to URL params or tours by ID
app.get("/tours/:id", getTours);
creating tours or posting data(tours)
app.post("/tours", CreateTours);
update tours
app.patch("/tours/:id", UpdateTour);
delete tour
app.delete("/tours/:id", deletetour);*/

const router = express.Router();
// param middleware route
// router.param("id", tourController.checkID);
router
  .route("/")
  .get(tourController.Alltours)
  .post(tourController.checkbody, tourController.CreateTours);
router
  .route("/:id")
  .get(tourController.getTours)
  .patch(tourController.UpdateTour)
  .delete(tourController.deletetour);

module.exports = router;

const fs = require("fs");

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../data/simple.json`));
//avoid repeated id check with middleware
exports.checkID = (req, res, next, val) => {
  console.log(`tourid is :${val}`);
  if (req.params.id * 1 > tours.length) {
    // if (!tour) {
    return res.status(404).json({
      status: "fail",
      message: "invaild id",
    });
  }
  next();
};
//body middleware check body either name or price,, add to the post route
exports.checkbody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: "fail",
      message: "missing name or price",
    });
  }
  next();
};
exports.Alltours = (req, res) => {
  res.json({
    result: tours.length,
    data: {
      tours,
    },
  });
};

// get tour by id
exports.getTours = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  /* check if id is present or not
     if (id > tours.length) {*/
  //   if (!tour) {
  //     return res.status(404).json({
  //       status: "fail",
  //       message: "invaild id",
  //     });
  //   }

  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
};
// post tours or create tours function
exports.CreateTours = (req, res) => {
  /*const tour = new tours(req.body);
    tour
      .save()
      .then((result) => {
        console.log(req.body);
      })
      .catch((err) => console.log(err));
    console.log(req.body);
    res.send("done");*/

  // check array id
  const newId = tours[tours.length - 1].id + 1;
  // assign the javascript object i.e., id to newTour
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);
  // write in fs i.e., tours
  fs.writeFile(
    `${__dirname}/data/simple.json`,
    JSON.stringify(tours), //stringify converts the javascript object to json
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          newTour,
        },
      });
    }
  );
};
// update tours
exports.UpdateTour = (req, res) => {
  //   if (req.params.id * 1 > tours.length) {
  //     // if (!tour) {
  //     return res.status(404).json({
  //       status: "fail",
  //       message: "invaild id",
  //     });
  //   }

  res.status(200).json({
    status: "success",
    data: {
      tours: "<Updated here..>",
    },
  });
};

// delete tours by id
exports.deletetour = (req, res) => {
  res.status(204).json({
    status: "success",
    data: {
      tours: null,
    },
  });
};

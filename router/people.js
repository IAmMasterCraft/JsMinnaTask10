const express = require("express");
const People = require("../models/People");
const router = express.Router();

//@routes POST api/people
//@desc Post a People
//@access Public
router.post("/people", (request, response) => {
    const info = {
        name: request.body.name,
        age: request.body.age,
        sex: request.body.sex,
        complexion: request.body.complexion,
        race: request.body.race,
        dateOfBirth: request.body.dateOfBirth,
        phoneNumber: request.body.phoneNumber,
        address: request.body.address,
        stateOfOrigin: request.body.stateOfOrigin,
        nationality: request.body.nationality,
    };

    const newPerson = new Person(info);

    newPerson
        .save
        .then(() => {
            return response.status(201).json({
                success: true,
                message: `record created for ${info.name}`,
            });
        })
        .catch((error) => {
            return response.status(400).json({
                error,
                success: false,
                message: `record not created!`
            });
        });
});

//@routes GET api/people
//@desc Get all People
//@access Public
router.get("/people", async(request, response) => {
    try {
        const allPeople = await People.find();
        return response.status(201).json(allPeople);
    } catch (error) {
        return response.status(400).json({ error });
    }
});

//@routes DELETE api/people/:id
//@desc Delete a People with :id
//@access Public
router.delete("/people/:id", async(request, response) => {
    try {
        await People.findByIdAndDelete(request.params.id, (error, people) => {
            if (error) {
                return response.status(400).json({ success: false, error });
            }
            if (!people) {
                return response
                    .status(404)
                    .json({ success: false, message: `People not found` });
            }
        });
        return response.json({ success: true, message: `Record deleted Successfully` });
    } catch (error) {
        response.status(404).json({ success: false, error });
    }
});

module.exports = router;
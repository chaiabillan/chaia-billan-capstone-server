const knex = require("knex")(require("../knexfile"));

const postEmail = async ( req, res ) => {

    try {
        const { email_address } = req.body;

        await knex("emails").insert({ email_address });

        res.status(201).json({ message: "Email added successfully" });
    } catch (error) {
        console.error("Error adding email:", error);
        res.status(500).json({ message: "Failed to add email" });
    }
}

module.exports = {
    postEmail
};

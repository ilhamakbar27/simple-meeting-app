const router = require("express").Router();
const ClientController = require("../controller/clientController");

router.post("/", ClientController.createClient);
router.get("/", ClientController.getAllClient);
router.get("/:id", ClientController.getClientById);
router.put("/:id", ClientController.updateClient);
router.delete("/:id", ClientController.deleteClient);


module.exports = router;
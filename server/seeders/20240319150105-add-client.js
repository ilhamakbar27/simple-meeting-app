"use strict";

const { hash } = require('../utils/hash');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Clients",
      [
        {
          name: "client1",
          email: "jojo@mail.com",
          phone: "08123456789",
          password: hash("12345"),
          credit: 10000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "clien2",
          email: "jao@mail.com",
          phone: "08123456789",
          password: hash("12345"),
          credit: 1000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Clients", null, {restartIdentity:true, truncate:true, cascade:true});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

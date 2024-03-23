'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Rooms",[
      {
        roomName: "Executive",
        costPerHour: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roomName: "Standart",
        costPerHour: 70,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],{})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Rooms', null, {restartIdentity:true, truncate:true, cascade:true});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

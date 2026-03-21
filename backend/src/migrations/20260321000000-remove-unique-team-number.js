'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      'ALTER TABLE "teams" DROP CONSTRAINT IF EXISTS "teams_teamNumber_key";'
    );
    await queryInterface.sequelize.query(
      'DROP INDEX IF EXISTS "teams_teamNumber_key";'
    );
    await queryInterface.sequelize.query(
      'DROP INDEX IF EXISTS "teams_teamNumber_unique";'
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addConstraint('teams', {
      fields: ['teamNumber'],
      type: 'unique',
      name: 'teams_teamNumber_key',
    });
  },
};

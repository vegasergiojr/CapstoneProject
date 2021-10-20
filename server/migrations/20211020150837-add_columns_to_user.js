'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return Promise.all([

      queryInterface.addColumn(
        'Users',
        'cont2',
        {
          type: Sequelize.STRING
        },
      ),
      queryInterface.addColumn(
        'Users',
        'cont3',
        {
          type: Sequelize.STRING
        },
      ),
      queryInterface.addColumn(
        'Users',
        'cont4',
        {
          type: Sequelize.STRING
        },
      ),
      queryInterface.addColumn(
        'Users',
        'cont5',
        {
          type: Sequelize.STRING
        },
      ),
      queryInterface.addColumn(
        'Users',
        'link1',
        {
          type: Sequelize.STRING
        },
      ),
      queryInterface.addColumn(
        'Users',
        'link2',
        {
          type: Sequelize.STRING
        },
      ),
      queryInterface.addColumn(
        'Users',
        'link3',
        {
          type: Sequelize.STRING
        },
      ),
      queryInterface.addColumn(
        'Users',
        'link4',
        {
          type: Sequelize.STRING
        },
      ),
      queryInterface.addColumn(
        'Users',
        'link5',
        {
          type: Sequelize.STRING
        },
      ),
    ])

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

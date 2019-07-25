exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('cars')
    .truncate()
    .then(function () {
      return knex('cars').insert([
        { name: 'toyota' },
        { name: 'honda' },
        { name: 'bmw' },
        { name: 'mercedes' },
      ]);
    });
};

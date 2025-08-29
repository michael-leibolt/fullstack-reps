/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const { faker } = require('@faker-js/faker')

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  const data = []
  const entries = 7
  for(let i = 0; i < entries; i++){
    let date = String(faker.date.birthdate()).slice(11, 16)
    data.push({
      id: i,
      title: faker.lorem.word(),
      main_character: faker.person.fullName(),
      release_date: date
    })
  }

  await knex('favorites').del()
  await knex('favorites').insert(data);
};

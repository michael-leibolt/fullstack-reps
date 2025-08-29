/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const { faker } = require('@faker-js/faker');

let fakeNumber = 3
  let data = []
  for(let i = 0; i < fakeNumber; i++){
    let date = String(faker.date.past()).slice(11, 16)
    data.push({id: i, title: faker.lorem.word(), main_character: faker.person.fullName(), year_released: date })
  }


exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('favorites').del()
  await knex('favorites').insert(data);
};

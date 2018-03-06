
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('publishers').del()
        .then(function () {
            // Inserts seed entries
            return knex('publishers').insert([
                {id: 1, name: 'NXB-Japan', address: 'Japan', phone:'0189'},
                {id: 2, name: 'NXB-Japan', address: 'Japan', phone:'0189'},
                {id: 3, name: 'NXB-Japan', address: 'Japan', phone:'0189'},
                {id: 4, name: 'NXB-Japan', address: 'Japan', phone:'0189'}
            ]);
        });
};


exports.seed = function(knex, Promise) {
    return knex('publishers').del()
        .then(function () {
            return knex('publishers').insert([
                {id: 1, name: 'NXB-Japan', address: 'Japan', phone:'0189'},
                {id: 2, name: 'NXB-Vietnam', address: 'Vietnam', phone:'0189'},
                {id: 3, name: 'NXB-Laos', address: 'Laos', phone:'0189'},
                {id: 4, name: 'NXB-Timor leste', address: 'Timor leste', phone:'0189'}
            ]);
        });
};

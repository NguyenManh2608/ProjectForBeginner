exports.seed = function(knex, Promise) {
    return knex('books').truncate()
        .then(function () {
            return knex('books').insert([
                {title: 'Phim Hai',      author: 'Mr.Bean', publisher_id: 1, price: 34512},
                {title: 'Phim Hai',      author: 'Mr.Bean', publisher_id: 1, price: 34512},
                {title: 'Truyen Tranh',     author: 'Chuoi Tieu', publisher_id: 2, price: 12000},
                {title: 'Truyen Tranh',     author: 'Chuoi Hot', publisher_id: 3, price: 12000},
                {title: 'Truyen Tranh',     author: 'Chuoi Ngu', publisher_id: 4, price: 12000},

            ]);
        });
};

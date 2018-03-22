class Publisher {

    /**
     *
     * @param {string} name
     */
    constructor (name) {
        this.name = name;
    }

    /**
     *
     * @return {int|null}
     */
    getId () {
        return this.id;
    }

    /**
     *
     * @return {string|null}
     */
    getAddress () {
        return this.address;
    }

    /**
     *
     * @return {number|null}
     */
    getPhone() {
        return this.phone;
    }

    /**
     *
     * @param {int} id
     */
    setId (id) {
        this.id= id;
    }

    /**
     *
     * @param {string} address
     */
    setAddress (address) {
        this.address = address;
    }

    /**
     *
     * @param {number} phone
     */
    setPhone (phone) {
        this.phone = phone;
    }

    setName(name) {
        this.name = name;
    }

    getName(name) {
        return this.name;
    }

    isSame(publisher) {
        return this.getId() === publisher.getId();
    }
}

module.exports = Publisher;
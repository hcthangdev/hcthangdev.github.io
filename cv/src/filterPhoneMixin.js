export const filterPhoneMixin = {
    data() {
        return {
            phones: ['iphone', 'samsung', 'xiaomi'],
            keyword: ''
        }
    },
    computed: {
        filterPhone() {
            return this.phones.filter(phone => {
                return phone.match(this.keyword)
            })
        },
    },
}
module.exports = {
    encodeURI: value => encodeURIComponent(encodeURIComponent(value)),
    decodeURI: value => decodeURIComponent(decodeURIComponent(value))
}
export const util = {
  getBoolean (value, defaultValue) {
    switch (value) {
      case true:
      case 'true':
      case 1:
      case '1':
      case 'on':
      case 'yes':
        return true
      case false:
      case 'false':
      case 0:
      case '0':
      case 'off':
      case 'no':
        return false
      default:
        return defaultValue || false
    }
  }
}

export default util

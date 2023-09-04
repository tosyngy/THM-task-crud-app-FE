export const checkInput = (...input: string[]): Boolean => {
    input.forEach((value) => {
      if (!/^[a-zA-Z]{3}$/.test(value)) {
        return true
      }
    })
    return false
  }
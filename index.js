function relativeToAbsolute(input) {
  return input.reduce(
    (arr, val)=> {
      return arr.concat([arr[arr.length-1]+val])
    },
    [input[0]]
  )
}

relativeToAbsolute([12,34,12])


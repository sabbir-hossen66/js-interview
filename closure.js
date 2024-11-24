let man = 'manush'
const people = () => {
  let count = 0;

  return () => {
    count++

    console.log(`${man}`)
  }
}

const manush = people()
manush()
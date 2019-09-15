import React, { useState } from 'react'

const MultiCounter = () => {
  const [counts, setCounts] = useState({
    countA: 0,
    countB: 0
  }) // state is an object

  const incA = () =>
    setCounts(counts => ({
      ...counts,
      countA: counts.countA + 1
    }))

  const incB = () =>
    setCounts(counts => ({
      ...counts,
      countB: counts.countB + 1
    }))
  // no bueno, use spread operator
  const badIncA = () =>
    setCounts({
      countA: counts.countA + 1
    })

  return (
    <>
      <div> A: {counts.countA} </div>
      <div> B: {counts.countB} </div>
      <button onClick={incA}>Increment A</button>
      <button onClick={incB}>Increment B</button>
      <button onClick={badIncA}>Increment A Badly</button>
    </>
  )
}
export default MultiCounter

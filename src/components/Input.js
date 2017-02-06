import React from 'react'

const Input = ({ pushVideo }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        pushVideo(input.value)
        input.value = ''
      }}>
        <input
          ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Video
        </button>
      </form>
    </div>
  )
}

export default Input
